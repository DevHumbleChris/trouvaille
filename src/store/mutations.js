import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'

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
  SIGN_IN_WITH_GOOGLE () {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  SIGN_UP_WITH_EMAIL (state, payload) {
    const auth = getAuth()

    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then(userCredential => {
        console.log(userCredential)
      })
      .catch(err => {
        state.authenticationError = err.message
      })
  },
  CLOSE_ALERT_MODAL (state) {
    state.authenticationError = ''
  }
}
