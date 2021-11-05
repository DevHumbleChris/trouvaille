export default {
  WISH_LIST_MODAL (state) {
    state.openWishList = !state.openWishList
  },
  ADD_TO_WISH_LIST (state, payload) {
    const hotel = state.hotels.filter(hotel => hotel.hotelId === payload)
    state.wishList.push(hotel)
  },
  REMOVE_FROM_WISH_LIST (state, payload) {
    const wishList = state.wishList.filter(hotel => hotel.hotelId !== payload)
    state.wishList = wishList
  }
}
