import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserInfo from '@/components/UserInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/user',
    name: 'user',
    component: UserInfo
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import("@/views/HomeView")
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import("@/views/AboutView")
  },
  {
    path: '/modal',
    name : 'modal',
    component: ()=>import("@/components/ShowModal")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router