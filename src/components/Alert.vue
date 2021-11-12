<template>
  <div v-if="error" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-500">
    <span class="text-xl inline-block mr-5 align-middle">
      <FontAwesomeIcon :icon="['fas', 'bell']" />
    </span>
    <span class="inline-block align-middle mr-8 text-sm">
      <b class="capitalize">
        {{ error }}
      </b>
    </span>
    <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" @click="closeAlert()">
      <span>×</span>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Alert',
  setup () {
    const store = useStore()
    const error = computed(() => store.state.authenticationError)

    function closeAlert () {
      store.commit('CLOSE_ALERT_MODAL')
    }

    return {
      error,
      closeAlert
    }
  }
}
</script>
