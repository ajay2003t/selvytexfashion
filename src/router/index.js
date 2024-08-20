import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import company from '@/components/company.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/company',
      name: 'company',
      component:company
    }
  ]
})

export default router
