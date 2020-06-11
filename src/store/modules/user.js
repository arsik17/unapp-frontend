import request from "@/request/request";

export default {
  state: {
    currentUser: {}
  },
  actions: {
    fetchCurrentUser({ commit }) {
      request({
        url: "users/me",
        method: "GET"
      })
        .then(res => commit("setCurrentUser", res.data))
        .catch(err => console.log(err));
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    }
  },
  getters: {
    currentUser: state => state.currentUser
  }
};
