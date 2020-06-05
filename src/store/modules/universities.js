import axios from "@/request/request";

export default {
  state: {
    status: "",
    universities: []
  },
  actions: {
    fetchUniversities({ commit }) {
      return new Promise((resolve, reject) => {
        commit("universitiesLoading");
        axios({
          url: "universities",
          method: "GET"
        })
          .then(res => {
            const universities = res.data;
            commit("universitiesSuccess", universities);
            resolve(res);
          })
          .catch(err => {
            commit("universitiesSuccess");
            reject(err);
          });
      });
    }
  },
  mutations: {
    universitiesSuccess(state, universities) {
      (state.status = "success"), (state.universities = universities);
    },
    universitiesError(state) {
      state.status = "error";
    },
    universitiesLoading(state) {
      state.state = "loading";
    }
  },
  getters: {
    universities: state => state.universities
  }
};
