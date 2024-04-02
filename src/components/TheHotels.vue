<script setup lang="ts">
import type { Image } from '@/types'
import { useAppStore } from '../stores/app'
import { computed } from 'vue'

const appStore = useAppStore()

const hotels = computed(() => {
  return appStore?.hotels
})

const randomImagePic = (images: Image[]) => {
  const imgURL = images[Math.floor(Math.random() * images.length)].url
  return imgURL
}
</script>

<template>
  <article class="mx-auto p-3 max-w-7xl">
    <div class="">
      <div class="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          class="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div
            v-for="hotel in hotels"
            :key="hotel.hotelId"
            class="group relative bg-white rounded-xl p-2 shadow-xl"
          >
            <router-link :to="`/hotel-review/${hotel.hotelId}`">
              <div
                class="w-full relative min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
              >
                <img
                  :src="randomImagePic(hotel.images)"
                  :alt="hotel.name"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-blue-900 font-semibold">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ hotel.name }}
                  </h3>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
