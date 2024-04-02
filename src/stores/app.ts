import { type Hotel } from '../types/index'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const hotels = ref<Hotel[]>([
    {
      hotelId: 'b0dcf0a3-f19b-4566-a3b1-1c5aa4cafe3a',
      name: 'Crowne Plaza Manchester Airport, an IHG Hotel',
      currency: 'EUR',
      starRating: 3,
      description: {
        short:
          'The Hotel Guitart Rosa *** is the oldest hotel in the chain, with 60 years of history. This unique colonial building is located in the commercial centre of Lloret and is perfect for couples and groups looking for fun during their holidays. '
      },
      phoneNumbers: ['+34 972 365 100'],
      emails: ['gdapi-staging-hotel+b0dcf0a3-f19b-4566-a3b1-1c5aa4cafe3a@getimpala.com'],
      websiteUrl: null,
      images: [
        {
          altText: null,
          height: 3763,
          width: 2485,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/8586da31.jpg',
          isHeroImage: true
        },
        {
          altText: null,
          height: 2007,
          width: 2979,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/3853404b.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 3763,
          width: 3190,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/8d69380b.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/add22c11.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/92f253fe.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/e8e62093.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/1000000/20000/17900/17821/45a7ddaa.jpg',
          isHeroImage: false
        }
      ],
      address: {
        line1: 'Calle Sant Pere 67',
        line2: null,
        city: 'Lloret De Mar',
        postalCode: '17310',
        region: null,
        country: 'ESP',
        countryName: 'Spain'
      },
      location: {
        longitude: 2.8454284,
        latitude: 41.7018658
      },
      amenities: [
        {
          code: 5,
          formatted: 'Air conditioning'
        },
        {
          code: 50,
          formatted: 'Housekeeping '
        },
        {
          code: 66,
          formatted: 'Outdoor pool'
        },
        {
          code: 76,
          formatted: 'Restaurant'
        },
        {
          code: 165,
          formatted: 'Lounges/bars'
        },
        {
          code: 168,
          formatted: 'Onsite laundry'
        },
        {
          code: 327,
          formatted: 'Events ticket service'
        },
        {
          code: 1,
          formatted: '24-hour front desk'
        },
        {
          code: 58,
          formatted: 'Laundry/Valet service'
        },
        {
          code: 68,
          formatted: 'Parking'
        },
        {
          code: 71,
          formatted: 'Pool'
        }
      ],
      roomCount: 149,
      checkIn: {
        from: '15:00'
      },
      checkOut: {
        to: '10:00'
      },
      termsAndConditions: '',
      createdAt: '2021-04-08T10:02:07.935Z',
      updatedAt: '2021-04-08T13:03:09.620Z',
      externalUrls: [],
      roomTypes: [
        {
          roomTypeId: '490f38d1-6413-41b1-832c-a9cfa13c168f',
          name: 'Junior Suite',
          description:
            'The Junior Suites of the Hotel Guitart Rosa *** invite you to enjoy a spacious room. In the center of Lloret de Mar, with full bedroom for couples or couples with 2 children with option of double bed plus sofa bed, terrace overlooking the garden and pool, bathroom, safe, telephone, TV , minibar and fully air-conditioned.',
          maxOccupancy: 3,
          rates: [],
          amenities: [
            {
              code: 85,
              formatted: 'Private bathroom'
            },
            {
              code: 126,
              formatted: 'Air conditioning individually controlled in room'
            },
            {
              code: 97,
              formatted: 'Shower only'
            },
            {
              code: 92,
              formatted: 'Safe'
            },
            {
              code: 18,
              formatted: 'Cable television'
            },
            {
              code: 16,
              formatted: 'Bidet'
            }
          ],
          images: [
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8pkxkg00ox0snn461ybnmh.jpg'
            },
            {
              altText: null,
              height: 2536,
              width: 3801,
              url: 'https://cdn.impala.travel/properties/ckn8pe6uz00ob0snn9v6tdq5v.jpg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8pkbtk00ou0snn9tc3gtwo.jpg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8pkio000ov0snngre5a1to.jpg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8plqzq00oy0snna765fr3y.jpg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8pkqat00ow0snnackk03id.jpg'
            },
            {
              altText: null,
              height: 2542,
              width: 3801,
              url: 'https://cdn.impala.travel/properties/ckn8pduwv00oa0snng5q1fz0n.jpg'
            },
            {
              altText: null,
              height: 2536,
              width: 3801,
              url: 'https://cdn.impala.travel/properties/ckn8pei1s00od0snne7ocf510.jpg'
            }
          ]
        },
        {
          roomTypeId: '2c7c01e9-d82b-4aac-a551-04d151d7309d',
          name: 'Double Pool View',
          description:
            'The relaxing views of the pool and garden of these double rooms of the Hotel Guitart Rosa *** make them the perfect stay for those who want a holiday a few meters from the Mediterranean.',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 97,
              formatted: 'Shower only'
            },
            {
              code: 126,
              formatted: 'Air conditioning individually controlled in room'
            },
            {
              code: 92,
              formatted: 'Safe'
            },
            {
              code: 85,
              formatted: 'Private bathroom'
            },
            {
              code: 18,
              formatted: 'Cable television'
            },
            {
              code: 16,
              formatted: 'Bidet'
            }
          ],
          images: [
            {
              altText: null,
              height: 649,
              width: 1024,
              url: 'https://cdn.impala.travel/properties/ckn8phj0m00ok0snna951ayb7.jpg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/area-types/ckn8w5v6500013b6bem11z4p0.jpg'
            },
            {
              altText: null,
              height: 505,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8pge1q00oh0snn3viw6pui.jpg'
            },
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8phh7y00oj0snneupm5i8r.jpg'
            }
          ]
        },
        {
          roomTypeId: '3d42afd1-e406-4eb6-8c86-8574d8169922',
          name: 'Double Standard',
          description:
            'The standard double rooms of the Hotel Guitart Rosa *** mostly accommodate up to 3 people. All have a terrace, overlooking the shopping street or parking, bedroom with 2 beds, central heating, telephone, TV, safe and bathroom.',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 16,
              formatted: 'Bidet'
            },
            {
              code: 18,
              formatted: 'Cable television'
            },
            {
              code: 85,
              formatted: 'Private bathroom'
            },
            {
              code: 92,
              formatted: 'Safe'
            },
            {
              code: 97,
              formatted: 'Shower only'
            },
            {
              code: 126,
              formatted: 'Air conditioning individually controlled in room'
            }
          ],
          images: [
            {
              altText: null,
              height: 1366,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8pi12000on0snn6o1v2izy.jpg'
            },
            {
              altText: null,
              height: 499,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8pjm5100ot0snnapsj0aqp.jpg'
            },
            {
              altText: null,
              height: 499,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8pihfi00or0snnegw0fawl.jpg'
            },
            {
              altText: null,
              height: 745,
              width: 1024,
              url: 'https://cdn.impala.travel/properties/ckn8pi3or00op0snngg7e8bxd.jpg'
            }
          ]
        }
      ]
    }
  ])

  const pageLoadAnimation = ref(false)

  const loadSpinner = () => {
    pageLoadAnimation.value = true

    setTimeout(() => {
      pageLoadAnimation.value = false
    }, 3000)
  }

  const openWishList = ref(false)
  const wishList = ref<Hotel[]>([])

  const noOfWishListBucket = computed(() => {
    return wishList.value.length
  })

  const WISH_LIST_MODAL = () => {
    openWishList.value = !openWishList.value
  }

  const ADD_TO_WISH_LIST = (payload: string) => {
    const hotel = hotels.value.filter((hotel) => hotel.hotelId === payload)
    const addedInfo = { ...hotel[0], isAddedToWishList: true }
    wishList.value.push(addedInfo)
  }

  const REMOVE_FROM_WISH_LIST = (payload: string) => {
    const newWishList = wishList.value.filter((hotel) => hotel.hotelId !== payload)
    wishList.value = newWishList
  }

  const CLEAR_THE_WISH_LIST = () => {
    pageLoadAnimation.value = true
    wishList.value = []
    setTimeout(() => {
      pageLoadAnimation.value = false
    }, 3000)
  }

  return {
    hotels,
    pageLoadAnimation,
    loadSpinner,
    openWishList,
    wishList,
    noOfWishListBucket,
    WISH_LIST_MODAL,
    ADD_TO_WISH_LIST,
    REMOVE_FROM_WISH_LIST,
    CLEAR_THE_WISH_LIST
  }
})
