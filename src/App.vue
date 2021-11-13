<template>
  <Navbar />
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  setup () {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      const auth = getAuth()

      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login')
        } else if (route.path === '/login' || route.path === '/signup') {
          router.push('/')
        }
      })
    })
  }
}
</script>
