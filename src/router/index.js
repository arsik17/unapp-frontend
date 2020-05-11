import Vue from "vue";
import VueRouter from "vue-router";

import DefaultLayout from "@/views/layouts/DefaultLayout";
import Home from "@/views/home/Home.vue";

import EmptyLayout from "@/views/layouts/EmptyLayout";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

import Universities from "@/views/universities/Universities";
import Profile from "@/views/profile/Profile";
import Leaderboard from "@/views/leaderboard/Leaderboard";
import Documents from "@/views/documents/Documents";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "index",
        component: Home
      },
      {
        path: "universities",
        name: "universities",
        component: Universities
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "leaderboard",
        name: "leaderboard",
        component: Leaderboard
      },
      {
        path: "documents",
        name: "documents",
        component: Documents
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

export default router;
