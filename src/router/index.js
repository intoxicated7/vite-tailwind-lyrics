import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/lyrics/:trackId',
    name: 'lyrics',
    component: () => import('../pages/lyrics.vue')
  },
  {
    path: '/charts/songs',
    name: 'songs-chart',
    component: () => import('../pages/charts/songs-chart.vue')
  },
  {
    path: '/charts/artists',
    name: 'charts-artists',
    component: () => import('../pages/charts/artists-chart.vue')
  },
  {
    path: '/charts/lyrics',
    name: 'charts-lyrics',
    component: () => import('../pages/charts/lyrics-chart.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router