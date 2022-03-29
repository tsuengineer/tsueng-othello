import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'top',
    component: () => import('../views/TopView.vue')
  },
  {
    path: '/lecture',
    name: 'lecture',
    component: () => import('../views/LectureView.vue')
  },
  {
    path: '/lecture/terminology',
    name: 'terminology',
    component: () => import('../views/TerminologyView.vue')
  },
  {
    path: '/strategy-by-rate',
    name: 'strategy-by-rate',
    component: () => import('../views/StrategyByRateView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
