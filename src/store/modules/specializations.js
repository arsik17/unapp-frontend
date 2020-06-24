import request from "@/request/request";

export default {
  state: {
    specializations: []
  },
  actions: {
    fetchSpecializations({ commit }) {
      return new Promise((resolve, reject) => {
        request({
          url: "specializations",
          method: "GET"
        })
          .then(res => {
            console.log(res.data);
            const specializations = res.data;
            commit("setSpecializations", specializations);
            resolve(res);
          })
          .catch(err => reject(err));
      });
    }
  },
  mutations: {
    setSpecializations(state, specializations) {
      state.specializations = specializations;
    }
  },
  getters: {
    specializations: state => state.specializations
  }
};
