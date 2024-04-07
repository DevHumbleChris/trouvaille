<template>
  <div class="bg-white sticky z-40 w-full mb-2 top-0 right-0 left-0">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto"
          >
            <div class="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                @click="open = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Logo -->
            <div class="ml-4 lg:ml-0 px-3 flex justify-center">
              <router-link to="/">
                <span class="sr-only">Workflow</span>
                <div class="flex items-center">
                  <img
                    class="h-14 w-auto"
                    src="https://www.kindpng.com/picc/m/271-2712971_cute-house-clipart-png-house-clipart-png-transparent.png"
                    alt=""
                  />
                  <span class="block mx-2 text-2xl font-extrabold appName"> Trouvaille </span>
                </div>
              </router-link>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-1">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-3 space-x-8">
                  <Tab
                    as="template"
                    v-for="category in navigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <button
                      :class="[
                        selected
                          ? 'text-indigo-600 border-indigo-600'
                          : 'text-gray-900 border-transparent',
                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="pt-8 pb-6 px-4 space-y-8"
                >
                  <div class="grid grid-cols-2 gap-x-4">
                    <router-link
                      :to="`/hotel-review/${item.hotelId}`"
                      v-for="item in category.featured"
                      :key="item.hotelId"
                      class="group relative text-sm"
                    >
                      <div
                        class="h-40 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                      >
                        <img
                          :src="item.images[2].url"
                          :alt="item.images[2].altText ? item.images[2].altText : ''"
                          class="w-full h-full object-center object-cover"
                        />
                      </div>
                      <p class="mt-4 block font-medium text-gray-900">
                        <span class="absolute z-10 inset-0" aria-hidden="true" />
                        {{ item.name }}
                      </p>
                      <p aria-hidden="true" class="mt-1 text-blue-600">Book Now</p>
                    </router-link>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <router-link
                  v-if="page.name === 'Hotels'"
                  :to="page.href"
                  class="-m-2 p-2 block font-medium text-gray-900"
                  @click="open = false"
                >
                  {{ page.name }}
                </router-link>
                <button
                  v-if="page.name === 'Wishlist'"
                  class="hover:text-gray-800"
                  @click="myWishList"
                >
                  Wishlist
                </button>
              </div>
            </div>

            <!-- <div class="mx-auto border-t border-gray-200 py-2 px-4">
              <a href="https://github.com/DevHumbleChris" class="text-2xl mx-2">
                <FontAwesomeIcon :icon="['fab', 'github']" />
              </a>
              <a href="https://www.instagram.com/am.chris_ke/" class="text-2xl mx-2">
                <FontAwesomeIcon :icon="['fab', 'instagram']" />
              </a>
              <a
                href="https://www.facebook.com/people/Humble-Chris/100011196098630/"
                class="text-2xl mx-2"
              >
                <FontAwesomeIcon :icon="['fab', 'facebook-square']" />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-humble-chris-2870331aa/"
                class="text-2xl mx-2"
              >
                <FontAwesomeIcon :icon="['fab', 'linkedin']" />
              </a>
              <a href="https://twitter.com/AmChrisKE" class="text-2xl mx-2">
                <FontAwesomeIcon :icon="['fab', 'twitter']" />
              </a>
              <a href="https://wa.me/message/BSLLTZE6NKUIF1" class="text-2xl mx-2">
                <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
              </a>
              
            </div> -->
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <p
        class="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8"
      >
        Trouvaille: Home Is Where The Heart
        <FontAwesomeIcon :icon="['fas', 'heart']" class="mx-1 text-red-600" />
        Is.
      </p>

      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <button
              type="button"
              class="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              @click="open = true"
            >
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="/" href="#">
                <span class="sr-only">Workflow</span>
                <div class="flex items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://www.kindpng.com/picc/m/271-2712971_cute-house-clipart-png-house-clipart-png-transparent.png"
                    alt=""
                  />
                  <span class="block mx-2 text-lg font-extrabold appName"> Trouvaille </span>
                </div>
              </router-link>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <Popover
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="flex"
                  v-slot="{ open }"
                >
                  <div class="relative flex">
                    <PopoverButton
                      :class="[
                        open
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800',
                        'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                      ]"
                    >
                      {{ category.name }}
                    </PopoverButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <PopoverPanel class="absolute top-full inset-x-0 text-sm text-gray-500">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-8">
                          <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                            <div class="col-start-2 grid grid-cols-2 gap-x-8">
                              <router-link
                                :to="`/hotel-review/${item.hotelId}`"
                                v-for="item in category.featured"
                                :key="item.name"
                                class="group relative text-base sm:text-sm"
                              >
                                <div
                                  class="h-40 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                                >
                                  <img
                                    :src="item.images[3].url"
                                    :alt="item.images[3].altText ? item.images[3].altText : ''"
                                    class="w-full h-full object-center object-cover"
                                  />
                                </div>
                                <p class="mt-4 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true" />
                                  {{ item.name }}
                                </p>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <router-link
                  to="/"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Hotels
                </router-link>
                <button
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  @click="WISH_LIST_MODAL"
                >
                  Wishlist
                </button>
              </div>
            </PopoverGroup>

            <div class="ml-auto flex items-center">
              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <button class="group -m-2 p-2 flex items-center" @click="WISH_LIST_MODAL">
                  <GlobeAltIcon
                    class="flex-shrink-0 h-6 w-6 text-blue-400 group-hover:text-blue-500"
                    aria-hidden="true"
                  />
                  <span
                    v-if="noOfWishListBucket > 0"
                    class="ml-2 text-lg font-extrabold text-blue-700 group-hover:text-gray-800"
                  >
                    {{ noOfWishListBucket }}
                  </span>
                  <WishList />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon, GlobeAltIcon, Bars3Icon } from '@heroicons/vue/24/outline'
