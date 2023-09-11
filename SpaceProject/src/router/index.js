import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/MainComponent.vue'
import Technology from '../components/TechnologyComponent.vue'
import Earth from '../components/EarthComponent.vue'
import MarsRover from '../components/MarsRoverComponent.vue'
import AstrPict from '../components/AstronomyPictureComponent.vue'
import Registration from '../components/RegistrationComponent.vue'
import About from '../components/AboutComponent.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reg',
      name: 'reg',
      component: Registration
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
    {
      path: '/marsrover',
      name: 'marsrover',
      component: MarsRover

    },
    {
      path: '/astrpict',
      name: 'astrpict',
      component: AstrPict

    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    
  ]
})





export default router
