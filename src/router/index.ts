// Vue
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // component: Dashboard
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/Categories/Categories.vue')
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: () => import('@/views/Categories/_id.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/Statistics.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('@/views/Alert.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/Account.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
