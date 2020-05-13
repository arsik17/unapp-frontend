import axios from "@/request/request";

export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        axios({
          url: "users/login",
          data: {
            email,
            password
          },
          method: "POST"
        })
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            commit("authSuccess", { token, user });
            resolve(res);
          })
          .catch(err => {
            commit("authError");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        axios({
          url: "users/register",
          data: user,
          method: "POST"
        })
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            commit("authSuccess", { token, user });
            resolve(res);
          })
          .catch(err => {
            commit("authError", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        axios({
          url: "users/me/logout",
          data: {},
          method: "POST"
        })
          .then(res => {
            commit("logout");
            resolve(res);
          })
          .catch(err => {
            commit("authError");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    }
  },
  mutations: {
    authLoading(state) {
      state.status = "loading";
    },
    authSuccess(state, { token, user }) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    authError(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = {};
      window.localStorage.removeItem("token");
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token),
    authStatus: state => state.status,
    token: state => state.token
  }
};
