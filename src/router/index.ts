import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartDemoVue from '@/views/ChartDemo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/chart-common',
    name: 'chart-common',
    component: ChartDemoVue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