import WishList from '../components/WishList.vue'
import { useAppStore } from '../stores/app'
import type { Hotel } from '@/types'

const appStore = useAppStore()

const suites = ref<Hotel[]>([
  {
    hotelId: '0358eba6-75d0-48d4-8fb6-c24b38510af2',
    name: 'Serena Beach Suite',
    currency: 'EUR',
    starRating: 3,
    description: {
      short:
        'Serena Beach Suite is 3 ways of saying holiday near the sea. Serena Beach Suite are the three hearts of a microcosm of comfort and wellness, overlooking the sea.'
    },
    phoneNumbers: ['+39 0541 344235'],
    emails: ['gdapi-staging-hotel+0358eba6-75d0-48d4-8fb6-c24b38510af2@getimpala.com'],
    websiteUrl: null,
    images: [
      {
        altText: null,
        height: 420,
        width: 667,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/3842d9d0.jpg',
        isHeroImage: true
      },
      {
        altText: null,
        height: 2690,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/473e9ee0.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2587,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/d07cdc44.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2557,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/9495a532.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 739,
        width: 1280,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/974005b5.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 709,
        width: 1300,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/612cab4a.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 855,
        width: 1280,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/0d834edd.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 852,
        width: 1280,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/49d5d42b.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 3840,
        width: 2561,
        url: 'https://images.trvl-media.com/lodging/1000000/10000/4200/4114/b48945c1.jpg',
        isHeroImage: false
      }
    ],
    address: {
      line1: 'Lungomare C. Colombo, 40',
      line2: null,
      city: 'Bellaria',
      postalCode: 'RN 47814',
      region: null,
      country: 'ITA',
      countryName: 'Italy'
    },
    location: {
      longitude: 12.466722,
      latitude: 44.1474488
    },
    amenities: [
      {
        code: 5,
        formatted: 'Air conditioning'
      },
      {
        code: 26,
        formatted: 'Currency exchange'
      },
      {
        code: 76,
        formatted: 'Restaurant'
      },
      {
        code: 77,
        formatted: 'Room service'
      },
      {
        code: 165,
        formatted: 'Lounges/bars'
      },
      {
        code: 242,
        formatted: 'Heated guest rooms'
      },
      {
        code: 1,
        formatted: '24-hour front desk'
      },
      {
        code: 198,
        formatted: 'Non-smoking rooms (generic)'
      }
    ],
    roomCount: 93,
    checkIn: {
      from: '12:00'
    },
    checkOut: {
      to: '10:00'
    },
    termsAndConditions: '',
    createdAt: '2021-04-08T08:04:44.806Z',
    updatedAt: '2021-04-08T08:04:44.806Z',
    externalUrls: [],
    roomTypes: [
      {
        roomTypeId: 'bd356f66-a15d-4a7d-ba86-cd35d1dae338',
        name: 'Junior Suite Positano',
        description:
          'Junior Suite Positano with walk in Closet, Modern and Spacious. \nComfort for the whole family, the walk in closet and a large bathroom with rain shower of colored light.\n\n- The big summer beds ensure a real relaxation.\n- On the 2nd and 3rd floor of the Milano Suite, about 22 square meters, can accommodate up to 4 people.\n- 32-inch TV with Sky Gold Vision (active only certain times of the year)\n- Access to Jacuzzi pool and outdoor solarium (summer)\n- Kettle with tea and coffee\n- Noise protection walls\n- Large bathroom with a shower box LED light\n- Welcome minibar, with first supply\n- Your favourite newspaper every morning\n- WI-FI Internet\n- iPod Station\n- Lighting smart card\n- Walk-in closet\n- 5 stars Double Bed\n- Armchair / Sofa\n- Blackout drapes.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 144,
            formatted: 'Soundproofed room'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 142,
            formatted: 'Shower'
          }
        ],
        images: [
          {
            altText: null,
            height: 730,
            width: 1280,
            url: 'https://cdn.impala.travel/properties/ckn8ks5ce00hp0snn0yb45hsl.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2928,
            url: 'https://cdn.impala.travel/properties/ckn8krmqu00hn0snneikhdrbd.jpg'
          },
          {
            altText: null,
            height: 657,
            width: 1024,
            url: 'https://cdn.impala.travel/properties/ckn8krv8700ho0snna6po5u67.jpg'
          }
        ]
      },
      {
        roomTypeId: 'd58b3a2e-180e-4d86-8487-f9db78d6435a',
        name: 'Suite Sorrento',
        description:
          'Suites Sorrento with Cabinet area and Two Spaces separated by Disengagement with a Door. \nWith quality furnishings and two rooms separated by a hallway with door.\nYou can enjoy your stay in complete freedom with over 34 square meters of room; divided between a full living room equipped, with a sink and microwave, and a private bedroom. On the first floor of Milano Suite, can accommodate up to 4 people, in complete freedom.\n\n- Access to Jacuzzi pool and outdoor solarium (summer)\n- Double 32-inch TV with Sky Gold Vision (active only during certain times of the year)\n- Kettle with tea and coffee\n5 stars large bed\n- Living room and Bedroom, separated by a door\n- Large bathroom with a shower LED light\n- Welcome minibar with refrigerator, and first supply\n- Favourite newspaper every morning\n- WI-FI Internet\n- iPod Station\n- Lighting smart card\n- Blackout drapes\n- Cabinet and small cabin\n- Noise protection walls\n- Sink and microwave.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 144,
            formatted: 'Soundproofed room'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 68,
            formatted: 'Microwave'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 270,
            formatted: 'Seating area with sofa/chair'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          }
        ],
        images: [
          {
            altText: null,
            height: 767,
            width: 1280,
            url: 'https://cdn.impala.travel/properties/ckn8ksxuh00ht0snn7ehld96n.jpg'
          },
          {
            altText: null,
            height: 2690,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8kst3c00hr0snn9o755ju8.jpg'
          },
          {
            altText: null,
            height: 2275,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8ksoud00hq0snnf931dx3z.jpg'
          }
        ]
      },
      {
        roomTypeId: '3fb04f7e-9265-4db2-89c2-e7f204188ddd',
        name: 'Room Bellaria with Balcony Economy',
        description:
          'Room Bellaria with Balcony Economy - Not Renovated. \nLocated at 3rd and 4th floor of Milano Hotel, not yet renovate in the floors and furniture. \n\n- Sleep up to 4 persons with  bunk bed, are the solution more economic.\n- They have a balcony and bathroom with shower box and hairdryer.\n- 22-Inch - satellite\n- Safe\n- Minibar\n- Telephone\n- Internet Wi-Fi\n- Air conditioning or heating\n- Balcony.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 16,
            formatted: 'Bidet'
          }
        ],
        images: [
          {
            altText: null,
            height: 705,
            width: 1002,
            url: 'https://cdn.impala.travel/properties/ckn8ktdab00hu0snn8kyx0wt3.jpg'
          }
        ]
      },
      {
        roomTypeId: '9780ab1d-1575-4e7e-a0cd-f47cd5df3c07',
        name: 'Room Bellaria with Balcony',
        description:
          'Located on the first 4 floors rooms at the Milano Hotel, are the solution for families that combines convenience and comfort.\nThey can accommodate up to 4 people with a bunk bed, convenient and practical for families.\nThey have a balcony with partial side sea view and bathroom with shower and hair dryer.\n(the room may differ in furnishing and layout)\n\n- 22-inch satellite TV\n- Safe\n- Minibar\n- Phone\n- Internet Wi-Fi\n- Air conditioning or heating\n- Balcony.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 251,
            formatted: 'TV'
          }
        ],
        images: [
          {
            altText: null,
            height: 660,
            width: 1470,
            url: 'https://cdn.impala.travel/properties/ckn8lab1200ia0snn6aoqbcvh.jpg'
          }
        ]
      },
      {
        roomTypeId: '57794ab6-4114-41cc-8eda-fa0b28eb306e',
        name: 'Room Gallipoli with Jacuzzi Shower',
        description:
          'Room Gallipoli with Jacuzzi Shower and Favourite newspaper. \nOn the 5th floor at Milano Hotel, they have a private balcony and a large shared roof terrace overlooking the sea ... Greater wellness and relax thanks to the shower box with vertical hydromassage. They can accommodate up to \n- 2 people, ideal for those searching quiet.\n- 32-inch satellite TV\n- Internet Wi-Fi\n- Welcome minibar, with first supply\n- Your favourite newspaper every morning\n- Air conditioning or heating\n- Shower Box with vertical hydromassage\n- Balcony Side Sea-View\n- Bed of superior quality.',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 28,
            formatted: 'Desk'
          }
        ],
        images: [
          {
            altText: null,
            height: 660,
            width: 1470,
            url: 'https://cdn.impala.travel/properties/ckn8lakld00ib0snn9pc05q1l.jpg'
          }
        ]
      }
    ]
  },
  {
    hotelId: 'c85a1574-af17-4b17-a397-12503e6f51f4',
    name: 'Voyager Beach Suite',
    currency: 'EUR',
    starRating: 3,
    description: {
      short:
        'Located in the art and literature hub of the vibrant Cortes neighbourhood, Script is your window to Mombasa creative culture. '
    },
    phoneNumbers: ['+34932713107'],
    emails: ['gdapi-staging-hotel+c85a1574-af17-4b17-a397-12503e6f51f4@getimpala.com'],
    websiteUrl: null,
    images: [
      {
        altText: null,
        height: 3840,
        width: 2560,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/8fcb978f.jpg',
        isHeroImage: true
      },
      {
        altText: null,
        height: 3840,
        width: 2560,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/a4a9a699.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/e02a84a9.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/d290a4b1.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2590,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/3900c366.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/fd992809.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 3840,
        width: 2560,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/bfc26bc6.jpg',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://images.trvl-media.com/lodging/2000000/1750000/1747500/1747416/6b238bbd.jpg',
        isHeroImage: false
      }
    ],
    address: {
      line1: 'Plaza De Las Cortes 4',
      line2: null,
      city: 'Madrid',
      postalCode: '28014 ',
      region: null,
      country: 'ESP',
      countryName: 'Spain'
    },
    location: {
      longitude: -3.6955262,
      latitude: 40.4158034
    },
    amenities: [
      {
        code: 5,
        formatted: 'Air conditioning'
      },
      {
        code: 36,
        formatted: 'Express check-in'
      },
      {
        code: 186,
        formatted: 'Street side parking'
      },
      {
        code: 37,
        formatted: 'Express check-out'
      },
      {
        code: 198,
        formatted: 'Non-smoking rooms (generic)'
      },
      {
        code: 243,
        formatted: 'Toilet'
      }
    ],
    roomCount: 13,
    checkIn: {
      from: '15:00'
    },
    checkOut: {
      to: '11:00'
    },
    termsAndConditions: '',
    createdAt: '2021-04-08T07:59:22.650Z',
    updatedAt: '2021-04-08T10:26:08.237Z',
    externalUrls: [],
    roomTypes: [
      {
        roomTypeId: '334023c2-4547-426d-bac0-f0453acc608f',
        name: 'Intimate',
        description:
          'Designed over 12 square metres, the intimate rooms feature a queen-sized bed, an ensuite bathroom, a foldable desk and air-conditioning. The sleek interior is grounded in simplicity and elegance. The modern room can accommodate up to 2 people.',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 15,
            formatted: 'Bath or Shower'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 162,
            formatted: 'Closets in room'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          }
        ],
        images: [
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nfy1700ed0snn9am6ev5f.jpg'
          },
          {
            altText: null,
            height: 2574,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nasms00e00snn8hry8uky.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nb1eh00e10snn9g87gt48.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nb9ov00e20snn1hqv7id9.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nbim600e30snn0isj4l7y.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nbsd000e40snng2ybh70n.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nc60v00e50snnbg7c7yx3.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn7ncl4h00e60snnhwdd1jhe.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn7nczq500e70snn8gg9gl1w.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nddak00e80snn1nx6e6ep.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7ndswg00e90snnajhpfqdx.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7ne84400ea0snnftlu7euz.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nff4e00ec0snnaf3ncud8.jpg'
          }
        ]
      },
      {
        roomTypeId: '177779d9-e83c-42db-a7b6-8a55dff32679',
        name: 'Single',
        description:
          'Designed over 11 square metres, the single rooms feature a single bed, an ensuite bathroom, a foldable desk and air-conditioning. The sleek interior is grounded in simplicity and elegance. The modern room can accommodate up to one person.',
        maxOccupancy: 1,
        rates: [],
        amenities: [
          {
            code: 162,
            formatted: 'Closets in room'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 15,
            formatted: 'Bath or Shower'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          }
        ],
        images: [
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nmq9500el0snn85cedyvs.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn7nk12500ej0snne0bx6h3w.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nl6g200ek0snndzcuha80.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn7nijn400eg0snnf5nf6xlv.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nixxp00eh0snngrb1g7ed.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nnv8600em0snn9znrhy83.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7ni7jd00ef0snn84zj0e0o.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7njff300ei0snnggu1f856.jpg'
          }
        ]
      },
      {
        roomTypeId: '94d7a471-71b7-4a4d-ac6a-748c8505561c',
        name: 'Intimate with View',
        description:
          'Designed over 14 square metres, the intimate rooms host a panoramic view of the neighbourhood. The rooms feature a queen-sized bed, an ensuite bathroom, a foldable desk and air-conditioning. The sleek interior is grounded in simplicity and elegance. The modern room can accommodate up to 2 people. ',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 251,
            formatted: 'TV'
          }
        ],
        images: [
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7oflmf00ev0snn0snucto4.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nt2zs00en0snncbg781jp.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7ntln900eo0snn2lpg2poq.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nu9g700ep0snn6lfu1o0g.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nvrwm00eq0snn6ak36gp4.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7nxuvc00er0snngzj7hh0a.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn7nz6fh00es0snn0klw48ot.jpg'
          },
          {
            altText: null,
            height: 2865,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7o0trc00et0snngk3u5uhh.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7o24xl00eu0snnbnb9cqwm.jpg'
          }
        ]
      },
      {
        roomTypeId: 'cba30a88-9ecd-48e7-8bcb-02d016e6e9cd',
        name: 'Deluxe',
        description:
          'Designed over 14 square metres, the deluxe rooms feature a queen-sized bed, a single bed, an ensuite bathroom, a foldable desk and air-conditioning. The sleek interior is grounded in simplicity and elegance. The modern room can accommodate up to 3 people.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          }
        ],
        images: [
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k9q5l00h30snn5j1e0gj7.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8ka7pi00h40snncusjgcwa.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8kap4800h50snn1tei8lhh.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8kb7rd00h60snn6c9j92ib.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8kbvfm00h70snn4vc7d0q2.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k71yd00gw0snnbga19e7f.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k7ezx00gx0snncmx56ks3.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k7s2900gy0snng7vlhuc6.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k866w00gz0snnbgd59q9e.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k8ji800h00snnfv4zfb0l.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn8k8y4500h10snney8ff5xy.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8k9ctb00h20snnbitpgr6r.jpg'
          }
        ]
      }
    ]
  }
])

