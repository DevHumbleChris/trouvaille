<template>
  <div
    v-if="pageLoadAnimation"
    class="mx-auto flex justify-center align-center max-w-xs mt-64 mb-3"
  >
    <div class="loader"></div>
  </div>
  <div v-if="pageLoadAnimation" class="text-center text-xl">
    Trouvaille: Home Is Where the Heart
    <FontAwesomeIcon :icon="['fas', 'heart']" class="text-red-600 mx-1" />
    Is.
  </div>
  <div v-else class="bg-white">
    <div class="pt-3">
      <h3 class="text-center text-2xl text-blue-600 font-extrabold">
        {{ hotel.name }}
      </h3>
      <!-- Image gallery -->
      <div
        class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img
            :src="hotel.images[0].url"
            :alt="hotel.images[0].altText ? hotel.images[0].altText : ''"
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="hotel.images[1].url"
              :alt="hotel.images[1].altText ? hotel.images[1].altText : ''"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="hotel.images[3].url"
              :alt="hotel.images[3].altText ? hotel.images[3].altText : ''"
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div
          class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        >
          <img
            :src="hotel.images[2].url"
            :alt="hotel.images[2].altText ? hotel.images[2].altText : ''"
            class="w-full h-full object-center"
          />
        </div>
      </div>

      <!-- component -->
      <div class="flex flex-col bg-white m-auto p-auto">
        <div class="flex overflow-x-scroll hide-scroll-bar">
          <div v-for="(image, index) in hotel.images" :key="index" class="flex flex-nowrap">
            <div class="inline-block px-3 my-3">
              <div
                class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <img
                  :src="image.url"
                  :alt="image.altText ? image.altText : ''"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="max-w-2xl mx-auto pt-2 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Hotel Information</h2>
          <!-- Reviews -->
          <div v-if="hotel.starRating" class="mt-2">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center justify-between">
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
              </div>
              <p class="sr-only">{{ hotel.starRating }} out of 5 stars</p>
              <span class="ml-3 text-sm font-extrabold text-indigo-600 hover:text-indigo-500"
                >{{ hotel.starRating }} Stars Rated</span
              >
              <div>
                <button
                  v-if="isAddedToWishList"
                  class="rounded-md border w-fit shadow-sm px-4 py-2 bg-rose-600 text-sm font-medium text-white hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-100 focus:ring-rose-500"
                  @click="removeFromWishList(hotel.hotelId)"
                >
                  <span>
                    <FontAwesomeIcon :icon="['fas', 'heart']" />
                    Added
                  </span>
                </button>

                <button
                  v-else
                  class="rounded-md border w-fit border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  @click="addWishList(hotel.hotelId)"
                >
                  <span>
                    <FontAwesomeIcon :icon="['fas', 'heart']" />
                    Add to Wishlist
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="py-4 lg:pt-6 lg:pb-3 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ hotel.description.short || hotel.description }}
              </p>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-900">What This Place Offers</h3>

            <div class="mt-2">
              <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                <li v-for="amenity in hotel.amenities" :key="amenity.code" class="text-gray-400">
                  <span class="text-gray-600">{{ amenity.formatted }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form class="mt-4 mb-4 border px-3 py-2 rounded-xl" @submit.prevent="handleSubmit">
          <div class="">
            <p class="text-xl my-2">
              <span class="font-extrabold"> $24 </span>
              /night
            </p>
          </div>
          <div class="my-2">
            <h3 class="text-xl font-extrabold">Guests</h3>
            <p
              v-if="formData.adult > 0 || formData.children > 0 || formData.infants > 0"
              class="p-2 mb-2"
            >
              <span v-if="formData.adult > 0"> {{ formData.adult }} Adults </span>
              <span v-if="formData.children > 0"> {{ formData.children }} children </span>
              <span v-if="formData.infants > 0"> {{ formData.infants }} infants. </span>
            </p>
            <div class="border rounded p-3">
              <p class="py-2">
                <span class="font-bold"> Adults </span>
                <span class="float-right flex justify-between items-center">
                  <button
                    class="mx-4 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    @click="decAdult"
                    :disabled="formData.adult === 0"
                  >
                    <FontAwesomeIcon :icon="['fas', 'minus']" />
                  </button>
                  <p>
                    {{ formData.adult }}
                  </p>
                  <button
                    class="mx-4 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    @click="incAdult"
                  >
                    <FontAwesomeIcon :icon="['fas', 'plus']" />
                  </button>
                </span>
              </p>
              <p class="my-3">
                <span class="font-bold"> Children </span>
                <span class="float-right flex justify-between items-center">
                  <button
                    class="mx-4 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    @click="decChildren"
                    :disabled="formData.children === 0"
                  >
                    <FontAwesomeIcon :icon="['fas', 'minus']" />
                  </button>
                  <p>
                    {{ formData.children }}
                  </p>
                  <button
                    class="mx-4 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    @click="incChildren"
                  >
                    <FontAwesomeIcon :icon="['fas', 'plus']" />
                  </button>
                </span>
                <span class="block px-2"> Ages 2-12 </span>
              </p>
              <p class="my-3">
                <span class="font-bold"> Infants </span>
                <span class="float-right flex justify-between items-center">
                  <button
                    class="mx-4 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    @click="decInfants"
                    :disabled="formData.infants === 0"
                  >
                    <FontAwesomeIcon :icon="['fas', 'minus']" />
                  </button>
                  <p class="">
                    {{ formData.infants }}
                  </p>
                  <button
                    class="mx-4 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    @click="incInfants"
                  >
                    <FontAwesomeIcon :icon="['fas', 'plus']" />
                  </button>
                </span>
                <span class="block px-2"> Under 2 </span>
              </p>
            </div>
          </div>
          <!-- <LitepieDatepicker placeholder="Confirm Dates" v-model="dateValue"> </LitepieDatepicker> -->
          <button
            type="submit"
            class="mt-2 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { useAppStore } from '../stores/app'
import { useRoute } from 'vue-router'

const appStore = useAppStore()

const { params } = useRoute()

const formData = ref({
  adult: 0,
  children: 0,
  infants: 0
})

const hotels = computed(() => {
  return appStore?.hotels
})

const wishList = computed(() => {
  return appStore?.wishList
})

const pageLoadAnimation = computed(() => {
  return appStore?.pageLoadAnimation
})

const hotel = computed(() => {
  const hotel = hotels.value.filter((hotel) => hotel.hotelId === params.hotelID)
  return hotel[0]
})

const isAddedToWishList = computed(() => {
  const filteredHotel = wishList.value.filter(
    (oneHotel) => oneHotel.hotelId === hotel.value.hotelId
  )

  if (filteredHotel.length > 0) {
    return true
  } else {
    return false
  }
})

const addWishList = (hotelId: string) => {
  appStore?.ADD_TO_WISH_LIST(hotelId)
}

const removeFromWishList = (hotelId: string) => {
  appStore?.REMOVE_FROM_WISH_LIST(hotelId)
}

const handleSubmit = () => {}

const incAdult = () => {
  formData.value.adult += 1
}

const decAdult = () => {
  formData.value.adult -= 1
}

const incChildren = () => {
  formData.value.children += 1
}

const decChildren = () => {
  formData.value.children -= 1
}

const incInfants = () => {
  formData.value.infants += 1
}

const decInfants = () => {
  formData.value.infants -= 1
}

onMounted(() => {
  appStore?.loadSpinner()
})
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
