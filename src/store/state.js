import hotelsData from '../data.json'
const hotels = hotelsData.data

export default {
  hotels,
  openWishList: false,
  wishList: [],
  pageLoadAnimation: false,
  authenticationError: '',
  authenticationAnimation: {
    load: false,
    type: ''
  },
  user: []
}
