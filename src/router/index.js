import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";

import AuthLayout from "@/views/auth/Layout";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthLayout,
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

export default router;
