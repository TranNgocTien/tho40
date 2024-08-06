export default {
  setStuffs(state, payload) {
    state.stuffs.push(...payload);
  },
  setStuffsPreview(state, payload) {
    state.stuffsPreview = payload;
  },
  cleanStuffs(state) {
    state.stuffs = [];
  },
};
