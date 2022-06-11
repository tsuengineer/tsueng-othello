import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'

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
  {
    path: '/lecture/beginner/balanced-moves',
    name: 'BalancedMoves',
    component: () => import('../views/lecture/beginner/BalancedMovesView.vue')
  },
  {
    path: '/lecture/beginner/unbalanced-edges',
    name: 'UnbalancedEdges',
    component: () => import('../views/lecture/beginner/UnbalancedEdgesView.vue')
  },
  {
    path: '/in-depth-study',
    name: 'InDepthStudy',
    component: () => import('../views/InDepthStudy/InDepthStudyView.vue')
  },
  {
    path: '/in-depth-study/fjt-white',
    name: 'FjtWhite',
    component: () => import('../views/InDepthStudy/contents/FjtWhiteView.vue')
  },
  {
    path: '/topics',
    name: 'Topics',
    component: () => import('../views/Topics/TopicsView.vue')
  },
  {
    path: '/topics/trap/tigers-trap',
    name: 'TopicsTrapTigersTrapView',
    component: () => import('../views/Topics/trap/TigersTrapView.vue')
  },
]

const router = createRouter(<RouterOptions>{
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: '/othello/',
})

export default router
