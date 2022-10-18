import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import ContactApp from '../views/contact-app.vue'
import ContactDetails from '../views/contact-details.vue'
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
      path: '/contact',
      name: 'contact',
      component: ContactApp
    },
    {
      path: '/contact/:id',
      name: 'contacts-details',
      component: ContactDetails
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: StatisticsApp
    },
  ]
})

export default router
