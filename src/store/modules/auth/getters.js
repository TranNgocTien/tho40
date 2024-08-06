export default {
  userID(state) {
    return state.userID;
  },

  token(state) {
    return state.token;
  },

  isAuthenticated(state) {
    return !!state.token;
  },

  error(state) {
    console.log(state.error);
    return state.error;
  },
  isError(state) {
    return state.isError;
  },
};
