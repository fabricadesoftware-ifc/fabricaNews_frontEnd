import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ajuda',
      name: 'ajuda',
      component: () => import('../views/AjudaView.vue')
    },
    {
      path: '/projetos',
      name: 'Projetos',
      component: () => import('../views/ProjetosView.vue')
    }
  ]
})

export default router
