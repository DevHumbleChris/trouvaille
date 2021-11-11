import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import { getAuth } from 'firebase/auth'

console.log(getAuth())

export default createStore({
  state,
  mutations,
  actions: {
  },
  getters
})
