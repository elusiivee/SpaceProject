import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/MainComp.vue'
import Technology from '../components/Technology.vue'

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

    }
  ]
})

export default router
