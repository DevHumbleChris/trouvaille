<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="flex justify-center items-center">
          <img class="h-12" src="https://www.kindpng.com/picc/m/271-2712971_cute-house-clipart-png-house-clipart-png-transparent.png" alt="Workflow" />
          <h3 class="mx-2 font-extrabold text-2xl">
            Trouvaille
          </h3>
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register Account.
        </h2>
      </div>
      <form class="mt-4 space-y-6 border p-2 border-gray-400 rounded-2xl" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
      <div>
        <button class="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="googleSignIn">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <FontAwesomeIcon :icon="['fab', 'google']" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Sign in With Google
        </button>
        <button class="my-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <FontAwesomeIcon :icon="['fas', 'user-astronaut']" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Sign in As Guest
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
import { ref } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/solid'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default {
  name: 'Signup',
  components: {
    LockClosedIcon
  },
  setup () {
    const user = ref([])
    console.log(getAuth().currentUser)
    function googleSignIn () {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then(result => {
          console.log(result)
          alert(result.user)
        }).catch(err => {
          console.log(err)
        })
    }

    return {
      user,
      googleSignIn
    }
  }
}
</script>
