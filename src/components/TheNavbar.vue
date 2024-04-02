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
                    <div
                      v-for="item in category.featured"
                      :key="item.name"
                      class="group relative text-sm"
                    >
                      <div
                        class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                      >
                        <img
                          :src="item.imageSrc"
                          :alt="item.imageAlt"
                          class="object-center object-cover"
                        />
                      </div>
                      <a :href="item.href" class="mt-4 block font-medium text-gray-900">
                        <span class="absolute z-10 inset-0" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                      <p aria-hidden="true" class="mt-1 text-blue-600">Book Now</p>
                    </div>
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

            <div class="mx-auto border-t border-gray-200 py-2 px-4">
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
              <div>
                Made With
                <FontAwesomeIcon :icon="['fas', 'heart']" class="mx-1 text-red-600" />, Am.Chris_KE
              </div>
            </div>
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
                              <div
                                v-for="item in category.featured"
                                :key="item.name"
                                class="group relative text-base sm:text-sm"
                              >
                                <div
                                  class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                                >
                                  <img
                                    :src="item.imageSrc"
                                    :alt="item.imageAlt"
                                    class="object-center object-cover"
                                  />
                                </div>
                                <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true" />
                                  {{ item.name }}
                                </a>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                              </div>
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

const appStore = useAppStore()

const hotels = computed(() => {
  return appStore?.hotels
})

const open = ref(false)

const noOfWishListBucket = computed(() => {
  return appStore?.noOfWishListBucket
})

const navigation = {
  categories: [
    {
      id: 'suite',
      name: 'Suite',
      featured: [
        {
          name: 'Junior Suite',
          href: '#',
          imageSrc: 'https://cdn.impala.travel/properties/ckn8pkxkg00ox0snn461ybnmh.jpg',
          imageAlt: 'Junior Suite'
        },
        {
          name: 'Suite Sorrento',
          href: '#',
          imageSrc: 'https://cdn.impala.travel/properties/ckn8kst3c00hr0snn9o755ju8.jpg',
          imageAlt: 'Suite Sorrento'
        }
      ]
    },
    {
      id: 'apartments',
      name: 'Apartments',
      featured: [
        {
          name: 'Sketch Rooms & Apartments',
          href: '#',
          imageSrc: 'https://cdn.impala.travel/properties/ckn7el6c5001x0snnck2xgevv.jpg',
          imageAlt: 'Sketch Rooms & Apartments'
        },
        {
          name: 'Strauss Apartments',
          href: '#',
          imageSrc: 'https://cdn.impala.travel/properties/ckn7i8oje00830snn7r8d259i.jpg',
          imageAlt: 'Strauss Apartments'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' }
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' }
          ]
        }
      ]
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