const appartments = ref<Hotel[]>([
  {
    hotelId: 'afe0d1be-080c-47e3-a952-bb18bda9e1e0',
    name: 'Comfort Studio',
    currency: 'EUR',
    starRating: 3,
    description: {
      short:
        'Comfort Studio is located in Nairobi, 2.9 km from Kenyatta International Conference Centre, less than 1 km from Nairobi Snake Park, and a 10-minute walk from Nairobi Botanic Garden. This property offers access to a balcony, free private parking and free WiFi. The property is non-smoking and is set less than 1 km from Nairobi National Museum.'
    },
    phoneNumbers: ['+39 0541 344235'],
    emails: ['gdapi-staging-hotel+0358eba6-75d0-48d4-8fb6-c24b38510af2@getimpala.com'],
    websiteUrl: null,
    images: [
      {
        altText: null,
        height: 420,
        width: 667,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/521015750.jpg?k=c17c41fe52c678532e9a398b72d73ce184c78ef5717a55f22afc5e548fbc693c&o=&hp=1',
        isHeroImage: true
      },
      {
        altText: null,
        height: 2690,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/521026917.jpg?k=0402dc5dc5e879f2f99b298cf7316905952d0ea297f4d1ba74ccf9a0b95004a7&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2587,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/513550601.jpg?k=82225e232ca02661416d3466d11b0fa239515ac96c9983eb9bdfe236efd40d45&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2557,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/521026909.jpg?k=862ca780c2323af77ff2ca090ed8e83784d05475485a019b5ed0176c75d00d8f&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 739,
        width: 1280,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/521014209.jpg?k=092aff68db0f4c656c4924fd31160c0fd9aadeadf666ae11fb52e3cd0e16eba2&o=&hp=1',
        isHeroImage: false
      }
    ],
    address: {
      line1: 'Lungomare C. Colombo, 40',
      line2: null,
      city: 'Bellaria',
      postalCode: 'RN 47814',
      region: null,
      country: 'ITA',
      countryName: 'Italy'
    },
    location: {
      longitude: 12.466722,
      latitude: 44.1474488
    },
    amenities: [
      {
        code: 5,
        formatted: 'Air conditioning'
      },
      {
        code: 26,
        formatted: 'Currency exchange'
      },
      {
        code: 76,
        formatted: 'Restaurant'
      },
      {
        code: 77,
        formatted: 'Room service'
      },
      {
        code: 165,
        formatted: 'Lounges/bars'
      },
      {
        code: 242,
        formatted: 'Heated guest rooms'
      },
      {
        code: 1,
        formatted: '24-hour front desk'
      },
      {
        code: 198,
        formatted: 'Non-smoking rooms (generic)'
      }
    ],
    roomCount: 93,
    checkIn: {
      from: '12:00'
    },
    checkOut: {
      to: '10:00'
    },
    termsAndConditions: '',
    createdAt: '2021-04-08T08:04:44.806Z',
    updatedAt: '2021-04-08T08:04:44.806Z',
    externalUrls: [],
    roomTypes: [
      {
        roomTypeId: 'bd356f66-a15d-4a7d-ba86-cd35d1dae338',
        name: 'Junior Suite Positano',
        description:
          'Junior Suite Positano with walk in Closet, Modern and Spacious. \nComfort for the whole family, the walk in closet and a large bathroom with rain shower of colored light.\n\n- The big summer beds ensure a real relaxation.\n- On the 2nd and 3rd floor of the Milano Suite, about 22 square meters, can accommodate up to 4 people.\n- 32-inch TV with Sky Gold Vision (active only certain times of the year)\n- Access to Jacuzzi pool and outdoor solarium (summer)\n- Kettle with tea and coffee\n- Noise protection walls\n- Large bathroom with a shower box LED light\n- Welcome minibar, with first supply\n- Your favourite newspaper every morning\n- WI-FI Internet\n- iPod Station\n- Lighting smart card\n- Walk-in closet\n- 5 stars Double Bed\n- Armchair / Sofa\n- Blackout drapes.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 144,
            formatted: 'Soundproofed room'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 142,
            formatted: 'Shower'
          }
        ],
        images: [
          {
            altText: null,
            height: 730,
            width: 1280,
            url: 'https://cdn.impala.travel/properties/ckn8ks5ce00hp0snn0yb45hsl.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2928,
            url: 'https://cdn.impala.travel/properties/ckn8krmqu00hn0snneikhdrbd.jpg'
          },
          {
            altText: null,
            height: 657,
            width: 1024,
            url: 'https://cdn.impala.travel/properties/ckn8krv8700ho0snna6po5u67.jpg'
          }
        ]
      },
      {
        roomTypeId: 'd58b3a2e-180e-4d86-8487-f9db78d6435a',
        name: 'Suite Sorrento',
        description:
          'Suites Sorrento with Cabinet area and Two Spaces separated by Disengagement with a Door. \nWith quality furnishings and two rooms separated by a hallway with door.\nYou can enjoy your stay in complete freedom with over 34 square meters of room; divided between a full living room equipped, with a sink and microwave, and a private bedroom. On the first floor of Milano Suite, can accommodate up to 4 people, in complete freedom.\n\n- Access to Jacuzzi pool and outdoor solarium (summer)\n- Double 32-inch TV with Sky Gold Vision (active only during certain times of the year)\n- Kettle with tea and coffee\n5 stars large bed\n- Living room and Bedroom, separated by a door\n- Large bathroom with a shower LED light\n- Welcome minibar with refrigerator, and first supply\n- Favourite newspaper every morning\n- WI-FI Internet\n- iPod Station\n- Lighting smart card\n- Blackout drapes\n- Cabinet and small cabin\n- Noise protection walls\n- Sink and microwave.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 144,
            formatted: 'Soundproofed room'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 68,
            formatted: 'Microwave'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 270,
            formatted: 'Seating area with sofa/chair'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          }
        ],
        images: [
          {
            altText: null,
            height: 767,
            width: 1280,
            url: 'https://cdn.impala.travel/properties/ckn8ksxuh00ht0snn7ehld96n.jpg'
          },
          {
            altText: null,
            height: 2690,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8kst3c00hr0snn9o755ju8.jpg'
          },
          {
            altText: null,
            height: 2275,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn8ksoud00hq0snnf931dx3z.jpg'
          }
        ]
      },
      {
        roomTypeId: '3fb04f7e-9265-4db2-89c2-e7f204188ddd',
        name: 'Room Bellaria with Balcony Economy',
        description:
          'Room Bellaria with Balcony Economy - Not Renovated. \nLocated at 3rd and 4th floor of Milano Hotel, not yet renovate in the floors and furniture. \n\n- Sleep up to 4 persons with  bunk bed, are the solution more economic.\n- They have a balcony and bathroom with shower box and hairdryer.\n- 22-Inch - satellite\n- Safe\n- Minibar\n- Telephone\n- Internet Wi-Fi\n- Air conditioning or heating\n- Balcony.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 16,
            formatted: 'Bidet'
          }
        ],
        images: [
          {
            altText: null,
            height: 705,
            width: 1002,
            url: 'https://cdn.impala.travel/properties/ckn8ktdab00hu0snn8kyx0wt3.jpg'
          }
        ]
      },
      {
        roomTypeId: '9780ab1d-1575-4e7e-a0cd-f47cd5df3c07',
        name: 'Room Bellaria with Balcony',
        description:
          'Located on the first 4 floors rooms at the Milano Hotel, are the solution for families that combines convenience and comfort.\nThey can accommodate up to 4 people with a bunk bed, convenient and practical for families.\nThey have a balcony with partial side sea view and bathroom with shower and hair dryer.\n(the room may differ in furnishing and layout)\n\n- 22-inch satellite TV\n- Safe\n- Minibar\n- Phone\n- Internet Wi-Fi\n- Air conditioning or heating\n- Balcony.',
        maxOccupancy: 3,
        rates: [],
        amenities: [
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 251,
            formatted: 'TV'
          }
        ],
        images: [
          {
            altText: null,
            height: 660,
            width: 1470,
            url: 'https://cdn.impala.travel/properties/ckn8lab1200ia0snn6aoqbcvh.jpg'
          }
        ]
      },
      {
        roomTypeId: '57794ab6-4114-41cc-8eda-fa0b28eb306e',
        name: 'Room Gallipoli with Jacuzzi Shower',
        description:
          'Room Gallipoli with Jacuzzi Shower and Favourite newspaper. \nOn the 5th floor at Milano Hotel, they have a private balcony and a large shared roof terrace overlooking the sea ... Greater wellness and relax thanks to the shower box with vertical hydromassage. They can accommodate up to \n- 2 people, ideal for those searching quiet.\n- 32-inch satellite TV\n- Internet Wi-Fi\n- Welcome minibar, with first supply\n- Your favourite newspaper every morning\n- Air conditioning or heating\n- Shower Box with vertical hydromassage\n- Balcony Side Sea-View\n- Bed of superior quality.',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 210,
            formatted: 'Satellite television'
          },
          {
            code: 271,
            formatted: 'Separate toilet area'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 142,
            formatted: 'Shower'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 85,
            formatted: 'Private bathroom'
          },
          {
            code: 69,
            formatted: 'Minibar'
          },
          {
            code: 50,
            formatted: 'Hairdryer'
          },
          {
            code: 11,
            formatted: 'Bathroom amenities (free toiletries)'
          },
          {
            code: 16,
            formatted: 'Bidet'
          },
          {
            code: 28,
            formatted: 'Desk'
          }
        ],
        images: [
          {
            altText: null,
            height: 660,
            width: 1470,
            url: 'https://cdn.impala.travel/properties/ckn8lakld00ib0snn9pc05q1l.jpg'
          }
        ]
      }
    ]
  },
  {
    hotelId: '8128c46d-6d16-493a-a66a-db99d17a0e96',
    name: 'Urban Haven 3BR Apartment',
    currency: 'EUR',
    starRating: 3,
    description: {
      short:
        'Comprising an outdoor swimming pool and an indoor pool, Urban Haven 3BR Apartment is a recently renovated accommodation in Nairobi situated close to Century Cinemax Junction. This property offers access to a balcony, free private parking and free WiFi. The accommodation features airport transfers, while a car rental service is also available.'
    },
    phoneNumbers: ['+34 932 71 31 07'],
    emails: ['gdapi-staging-hotel+8128c46d-6d16-493a-a66a-db99d17a0e96@getimpala.com'],
    websiteUrl: null,
    images: [
      {
        altText: null,
        height: 2607,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/508174184.jpg?k=17870c66e98d2ea4a1fbc48ae160c797eaffa9864662a4b2c6e91a71c2398390&o=&hp=1',
        isHeroImage: true
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/508174436.jpg?k=f268dd842ac293772bf3d90a3e43f81bb1b5e7857eafcfd8f9d81003d728cf72&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2581,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/508174457.jpg?k=588570918a0949dcabfcff2ad6f73980d977ddce995797be6d5971af88b326a6&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/511186526.jpg?k=0b28b13d3478eb2058e3c5964a109e413df0f7cd76fbeaa5deb0c2e6b30c8ebd&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 2560,
        width: 3840,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/508174455.jpg?k=476f6d37c4362b704923207beaa5bacba6335a02fe759789f5a8ea61ac191ab5&o=&hp=1',
        isHeroImage: false
      },
      {
        altText: null,
        height: 3967,
        width: 6000,
        url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/508174176.jpg?k=06dc80d40ff0db90db3bef873119409c2b67540ea8e8de4d24f895654beae89a&o=&hp=1',
        isHeroImage: false
      }
    ],
    address: {
      line1: 'Carrer De Girona 81',
      line2: null,
      city: 'Barcelona',
      postalCode: '08009',
      region: null,
      country: 'ESP',
      countryName: 'Spain'
    },
    location: {
      longitude: 2.1702869,
      latitude: 41.3953411
    },
    amenities: [
      {
        code: 5,
        formatted: 'Air conditioning'
      },
      {
        code: 36,
        formatted: 'Express check-in'
      },
      {
        code: 50,
        formatted: 'Housekeeping '
      },
      {
        code: 186,
        formatted: 'Street side parking'
      },
      {
        code: 242,
        formatted: 'Heated guest rooms'
      },
      {
        code: 37,
        formatted: 'Express check-out'
      },
      {
        code: 198,
        formatted: 'Non-smoking rooms (generic)'
      }
    ],
    roomCount: 15,
    checkIn: {
      from: '15:00'
    },
    checkOut: {
      to: '11:00'
    },
    termsAndConditions: '',
    createdAt: '2021-04-07T16:03:39.895Z',
    updatedAt: '2021-04-08T10:11:25.338Z',
    externalUrls: [],
    roomTypes: [
      {
        roomTypeId: '4df96bea-7ebe-4423-b7cc-827e266f74be',
        name: 'Intimate at Roca',
        description:
          'Designed over 11 square metres, the Intimate rooms feature a queen-size bed, an ensuite bathroom with rain shower, and air conditioning. The retro-chic style complemented by vintage furniture and design objects takes you back in time.',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          }
        ],
        images: [
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lpknk00cp0snn932x763r.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2697,
            url: 'https://cdn.impala.travel/properties/ckn7lp6s500co0snncl6mhvad.jpg'
          },
          {
            altText: null,
            height: 2747,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lpxwz00cq0snn7wlx7t6f.jpg'
          },
          {
            altText: null,
            height: 3840,
            width: 2560,
            url: 'https://cdn.impala.travel/properties/ckn7lq8it00ct0snnbsz8hjhe.jpg'
          }
        ]
      },
      {
        roomTypeId: 'ccae4fc4-d11e-4946-a162-a9a8ad2d7f50',
        name: 'Deluxe with Balcony at Roca',
        description:
          'Designed over 15 square metres, the Deluxe rooms feature a king-size bed, an ensuite bathroom with rain shower, a private balcony, and air conditioning. The retro-chic style complemented by vintage furniture and design objects takes you back in time.',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 28,
            formatted: 'Desk'
          },
          {
            code: 2,
            formatted: 'Air conditioning'
          }
        ],
        images: [
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lsnwo00d70snn82sn115r.jpg'
          },
          {
            altText: null,
            height: 2700,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lsz4600da0snn6u0y6v6a.jpg'
          },
          {
            altText: null,
            height: 2409,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lt9wt00dd0snnfhejhayg.jpg'
          },
          {
            altText: null,
            height: 2666,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lsc7400d40snn6t8s24gl.jpg'
          }
        ]
      },
      {
        roomTypeId: '92b6fd1b-132b-44f9-b098-a3dba855afe9',
        name: 'Studio with Terrace at Roca',
        description:
          'Designed over 20 square metres, the studios feature a king-size bed, an ensuite bathroom with rain shower, a private balcony or terrace, and air conditioning. The retro-chic style complemented by vintage furniture and design objects takes you back in time.',
        maxOccupancy: 2,
        rates: [],
        amenities: [
          {
            code: 2,
            formatted: 'Air conditioning'
          },
          {
            code: 256,
            formatted: 'Dining room seats'
          },
          {
            code: 251,
            formatted: 'TV'
          },
          {
            code: 123,
            formatted: 'Wireless internet connection'
          },
          {
            code: 270,
            formatted: 'Seating area with sofa/chair'
          },
          {
            code: 28,
            formatted: 'Desk'
          }
        ],
        images: [
          {
            altText: null,
            height: 2586,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lvkbm00dp0snn6rxjemli.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lu7a000dh0snn8bfi8ch3.jpg'
          },
          {
            altText: null,
            height: 2839,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7luhoj00dj0snn5tn2189j.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lut8t00dl0snnflj239kg.jpg'
          },
          {
            altText: null,
            height: 2560,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lv75f00dn0snn3zptd82c.jpg'
          },
          {
            altText: null,
            height: 400,
            width: 847,
            url: 'https://cdn.impala.travel/area-types/ckn8q0quj00013b6bn9tbu1wj.jpg'
          },
          {
            altText: null,
            height: 400,
            width: 848,
            url: 'https://cdn.impala.travel/area-types/ckn8q0sae00023b6b59lwawe1.jpg'
          },
          {
            altText: null,
            height: 2434,
            width: 3840,
            url: 'https://cdn.impala.travel/properties/ckn7lvws100dr0snn5yi62dgf.jpg'
          }
        ]
      }
    ]
  }
])

const open = ref(false)

const noOfWishListBucket = computed(() => {
  return appStore?.noOfWishListBucket
})

const navigation = {
  categories: [
    {
      id: 'suite',
      name: 'Suite',
      featured: suites.value
    },
    {
      id: 'apartments',
      name: 'Apartments',
      featured: appartments.value
    }
  ],
  pages: [
    { name: 'Hotels', href: '/' },
    { name: 'Wishlist', href: '#' }
  ]
}

const WISH_LIST_MODAL = () => {
  return appStore?.WISH_LIST_MODAL()
}

const myWishList = () => {
  open.value = false
  WISH_LIST_MODAL()
}
</script>
