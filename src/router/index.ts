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
  },
  {
    path: '/strategy-by-rate/under800',
    name: 'strategy-by-rate-under800',
    component: () => import('../views/StrategyByRateUnder800View.vue')
  },
  {
    path: '/strategy-by-rate/under1000',
    name: 'strategy-by-rate-under1000',
    component: () => import('../views/StrategyByRateUnder1000View.vue')
  },
  {
    path: '/strategy-by-rate/under1200',
    name: 'strategy-by-rate-under1200',
    component: () => import('../views/StrategyByRateUnder1200View.vue')
  },
  {
    path: '/strategy-by-rate/under1500',
    name: 'strategy-by-rate-under1500',
    component: () => import('../views/StrategyByRateUnder1500View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
