import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/MainComp.vue'
import Technology from '../components/Technology.vue'
import Earth from '../components/EarthComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology

    },
    {
      path: '/earth',
      name: 'earth',
      component: Earth

    },
  ]
})

export default router
