import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotel-review/:hotelID',
      name: 'HotelReview',
      component: () => import('../components/HotelReview.vue')
    }
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'NotFound',
    //   component: <div>Not</div>
    // }
  ]
})

export default router
