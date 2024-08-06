export default {
  setJobs(state, payload) {
    state.jobs = payload;
  },
  setJobService(state, payload) {
    state.jobServices = payload;
  },
  setJobItem(state, payload) {
    state.jobItemList = payload;
  },
  setError(state, payload) {
    state.error = payload.error;
  },
  setIsError(state, payload) {
    state.isError = payload.isError;
  },
};
