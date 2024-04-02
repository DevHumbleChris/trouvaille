<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { FlowerSpinner } from 'epic-spinners'
import { computed } from 'vue'

const appStore = useAppStore()

const openWishList = computed(() => {
  return appStore?.openWishList
})

const wishList = computed(() => {
  return appStore?.wishList
})

const pageLoadAnimation = computed(() => {
  return appStore?.pageLoadAnimation
})

const noOfWishListBucket = computed(() => {
  return appStore?.noOfWishListBucket
})

const WISH_LIST_MODAL = () => {
  appStore?.WISH_LIST_MODAL()
}

const REMOVE_FROM_WISH_LIST = (hotelID: string) => {
  appStore?.REMOVE_FROM_WISH_LIST(hotelID)
}

const CLEAR_THE_WISH_LIST = () => {
  appStore?.CLEAR_THE_WISH_LIST()
}

const removeHotel = (hotelID: string) => {
  REMOVE_FROM_WISH_LIST(hotelID)
}

const clearAll = () => {
  CLEAR_THE_WISH_LIST()
}
</script>

<template>
  <TransitionRoot as="template" :show="openWishList">
    <Dialog as="div" class="fixed inset-0 z-50 overflow-hidden" @close="WISH_LIST_MODAL">
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle
                      v-if="noOfWishListBucket > 0"
                      class="text-lg font-medium text-gray-900"
                    >
                      Destination Wishlist
                      <span class="mx-2 font-extrabold text-blue-600">
                        [{{ noOfWishListBucket }}]
                      </span>
                    </DialogTitle>
                    <DialogTitle v-if="pageLoadAnimation" class="text-lg font-medium text-gray-900">
                      Clearing The Wishlist
                    </DialogTitle>
                    <DialogTitle
                      v-if="!pageLoadAnimation && noOfWishListBucket <= 0"
                      class="text-lg font-extrabold text-gray-900"
                    >
                      Destination Wishlist Is Empty
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        @click="WISH_LIST_MODAL"
                      >
                        <span class="sr-only">Close panel</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div v-if="noOfWishListBucket > 0" class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="hotel in wishList" :key="hotel.hotelId" class="py-6 flex">
                          <router-link
                            :to="`/hotel-review/${hotel.hotelId}`"
                            class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden"
                            @click="WISH_LIST_MODAL"
                          >
                            <img
                              :src="hotel.images[2].url"
                              :alt="hotel.images[2].altText ? hotel.images[2].altText : ''"
                              class="w-full h-full object-center object-cover"
                            />
                          </router-link>

                          <div class="ml-4 flex-1 flex flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <router-link
                                    :to="`/hotel-review/${hotel.hotelId}`"
                                    @click="WISH_LIST_MODAL"
                                  >
                                    {{ hotel.name }}
                                  </router-link>
                                </h3>
                              </div>
                              <div class="flex items-center">
                                <StarIcon
                                  v-for="rating in [0, 1, 2, 3, 4]"
                                  :key="rating"
                                  :class="[
                                    hotel.starRating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  ]"
                                  aria-hidden="true"
                                />
                                <p class="sr-only">{{ hotel.starRating }} out of 5 stars</p>
                                <span
                                  class="ml-3 text-lg font-extrabold text-indigo-600 hover:text-indigo-500"
                                  >{{ hotel.starRating }} Stars Rated</span
                                >
                              </div>
                            </div>
                            <div class="flex-1 flex items-end justify-between text-sm">
                              <div class="flex">
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                  @click="removeHotel(hotel.hotelId)"
                                >
                                  <FontAwesomeIcon
                                    :icon="['fas', 'trash']"
                                    class="font-extrabold"
                                  />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div v-if="pageLoadAnimation" class="text-center text-xl font-extrabold mt-64">
                    Clearing The Wishlist...
                  </div>
                  <div
                    v-if="pageLoadAnimation"
                    class="mx-auto flex justify-center align-canter max-w-xs mt-2 flex-wrap"
                  >
                    <FlowerSpinner :animation-duration="2500" :size="120" color="#ff1d5e" />
                  </div>
                  <div v-if="!pageLoadAnimation && noOfWishListBucket <= 0" class="mt-8">
                    <div class="p-2">
                      <img
                        src="https://mthtrains.com/sites/default/files/new-my-mth-wishlist.png"
                        alt="wishlist_empty"
                        class="mx-auto lg:w-48 md:w-48"
                      />
                      <div class="p-3 my-2 text-center">
                        <h4 class="text-2xl font-extrabold">
                          WishList Is
                          <span class="text-red-600 mx-1"> Empty. </span>
                        </h4>
                        <p class="p-2">Looks Like Your WishList Is Empty.</p>
                        <p class="p-2">
                          Click here to Start Browsing And
                          <router-link
                            to="/"
                            class="text-indigo-600 font-medium hover:text-indigo-500 mx-1"
                            @click="WISH_LIST_MODAL"
                          >
                            Add To WishList<span aria-hidden="true"> &rarr;</span>
                          </router-link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-if="noOfWishListBucket > 0 && !pageLoadAnimation"
                  class="border-t border-gray-200 py-6 px-4 sm:px-6"
                >
                  <div class="mt-6">
                    <button
                      class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      @click="clearAll"
                    >
                      <FontAwesomeIcon :icon="['fas', 'trash-alt']" class="font-extrabold mx-2" />
                      Clear All Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
