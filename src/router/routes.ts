import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainLayout from "@/layouts/MainLayout.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "mainLayout",
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: ':url',
        name: 'urlRedirect',
        component: () => import('@/views/RedirectView.vue')
      }
    ]
  },
]
export default routes