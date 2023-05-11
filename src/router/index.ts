import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('@/views/Index.vue') },
  { path: '/week1/', name: 'Work', component: () => import('@/views/week1/index.vue') }
]

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
 }

const router: Router = createRouter(options)

export default router