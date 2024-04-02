<script setup lang="ts">
import TheHotels from '@/components/TheHotels.vue'
import { useAppStore } from '@/stores/app'
import { computed, onMounted } from 'vue'

const appStore = useAppStore()

const pageLoadAnimation = computed(() => {
  return appStore?.pageLoadAnimation
})

onMounted(() => {
  appStore.loadSpinner()
})
</script>

<template>
  <section class="mx-2">
    <div
      v-if="pageLoadAnimation"
      class="mx-auto flex justify-center align-center max-w-xs mt-64 flex-wrap mb-3"
    >
      <div class="loader"></div>
    </div>
    <div v-if="pageLoadAnimation" class="text-center text-xl">
      Trouvaille: Home Is Where the Heart
      <FontAwesomeIcon :icon="['fas', 'heart']" class="text-red-600 mx-1" />
      Is.
    </div>
    <TheHotels v-else />
  </section>
</template>
