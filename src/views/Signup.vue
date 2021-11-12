<template>
  <div class="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div>
        <div class="flex justify-center items-center">
          <img class="h-12" src="https://www.kindpng.com/picc/m/271-2712971_cute-house-clipart-png-house-clipart-png-transparent.png" alt="Workflow" />
          <h3 class="mx-2 font-extrabold text-2xl">
            Trouvaille
          </h3>
        </div>
        <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Register Account.
        </h2>
      </div>
      <form class="mt-3 space-y-3 border p-2 border-gray-400 rounded-2xl" method="POST" @submit.prevent="handleFormSubmit">
        <Alert />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :disabled="authenticationAnimation.type === 'sign-up'">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            <CirclesToRhombusesSpinner
              v-if="authenticationAnimation.type === 'sign-up'"
              :animation-duration="1200"
              :circles-num="3"
              :circle-size="15"
              color="#fff"
            />
            <span v-else>
              Sign up
            </span>
          </button>
        </div>
      </form>

      <h3 class="text-center text-xl font-extrabold">
        Or
      </h3>

      <div>
        <button class="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="googleSignIn">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <FontAwesomeIcon :icon="['fab', 'google']" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          <CirclesToRhombusesSpinner
            v-if="authenticationAnimation.type === 'google-sign-in'"
            :animation-duration="1200"
            :circles-num="3"
            :circle-size="15"
            color="#fff"
          />
          <span v-else>
            Sign in With Google
          </span>
        </button>
        <button class="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <FontAwesomeIcon :icon="['fas', 'user-astronaut']" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          <CirclesToRhombusesSpinner
            v-if="authenticationAnimation.type === 'guest-sign-in'"
            :animation-duration="1200"
            :circles-num="3"
            :circle-size="15"
            color="#fff"
          />
          <span v-else>
            Sign in As Guest
          </span>
        </button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="ml-2 block font-medium">
            Already Have An Account?
          </span>
          <router-link to="/login" class="font-extrabold text-md text-indigo-600 hover:text-indigo-500 mx-2">
            Sign in.
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'
import Alert from '@/components/Alert.vue'
import { CirclesToRhombusesSpinner } from 'epic-spinners'

export default {
  name: 'Signup',
  components: {
    LockClosedIcon,
    Alert,
    CirclesToRhombusesSpinner
  },
  setup () {
    const user = ref([])
    const email = ref('')
    const password = ref('')
    const store = useStore()
    const authenticationAnimation = computed(() => store.state.authenticationAnimation)

    function googleSignIn () {
      store.commit('SIGN_IN_WITH_GOOGLE')
    }

    function handleFormSubmit () {
      store.commit('SIGN_UP_WITH_EMAIL', {
        email: email.value,
        password: password.value
      })
    }

    return {
      user,
      googleSignIn,
      email,
      password,
      handleFormSubmit,
      authenticationAnimation
    }
  }
}
</script>
