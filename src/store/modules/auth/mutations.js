export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.address = payload.address;
    state.active = payload.active;
    state.createdAt = payload.createdAt;
    state.name = payload.name;
    state.phone = payload.phone;
    state.profileImage = payload.profileImage;
    state.status = payload.state;
    state.type = payload.type;
    state.userId = payload.userId;
    console.log(state.token);
  },
  setError(state, payload) {
    state.error = payload.error;
  },
  setIsError(state, payload) {
    state.isError = payload.isError;
  },
};
