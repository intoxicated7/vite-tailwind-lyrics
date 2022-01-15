import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/toplyrics',
    name: 'toplyrics',
    component: () => import('../pages/toplyrics.vue')
  },
  {
    path: '/lyrics/:trackId',
    name: 'lyrics',
    component: () => import('../pages/lyrics.vue')
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import('../pages/charts.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router