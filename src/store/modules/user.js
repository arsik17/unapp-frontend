import request from "@/request/request";

export default {
  state: {
    currentUser: {},
    savedUniversities: []
  },
  actions: {
    fetchCurrentUser({ commit }) {
      return new Promise((resolve, reject) => {
        request({
          url: "users/me",
          method: "GET"
        })
          .then(res => {
            commit("setCurrentUser", res.data);
            commit(
              "setSavedUniversities",
              res.data.savedUniversities.map(universityId => ({
                _id: universityId
              }))
            );
            resolve(res.data);
          })
          .catch(err => reject(err));
      });
    },
    updateSavedUniversities({ commit }, { userId, savedUniversities }) {
      request({
        url: "users/" + userId,
        method: "PUT",
        data: {
          savedUniversities
        }
      }).then(res =>
        commit("setSavedUniversities", res.data.savedUniversities)
      );
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setSavedUniversities(state, savedUniversities) {
      state.savedUniversities = savedUniversities;
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    savedUniversities: state => state.savedUniversities || []
  }
};
