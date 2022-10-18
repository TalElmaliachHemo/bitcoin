import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/contacts',
    //   name: 'contacts',
    //   component: Contacts
    // },
    // {
    //   path: '/statistics',
    //   name: 'statistics',
    //   component: Statistics
    // },
  ]
})

export default router
