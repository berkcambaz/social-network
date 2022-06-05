import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { path: "/home" }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue")
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignupView.vue")
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: "/user/:id",
      name: "User",
      component: () => import("../views/UserView.vue")
    }
  ]
})

export default router