import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

import EmptyLayout from "@/views/layouts/EmptyLayout";
import DefaultLayout from "@/views/layouts/DefaultLayout";

import Home from "@/views/home/Home.vue";

import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

import Dashboard from "@/views/dashboard/Dashboard";
import Universities from "@/views/universities/Universities";
import University from "@/views/university/University";
import Profile from "@/views/profile/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/",
    component: DefaultLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "universities",
        name: "universities",
        component: Universities
      },
      {
        path: "universities/:id",
        name: "university",
        component: University
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      }
    ]
  },
  {
    path: "/auth",
    name: "auth",
    component: EmptyLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "register",
        name: "register",
        component: Register
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    store.getters.isLoggedIn &&
    to.matched.some(record => record.meta.onlyNotAuth)
  ) {
    next("/");
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
