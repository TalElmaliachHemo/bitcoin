import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import ContactApp from '../views/contact-app.vue'
import StatisticsApp from '../views/statistics-app.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactApp
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsApp
    },
  ]
})

export default router
