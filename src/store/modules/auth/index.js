import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      address: null,
      active: null,
      createdAt: null,
      name: null,
      phone: null,
      profileImage: null,
      status: null,
      type: null,
      userId: null,
      error: null,
      isError: null,
    };
  },
  mutations,
  actions,
  getters,
};
