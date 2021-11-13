import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

export default {
  WISH_LIST_MODAL (state) {
    state.openWishList = !state.openWishList
  },
  ADD_TO_WISH_LIST (state, payload) {
    const hotel = state.hotels.filter(hotel => hotel.hotelId === payload)
    const addedInfo = { ...hotel[0], isAddedToWishList: true }
    state.wishList.push(addedInfo)
  },
  REMOVE_FROM_WISH_LIST (state, payload) {
    const wishList = state.wishList.filter(hotel => hotel.hotelId !== payload)
    state.wishList = wishList
  },
  CLEAR_THE_WISH_LIST (state) {
    state.pageLoadAnimation = true
    state.wishList = []
    setTimeout(() => {
      state.pageLoadAnimation = false
    }, 3000)
  },
  LOADING_SPINNER (state) {
    state.pageLoadAnimation = true
    setTimeout(() => {
      state.pageLoadAnimation = false
    }, 5000)
  },
  SIGN_IN_WITH_GOOGLE (state) {
    state.authenticationAnimation = {
      load: true,
      type: 'google-sign-in'
    }

    setTimeout(() => {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()

      signInWithPopup(auth, provider)
        .then(result => {
          router.replace('/')
        })
        .catch(err => {
          state.authenticationError = err.message
        })
      state.authenticationAnimation = {
        load: false,
        type: ''
      }
    }, 3000)
  },
  SIGN_UP_WITH_EMAIL (state, payload) {
    state.authenticationAnimation = {
      load: true,
      type: 'sign-up'
    }

    setTimeout(() => {
      const auth = getAuth()

      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then(userCredential => {
          console.log(userCredential)
          router.push('/')
        })
        .catch(err => {
          state.authenticationError = err.message
        })
      state.authenticationAnimation = {
        load: false,
        type: ''
      }
    }, 3000)
  },
  CLOSE_ALERT_MODAL (state) {
    state.authenticationError = ''
  },
  SIGN_IN_WITH_EMAIL (state, payload) {
    state.authenticationAnimation = {
      load: true,
      type: 'sign-in'
    }

    setTimeout(() => {
      const auth = getAuth()

      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then(userCredential => {
          return userCredential
        })
        .catch(err => {
          state.authenticationError = err.message
        })
      state.authenticationAnimation = {
        load: false,
        type: ''
      }
    }, 3000)
  },
  SIGN_OUT () {
    const auth = getAuth()

    signOut(auth)
      .then(() => {
        router.push({
          name: 'Login'
        })
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}
