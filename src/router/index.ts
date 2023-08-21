import {createRouter, createWebHashHistory} from 'vue-router'

export const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/components/login/SignIn.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/components/home/ChatHome.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router