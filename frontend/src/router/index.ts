import { useUsers } from '@/stores/users';
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

async function beforeEnter(route: RouteLocationNormalized) {
  const users = useUsers();

  if (!route.meta.forGuests && users.$state.current === null) {
    router.push("/login");
    return;
  }

  if (route.meta.forGuests && users.$state.current !== null) {
    router.push("/home");
    return;
  }
}

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
      component: () => import("../views/LoginView.vue"),
      meta: { forGuests: true, hideBottomBar: true },
      beforeEnter
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignupView.vue"),
      meta: { forGuests: true, hideBottomBar: true },
      beforeEnter
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {},
      beforeEnter
    },
    {
      path: "/profile/:id",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
      meta: { showBackButton: true },
      beforeEnter
    }
  ]
})

export default router