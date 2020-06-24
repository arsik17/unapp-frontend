import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./modules/auth";
import universities from "./modules/universities";
import user from "./modules/user";
import specializations from "./modules/specializations";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    user,
    universities,
    specializations
  }
});
