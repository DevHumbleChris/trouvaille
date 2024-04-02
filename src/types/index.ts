export interface Hotel {
  hotelId: string
  name: string
  currency: string
  starRating: number
  description: Description
  phoneNumbers: string[]
  emails: string[]
  websiteUrl: null
  images: Image[]
  address: Address
  location: Location
  amenities: Amenity[]
  roomCount: number
  checkIn: CheckIn
  checkOut: CheckOut
  termsAndConditions: string
  createdAt: Date | string
  updatedAt: Date | string
  externalUrls: any[]
  roomTypes: RoomType[]
}

export interface Address {
  line1: string
  line2: null
  city: string
  postalCode: string
  region: null
  country: string
  countryName: string
}

export interface Amenity {
  code: number
  formatted: string
}

export interface CheckIn {
  from: string
}

export interface CheckOut {
  to: string
}

export interface Description {
  short: string
}

export interface Image {
  altText: null
  height: number
  width: number
  url: string
  isHeroImage?: boolean
}

export interface Location {
  longitude: number
  latitude: number
}

export interface RoomType {
  roomTypeId: string
  name: string
  description: string
  maxOccupancy: number
  rates: any[]
  amenities: Amenity[]
  images: Image[]
}
