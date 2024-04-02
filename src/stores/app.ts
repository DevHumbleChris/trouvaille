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
    },
    {
      hotelId: 'aed6e7e3-be74-4fe2-b26f-5a8170b86e5c',
      name: 'Mains of Taymouth Country Estate',
      currency: 'EUR',
      starRating: 4,
      description: {
        short:
          'At the Mains of Taymouth Country Estate **** S you will enjoy its excellent location next to Avenida Diagonal, with all kinds of services for business clients and city breaks. Stay in a central hotel, contemporary style, recently renovated in Barcelona and with spacious rooms.'
      },
      phoneNumbers: ['+34 93 201 03 06'],
      emails: ['gdapi-staging-hotel+aed6e7e3-be74-4fe2-b26f-5a8170b86e5c@getimpala.com'],
      websiteUrl: null,
      images: [
        {
          altText: null,
          height: 2562,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/f3fe035b.jpg',
          isHeroImage: true
        },
        {
          altText: null,
          height: 2562,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/e03b6098.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2456,
          width: 3680,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/54a179d8.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2456,
          width: 3680,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/279d42cc.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2456,
          width: 3680,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/cd8c9d3b.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2456,
          width: 3680,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/2c3ab0a3.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2456,
          width: 3680,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/6ce0369a.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2562,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/a83942ac.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2506,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/065117fd.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/87cdbc92.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/6d329ccf.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/33000000/32730000/32722900/32722873/5a171e58.jpg',
          isHeroImage: false
        }
      ],
      address: {
        line1: 'Calle Muntaner 212',
        line2: null,
        city: 'Barcelona',
        postalCode: '08036 ',
        region: null,
        country: 'ESP',
        countryName: 'Spain'
      },
      location: {
        longitude: 2.150514,
        latitude: 41.3935164
      },
      amenities: [
        {
          code: 5,
          formatted: 'Air conditioning'
        },
        {
          code: 14,
          formatted: 'Business library'
        },
        {
          code: 50,
          formatted: 'Housekeeping '
        },
        {
          code: 53,
          formatted: 'Indoor parking'
        },
        {
          code: 77,
          formatted: 'Room service'
        },
        {
          code: 91,
          formatted: 'Tour/sightseeing desk'
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
      roomCount: 45,
      checkIn: {
        from: '14:00'
      },
      checkOut: {
        to: '12:00'
      },
      termsAndConditions: '',
      createdAt: '2021-04-08T09:56:35.636Z',
      updatedAt: '2021-04-08T09:57:29.364Z',
      externalUrls: [],
      roomTypes: [
        {
          roomTypeId: '1f49966f-bddc-45b1-b9ff-f271e5189726',
          name: 'Suite',
          description:
            'The Suites of the Hotel Guitart Grand Passage **** S have been specially designed for those travelling in groups or looking for ample spaces to relax. They offer a total of 44 m², maximum capacity for 4 people and the perfect location: next to the Diagonal avenue of Barcelona.\n\nSuite services:\n• Air conditioning / heating\n• Bath amenities\n• Balcony\n• Bathtub\n• Desk table\n• Minibar\n• Living room\n• Hair dryer\n• Phone\n• TV\n• Wi-Fi',
          maxOccupancy: 4,
          rates: [],
          amenities: [
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 69,
              formatted: 'Minibar'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
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
              code: 270,
              formatted: 'Seating area with sofa/chair'
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
              code: 10,
              formatted: 'Bathrobe'
            },
            {
              code: 11,
              formatted: 'Bathroom amenities (free toiletries)'
            },
            {
              code: 13,
              formatted: 'Bathtub'
            },
            {
              code: 16,
              formatted: 'Bidet'
            },
            {
              code: 19,
              formatted: 'Coffee/Tea maker'
            },
            {
              code: 28,
              formatted: 'Desk'
            }
          ],
          images: [
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p051i00mr0snnekiu30on.jpg'
            },
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8p8dfh00nk0snn861k4dqn.jpg'
            },
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p07gj00ms0snn1tpdbdks.jpg'
            },
            {
              altText: null,
              height: 434,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8p8c4v00nj0snn26dif3ug.jpg'
            },
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8oztvy00mo0snn2t0thx9m.jpg'
            },
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p02d800mq0snne30zcv5o.jpg'
            }
          ]
        },
        {
          roomTypeId: '5ca67547-f3e1-43ac-903b-cee2cc13be1e',
          name: 'Junior Suite',
          description:
            'The Junior Suites of the Hotel Guitart Grand Passage **** S give you the possibility to enjoy a special stay. All have 25 m² of modern design spaces distributed in a large bedroom full of natural light, separate living room, bathroom, desk, 2 televisions, double sofa bed and minibar.\n\nSuite services:\n• Air conditioning / heating\n• Bath amenities\n• Balcony\n• Bathtub\n• Desk table\n• Minibar\n• Living room\n• Hair dryer\n• Phone\n• TV\n• Wi-Fi',
          maxOccupancy: 4,
          rates: [],
          amenities: [
            {
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 13,
              formatted: 'Bathtub'
            },
            {
              code: 28,
              formatted: 'Desk'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 270,
              formatted: 'Seating area with sofa/chair'
            },
            {
              code: 210,
              formatted: 'Satellite television'
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
              code: 69,
              formatted: 'Minibar'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 142,
              formatted: 'Shower'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            }
          ],
          images: [
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8p7lbh00nd0snn6rdldzdf.jpg'
            },
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8p7o2000ng0snngi68bkkb.jpg'
            },
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8oyckz00mj0snn6eh9gr5a.jpg'
            },
            {
              altText: null,
              height: 434,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8p7mnn00nf0snn49xz6znx.jpg'
            }
          ]
        },
        {
          roomTypeId: '412246eb-2f3f-442c-9908-bd22fe45effe',
          name: 'Executive Room',
          description:
            'The Executive rooms of the Hotel Guitart Grand Passage **** S have been specially designed for those travelling in groups or with children. They offer a total of 38 m², and the perfect location: next to the Diagonal avenue of Barcelona.\n\nRoom services:\n• Air conditioning / heating\n• Bath amenities\n• Balcony\n• Bathtub\n• Desk table\n• Minibar\n• Living room\n• Hair dryer\n• Phone\n• TV\n• Wi-Fi',
          maxOccupancy: 3,
          rates: [],
          amenities: [
            {
              code: 69,
              formatted: 'Minibar'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
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
              code: 142,
              formatted: 'Shower'
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
              code: 270,
              formatted: 'Seating area with sofa/chair'
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
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 13,
              formatted: 'Bathtub'
            },
            {
              code: 16,
              formatted: 'Bidet'
            },
            {
              code: 19,
              formatted: 'Coffee/Tea maker'
            },
            {
              code: 28,
              formatted: 'Desk'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            }
          ],
          images: [
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p1l3400mu0snn6zmhe5r5.jpg'
            },
            {
              altText: null,
              height: 2224,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p1nk600mv0snn65vw99e1.jpg'
            },
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p1qb300mw0snn290nbii5.jpg'
            },
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8paw6g00nx0snn8ckq7hhd.jpg'
            },
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8pauu100nw0snn9o818p8t.jpg'
            }
          ]
        },
        {
          roomTypeId: 'a78586f6-0dec-4c2f-b3f9-03060e4f8c0a',
          name: 'Comfort Room',
          description:
            'The Comfort rooms of the Hotel Guitart Grand Passage **** S are comfortable, very spacious and full of natural light. Considered one of the ideal spaces for a couple getaway to Barcelona.\n\nRoom services:\n• Air conditioning / heating\n• Bath amenities\n• Balcony\n• Bathtub / Shower\n• Desk table\n• Minibar\n• Hair dryer\n• Phone\n• TV\n• Wi-Fi',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 13,
              formatted: 'Bathtub'
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
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 270,
              formatted: 'Seating area with sofa/chair'
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
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
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
              code: 142,
              formatted: 'Shower'
            }
          ],
          images: [
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p3e2700my0snndu6h37m9.jpg'
            },
            {
              altText: null,
              height: 500,
              width: 750,
              url: 'https://cdn.impala.travel/properties/ckn8pboks00o10snn1pezarkb.jpg'
            },
            {
              altText: null,
              height: 2224,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p38lg00mx0snn6x6z7zm7.jpg'
            },
            {
              altText: null,
              height: 2562,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8p3n9n00mz0snngr7gf3db.jpg'
            }
          ]
        }
      ]
    },
    {
      hotelId: '58a68cfd-ffbf-406a-9c3c-b9bee4f76d46',
      name: 'Golden Tulip Westlands Nairobi',
      currency: 'EUR',
      starRating: 3,
      description: {
        short:
          'The hotel was built in 1931 following a bet it was argued that it was impossible to erect a building in that limited space. Father and son, both aircraft landing gear engineers, took up the challenge. Thus was built the Hotel Plinius, later called Demidoff Hotel, characterized by the peculiar "iron" shape, with the liberty character of that period. '
      },
      phoneNumbers: ['+39 0229513889'],
      emails: ['gdapi-staging-hotel+58a68cfd-ffbf-406a-9c3c-b9bee4f76d46@getimpala.com'],
      websiteUrl: null,
      images: [
        {
          altText: null,
          height: 840,
          width: 772,
          url: 'https://images.trvl-media.com/lodging/14000000/13310000/13300500/13300434/1c89ae62.jpg',
          isHeroImage: true
        },
        {
          altText: null,
          height: 3780,
          width: 3024,
          url: 'https://images.trvl-media.com/lodging/14000000/13310000/13300500/13300434/f752cb47.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1529,
          width: 1240,
          url: 'https://images.trvl-media.com/lodging/14000000/13310000/13300500/13300434/fab50296.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1350,
          width: 1080,
          url: 'https://images.trvl-media.com/lodging/14000000/13310000/13300500/13300434/w6000h3993x0y7-20ef6e7e.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 793,
          width: 1088,
          url: 'https://images.trvl-media.com/lodging/14000000/13310000/13300500/13300434/58fdeb16.jpg',
          isHeroImage: false
        }
      ],
      address: {
        line1: 'Via Plinio, 2',
        line2: null,
        city: 'Milan',
        postalCode: '20129 ',
        region: null,
        country: 'ITA',
        countryName: 'Italy'
      },
      location: {
        longitude: 9.2115041,
        latitude: 45.4795317
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
          code: 77,
          formatted: 'Room service'
        },
        {
          code: 81,
          formatted: 'Shoe shine stand'
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
          code: 37,
          formatted: 'Express check-out'
        },
        {
          code: 198,
          formatted: 'Non-smoking rooms (generic)'
        }
      ],
      roomCount: 43,
      checkIn: {
        from: '14:00'
      },
      checkOut: {
        to: '12:00'
      },
      termsAndConditions: '',
      createdAt: '2021-04-08T09:18:49.588Z',
      updatedAt: '2021-04-08T09:18:49.588Z',
      externalUrls: [],
      roomTypes: [
        {
          roomTypeId: '508baeac-34ae-40a2-a7cd-38776f4e7fd8',
          name: 'Double Modern',
          description:
            'Free Wi-Fi Flat screen TV Set Tea / coffee kettle Mini fridge that can be filled upon request Wardrobe Desk Luggage compartment. Second pillow in the closet Safe. ',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
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
              code: 15,
              formatted: 'Bath or Shower'
            },
            {
              code: 11,
              formatted: 'Bathroom amenities (free toiletries)'
            },
            {
              code: 2,
              formatted: 'Air conditioning'
            }
          ],
          images: [
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8n5wl200ie0snneqldhviz.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8n6hdy00ig0snn8tw39w9i.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8n6nu700ih0snnhexqcfjl.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8n6z2z00ii0snn68t46wxc.jpg'
            },
            {
              altText: null,
              height: 824,
              width: 1242,
              url: 'https://cdn.impala.travel/properties/ckn8n681100if0snn75j0dxye.jpg'
            }
          ]
        },
        {
          roomTypeId: '619fd287-d099-4e9b-817a-27b97b8c84ec',
          name: 'Twin Back to Liberty',
          description:
            'Free Wi-Fi, flat screen TV, tea / coffee maker set, wardrobe, desk, luggage rack, double pillow. ',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 28,
              formatted: 'Desk'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 228,
              formatted: 'Slippers'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 15,
              formatted: 'Bath or Shower'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
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
              code: 16,
              formatted: 'Bidet'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            }
          ],
          images: [
            {
              altText: null,
              height: 3780,
              width: 3024,
              url: 'https://cdn.impala.travel/properties/ckn8n8fiz00im0snnh0lc0qf5.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8n7kmv00ij0snn1rashm21.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8n7u5t00ik0snnf3sabrqv.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8n835y00il0snn95go5ogg.jpg'
            },
            {
              altText: null,
              height: 988,
              width: 653,
              url: 'https://cdn.impala.travel/properties/ckn8ntuch00k90snn8frc1sch.jpg'
            },
            {
              altText: null,
              height: 928,
              width: 696,
              url: 'https://cdn.impala.travel/properties/ckn8nts2i00k80snn0q4g4w6d.jpg'
            }
          ]
        },
        {
          roomTypeId: 'f478571a-687a-48b1-8702-30b435387333',
          name: 'Single Modern',
          description:
            'Free Wi-Fi Flat screen TV Set Tea / coffee kettle Mini fridge that can be filled on request Wardrobe Desk Luggage holder Second pillow in the closet Safe. ',
          maxOccupancy: 1,
          rates: [],
          amenities: [
            {
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
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
              code: 15,
              formatted: 'Bath or Shower'
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
              code: 144,
              formatted: 'Soundproofed room'
            }
          ],
          images: [
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8n9lyy00in0snn3k7y265s.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8nb3sl00is0snnd4ks5mom.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8natww00ir0snn9xydaejz.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8na93g00ip0snn87a83or1.jpg'
            }
          ]
        },
        {
          roomTypeId: '1d568fa4-a88a-414e-b0e8-d5a509710406',
          name: 'Single Back to Liberty',
          description:
            'Free Wi-Fi, flat screen TV, tea / coffee maker set, wardrobe, desk, luggage rack, double pillow. ',
          maxOccupancy: 1,
          rates: [],
          amenities: [
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 228,
              formatted: 'Slippers'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
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
              code: 15,
              formatted: 'Bath or Shower'
            },
            {
              code: 28,
              formatted: 'Desk'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            }
          ],
          images: [
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8nc7iv00iv0snn7paz3kbj.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2538,
              url: 'https://cdn.impala.travel/properties/ckn8ncgoh00iw0snnfpx7bx41.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8ncmz900ix0snn9pxa62vo.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8ncuhe00iy0snn0j64bbcy.jpg'
            }
          ]
        },
        {
          roomTypeId: '38e76997-d0bf-45ea-85d8-3e8fe5bdffc6',
          name: 'Double Back to Liberty',
          description:
            'Free Wi-Fi, flat screen TV, tea / coffee maker set, wardrobe, desk, luggage rack, double pillow. ',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 28,
              formatted: 'Desk'
            },
            {
              code: 251,
              formatted: 'TV'
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
              code: 15,
              formatted: 'Bath or Shower'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 228,
              formatted: 'Slippers'
            },
            {
              code: 16,
              formatted: 'Bidet'
            }
          ],
          images: [
            {
              altText: null,
              height: 3780,
              width: 3024,
              url: 'https://cdn.impala.travel/properties/ckn8nf0ee00j30snnhk6e8cry.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8nfx7v00j50snnblv4geg1.jpg'
            },
            {
              altText: null,
              height: 3779,
              width: 3024,
              url: 'https://cdn.impala.travel/properties/ckn8ng8bg00j70snn7or348p4.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8nglys00ja0snn3lw21lvx.jpg'
            },
            {
              altText: null,
              height: 3840,
              width: 2880,
              url: 'https://cdn.impala.travel/properties/ckn8nhjn500jh0snnc165caz7.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8ndo1f00j00snn9izh4d77.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8neknq00j20snn0nd811q6.jpg'
            }
          ]
        },
        {
          roomTypeId: 'c9e93ac0-5d6e-4519-937e-e9a7085b8a25',
          name: 'Triple Modern',
          description:
            'Free Wi-Fi Flat screen TV Set Tea / coffee kettle Mini fridge that can be filled upon request Wardrobe Desk Luggage compartment. Second pillow in the closet Safe.',
          maxOccupancy: 3,
          rates: [],
          amenities: [
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
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
              code: 15,
              formatted: 'Bath or Shower'
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
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            }
          ],
          images: [
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8nijs100jn0snng0iz08qa.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nvzpx00kj0snn60ig6aze.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nvyls00ki0snn8uk09as5.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nvxcf00kh0snn42fj17l6.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nw0su00kk0snna5d8clko.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nvvxu00kg0snn2mcnbyt3.jpg'
            }
          ]
        },
        {
          roomTypeId: 'dcbf4e90-4b11-45dc-9f6d-66006d4b5841',
          name: 'Twin Modern',
          description:
            'Free Wi-Fi Flat screen TV Set Tea / coffee kettle Mini fridge that can be filled upon request Wardrobe Desk Luggage compartment. Second pillow in the closet Safe.',
          maxOccupancy: 2,
          rates: [],
          amenities: [
            {
              code: 16,
              formatted: 'Bidet'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 15,
              formatted: 'Bath or Shower'
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
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 28,
              formatted: 'Desk'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
            }
          ],
          images: [
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nwm0p00kn0snncycw3jnu.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nwn7z00ko0snn2wl108pt.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8nl95o00ju0snn5bxy9803.jpg'
            },
            {
              altText: null,
              height: 2880,
              width: 3840,
              url: 'https://cdn.impala.travel/properties/ckn8nkfn600js0snn0xz3a45f.jpg'
            }
          ]
        },
        {
          roomTypeId: '240a636b-794a-4785-b638-7e18a31535ce',
          name: 'Double Single Use Back to Liberty',
          description:
            'Art Nouveau room, a vintage atmosphere with an all-Italian refined design. Free Wi-Fi, flat screen TV, tea / coffee maker set, wardrobe, desk, luggage rack, double pillow. ',
          maxOccupancy: 1,
          rates: [],
          amenities: [
            {
              code: 85,
              formatted: 'Private bathroom'
            },
            {
              code: 162,
              formatted: 'Closets in room'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
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
              code: 20,
              formatted: 'Color television'
            },
            {
              code: 15,
              formatted: 'Bath or Shower'
            },
            {
              code: 11,
              formatted: 'Bathroom amenities (free toiletries)'
            },
            {
              code: 2,
              formatted: 'Air conditioning'
            }
          ],
          images: [
            {
              altText: null,
              height: 928,
              width: 696,
              url: 'https://cdn.impala.travel/properties/ckn8nxf8o00ky0snn6e7vccz1.jpg'
            },
            {
              altText: null,
              height: 957,
              width: 1276,
              url: 'https://cdn.impala.travel/properties/ckn8nxdyj00kx0snnfc2kghli.jpg'
            },
            {
              altText: null,
              height: 956,
              width: 1274,
              url: 'https://cdn.impala.travel/properties/ckn8nx9mr00ku0snn1te4860b.jpg'
            },
            {
              altText: null,
              height: 928,
              width: 696,
              url: 'https://cdn.impala.travel/properties/ckn8nxc4e00kv0snn50ui1104.jpg'
            },
            {
              altText: null,
              height: 879,
              width: 1280,
              url: 'https://cdn.impala.travel/properties/ckn8nxgoi00kz0snn5au0gks5.JPG'
            }
          ]
        },
        {
          roomTypeId: '9820833a-26c1-484d-93ef-406eded63aa7',
          name: 'Double Single Use Modern',
          description:
            'Free Wi-Fi Flat screen TV Set Tea / coffee kettle Mini fridge that can be filled upon request Wardrobe Desk Luggage compartment. Second pillow in the closet Safe .',
          maxOccupancy: 1,
          rates: [],
          amenities: [
            {
              code: 85,
              formatted: 'Private bathroom'
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
              code: 20,
              formatted: 'Color television'
            },
            {
              code: 15,
              formatted: 'Bath or Shower'
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
              code: 162,
              formatted: 'Closets in room'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
            }
          ],
          images: [
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8ny4f400l10snn9b567puc.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8ny6lj00l30snn3p6c93wi.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8ny7q900l40snn8xc077pc.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8ny8y000l50snn10ep0f2i.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8ny33v00l00snn61a68nqk.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nya1h00l60snn7rgs4t88.jpg'
            },
            {
              altText: null,
              height: 679,
              width: 1024,
              url: 'https://cdn.impala.travel/properties/ckn8ny5hu00l20snnd9pz1emy.jpg'
            }
          ]
        },
        {
          roomTypeId: '8a62af17-b5c0-4717-adcd-9be51c16fe6c',
          name: 'Quadruple Modern',
          description:
            'Free Wi-Fi Flat screen TV Set Tea / coffee kettle Mini fridge that can be filled upon request Wardrobe Desk Luggage compartment. Second pillow in the closet Safe. ',
          maxOccupancy: 4,
          rates: [],
          amenities: [
            {
              code: 16,
              formatted: 'Bidet'
            },
            {
              code: 85,
              formatted: 'Private bathroom'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 123,
              formatted: 'Wireless internet connection'
            },
            {
              code: 144,
              formatted: 'Soundproofed room'
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
              code: 50,
              formatted: 'Hairdryer'
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
            },
            {
              code: 251,
              formatted: 'TV'
            }
          ],
          images: [
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nzado00l80snn8eilb1x3.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nzi3500l90snngoj9ayoo.jpg'
            },
            {
              altText: null,
              height: 479,
              width: 683,
              url: 'https://cdn.impala.travel/properties/ckn8nzpsy00la0snn6733ha6l.jpg'
            },
            {
              altText: null,
              height: 654,
              width: 523,
              url: 'https://cdn.impala.travel/properties/ckn8nz2zs00l70snnfd3k8ntq.jpg'
            },
            {
              altText: null,
              height: 654,
              width: 523,
              url: 'https://cdn.impala.travel/properties/ckn8o0k7700lb0snndiqtda0l.jpg'
            }
          ]
        }
      ]
    },
    {
      hotelId: '872fdcf0-e75c-41a4-a9c6-ecca8fb72473',
      name: 'Eka Hotel Nairobi',
      currency: 'EUR',
      starRating: 4,
      description: {
        short:
          'Mountain holidays take on a special meaning at Eka Hotel Nairobi, one of our most emblematic accommodations, with magnificent spa services and located in one of the best natural enclaves in the Catalan Pyrenees, at the foot of the La Molina main track. Enjoy your apartment in the La Molina ski resort with capacity for up to 8 people. '
      },
      phoneNumbers: ['+34 972 89 27 27'],
      emails: ['gdapi-staging-hotel+872fdcf0-e75c-41a4-a9c6-ecca8fb72473@getimpala.com'],
      websiteUrl: null,
      images: [
        {
          altText: null,
          height: 1365,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/93c7abac.jpg',
          isHeroImage: true
        },
        {
          altText: null,
          height: 3315,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/019a20b0.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2589,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/266b4222.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2560,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/b92226b5.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2560,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/1ffd672a.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 2560,
          width: 3840,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/3bf153cf.jpg',
          isHeroImage: false
        },
        {
          altText: null,
          height: 1367,
          width: 2048,
          url: 'https://images.trvl-media.com/lodging/6000000/5200000/5197600/5197520/3d82a404.jpg',
          isHeroImage: false
        }
      ],
      address: {
        line1: 'Plaça Pista Llarga - Bloque 2',
        line2: null,
        city: 'La Molina',
        postalCode: '17537',
        region: null,
        country: 'ESP',
        countryName: 'Spain'
      },
      location: {
        longitude: 1.9426677,
        latitude: 42.3378583
      },
      amenities: [
        {
          code: 50,
          formatted: 'Housekeeping '
        },
        {
          code: 53,
          formatted: 'Indoor parking'
        },
        {
          code: 76,
          formatted: 'Restaurant'
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
          code: 262,
          formatted: 'Kitchenette'
        },
        {
          code: 84,
          formatted: 'Spa'
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
      roomCount: 110,
      checkIn: {
        from: '16:00'
      },
      checkOut: {
        to: '12:00'
      },
      termsAndConditions: '',
      createdAt: '2021-04-08T09:14:11.298Z',
      updatedAt: '2021-04-08T09:35:49.455Z',
      externalUrls: [],
      roomTypes: [
        {
          roomTypeId: 'eedb69ea-e509-44ba-b366-c3d081c41dfb',
          name: 'Duplex | 2-8 People',
          description:
            'The duplex apartments of Guitart La Molina **** are modern and efficient. They have several bedrooms with two single beds each and a living room with a sofa bed and satellite TV. The kitchenette is equipped with a ceramic hob, microwave oven and fridge. Some apartments have a private balcony or terrace. With a maximum capacity of 8 people.',
          maxOccupancy: 8,
          rates: [],
          amenities: [
            {
              code: 210,
              formatted: 'Satellite television'
            },
            {
              code: 11,
              formatted: 'Bathroom amenities (free toiletries)'
            },
            {
              code: 13,
              formatted: 'Bathtub'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 270,
              formatted: 'Seating area with sofa/chair'
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
              code: 59,
              formatted: 'Kitchen'
            },
            {
              code: 61,
              formatted: 'Kitchenette'
            },
            {
              code: 68,
              formatted: 'Microwave'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 102,
              formatted: 'Sofa Bed'
            }
          ],
          images: [
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nhg9o00jg0snn3s1keqdo.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8ng20d00j60snn4ptz5oro.jpg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nge8l00j80snnc23r36nd.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8ngka700j90snn87asc2do.jpeg'
            },
            {
              altText: null,
              height: 3062,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8ngucx00jb0snn3unw977m.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8ngzw000jd0snn2hs6anlk.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nh4xf00je0snn8io92w8h.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nhad800jf0snnfogl7i1a.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nhlec00ji0snncexj7hp3.jpeg'
            },
            {
              altText: null,
              height: 3074,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nhty600jj0snncrg9bljt.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8ni0g700jk0snngsxn9g6i.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8ni4ri00jl0snncfb21gnc.jpeg'
            }
          ]
        },
        {
          roomTypeId: '37234b71-1031-42e1-9da1-3d4d9cc4caf3',
          name: 'Apartment with Views | 2-4 People',
          description:
            'The 1-bedroom apartments with views of the Guitart La Molina **** are the perfect space to fully enjoy mountain getaways. Similar in benefits and surface area to the 1 bedroom apartments (45 m², bedroom, living room with equipped kitchen, sofa bed, TV, telephone, bathroom ...), they offer as an advantage its beautiful views of the valley of La Cerdanya and capacity for 2 or 4 people.',
          maxOccupancy: 4,
          rates: [],
          amenities: [
            {
              code: 88,
              formatted: 'Refrigerator'
            },
            {
              code: 85,
              formatted: 'Private bathroom'
            },
            {
              code: 68,
              formatted: 'Microwave'
            },
            {
              code: 61,
              formatted: 'Kitchenette'
            },
            {
              code: 59,
              formatted: 'Kitchen'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 15,
              formatted: 'Bath or Shower'
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
              code: 270,
              formatted: 'Seating area with sofa/chair'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 223,
              formatted: 'Mountain view'
            },
            {
              code: 210,
              formatted: 'Satellite television'
            },
            {
              code: 102,
              formatted: 'Sofa Bed'
            }
          ],
          images: [
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8njw5q00jq0snnhlolfbha.jpeg'
            },
            {
              altText: null,
              height: 3058,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8nka1200jr0snnfgzw3i8g.jpeg'
            },
            {
              altText: null,
              height: 1365,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8njpd500jp0snn2eerc4pg.jpg'
            }
          ]
        },
        {
          roomTypeId: 'bb246cfb-a223-4df5-852b-0230513e5f38',
          name: 'Standard Apartment | 2-4 People',
          description:
            'The 1 bedroom apartments at Guitart La Molina **** represent the perfect accommodation option in the La Molina ski resort, ideal for up to 4 people. They are 45 m² apartments distributed in a large bedroom, living room with kitchen equipped with utensils, microwave, refrigerator, hob, sofa bed, 2 single beds, satellite TV, telephone, bathroom ... All exterior (balcony, terrace or window).',
          maxOccupancy: 4,
          rates: [],
          amenities: [
            {
              code: 61,
              formatted: 'Kitchenette'
            },
            {
              code: 59,
              formatted: 'Kitchen'
            },
            {
              code: 251,
              formatted: 'TV'
            },
            {
              code: 270,
              formatted: 'Seating area with sofa/chair'
            },
            {
              code: 102,
              formatted: 'Sofa Bed'
            },
            {
              code: 271,
              formatted: 'Separate toilet area'
            },
            {
              code: 15,
              formatted: 'Bath or Shower'
            },
            {
              code: 11,
              formatted: 'Bathroom amenities (free toiletries)'
            },
            {
              code: 210,
              formatted: 'Satellite television'
            },
            {
              code: 50,
              formatted: 'Hairdryer'
            },
            {
              code: 68,
              formatted: 'Microwave'
            },
            {
              code: 88,
              formatted: 'Refrigerator'
            }
          ],
          images: [
            {
              altText: null,
              height: 532,
              width: 704,
              url: 'https://cdn.impala.travel/properties/ckn8noopg00k00snn3a6kb0mx.jpeg'
            },
            {
              altText: null,
              height: 3058,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8noydf00k10snnhs8i6qmn.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8np3l300k20snn6izf7vw8.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8npbbj00k40snngzd6erzu.jpeg'
            },
            {
              altText: null,
              height: 1367,
              width: 2048,
              url: 'https://cdn.impala.travel/properties/ckn8npm3600k50snn9s972lit.jpeg'
            }
          ]
        }
      ]
    },
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
    },
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
