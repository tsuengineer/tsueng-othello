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
    component: () => import('../views/lecture/LectureView.vue')
  },
  {
    path: '/lecture/beginner/terminology',
    name: 'Terminology',
    component: () => import('../views/lecture/beginner/TerminologyView.vue')
  },
  {
    path: '/lecture/beginner/importance-of-corners',
    name: 'ImportanceOfCorners',
    component: () => import('../views/lecture/beginner/ImportanceOfCornersView.vue')
  },
  {
    path: '/lecture/beginner/control-the-center',
    name: 'ControlTheCenter',
    component: () => import('../views/lecture/beginner/ControlTheCenterView.vue')
  },
  {
    path: '/lecture/beginner/control-the-center2',
    name: 'ControlTheCenter2',
    component: () => import('../views/lecture/beginner/ControlTheCenter2View.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
