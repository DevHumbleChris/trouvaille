import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import HotelReview from '@/components/HotelReview.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/hotel-review/:hotelID',
    name: 'HotelReview',
    component: HotelReview
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
