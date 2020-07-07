import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

import EmptyLayout from "@/views/layouts/EmptyLayout";
const DefaultLayout = () =>
  import(
    /* webpackChunkName: "default-layout" */ "@/views/layouts/DefaultLayout"
  );

const Home = () =>
  import(/* webpackChunkName: "home" */ "@/views/home/Home.vue");

const Login = () =>
  import(/* webpackChunkName: "login" */ "@/views/auth/Login");
const Register = () =>
  import(/* webpackChunkName: "register" */ "@/views/auth/Register");

const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/Dashboard");
const Universities = () =>
  import(
    /* webpackChunkName: "universities" */ "@/views/universities/Universities"
  );
const University = () =>
  import(/* webpackChunkName: "university" */ "@/views/university/University");
const Profile = () =>
  import(/* webpackChunkName: "profile" */ "@/views/profile/Profile");
const Search = () =>
  import(/* webpackChunkName: "search" */ "@/views/search/Search");
const SavedUniversities = () =>
  import(
    /* webpackChunkName: "saved-universities" */ "@/views/savedUniversities/SavedUniversities"
  );

const SettingsLayout = () =>
  import(/* webpackChunkName: "settings-layout" */ "@/views/settings/Layout");
const UserSettings = () =>
  import(/* webpackChunkName: "user-settings" */ "@/views/settings/User");
const ExamsSettings = () =>
  import(/* webpackChunkName: "exams-settings" */ "@/views/settings/Exams");
const NotificationsSettings = () =>
  import(
    /* webpackChunkName: "saved-universities" */ "@/views/settings/Notifications"
  );

const UsefulLinksLayout = () =>
  import(
    /* webpackChunkName: "useful-links-layout"*/ "@/views/usefulLinks/Layout"
  );
const UsefulLinks = () =>
  import(
    /* webpackChunNmae: "useful-links" */ "@/views/usefulLinks/UsefulLinks"
  );

const Feedback = () =>
  import(/* webpackChunkName: "feedback" */ "@/views/feedback/Feedback");

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
        path: "saved-universities",
        name: "saved-universities",
        component: SavedUniversities
      },
      {
        path: "search",
        name: "search",
        component: Search
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "settings",
        component: SettingsLayout,
        children: [
          {
            path: "",
            component: UserSettings
          },
          {
            path: "exams",
            component: ExamsSettings
          },
          {
            path: "notifications",
            component: NotificationsSettings
          }
        ]
      },
      {
        path: "feedback",
        name: "feedback",
        component: Feedback
      },
      {
        path: "useful-links",
        component: UsefulLinksLayout,
        children: [
          {
            path: "ielts",
            component: UsefulLinks
          },
          {
            path: "toefl",
            component: UsefulLinks
          },
          {
            path: "sat-reasoning",
            component: UsefulLinks
          },
          {
            path: "sat-subject",
            component: UsefulLinks
          },
          {
            path: "motiv-letter",
            component: UsefulLinks
          }
        ]
      }
    ]
  },
  {
    path: "/auth",
    name: "auth",
    component: EmptyLayout,
    meta: {
      onlyNotAuth: true
    },
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
    next("/dashboard");
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
