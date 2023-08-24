import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/MainComp.vue'
import Technology from '../components/Technology.vue'
import FetchinConstructurTech from '../components/FetchinConstructurTech.vue'

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
      path: '/FetchinConstructurTech',
      name: 'FetchinConstructurTech',
      component: FetchinConstructurTech

    }
  ]
})

export default router
