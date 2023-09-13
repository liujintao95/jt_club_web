import {createRouter, createWebHashHistory} from 'vue-router'

export const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login/SignIn.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/ChatHome.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router