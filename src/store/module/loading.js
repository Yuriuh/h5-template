export default {
  namespaced: true,
  state: {
    loadingCount: 0,
  },
  getters: {
    loading(state) {
      return state.loadingCount > 0
    },
  },
  mutations: {
    INCREASE_LOADING(state) {
      state.loadingCount += 1
    },
    DECREASE_LOADING(state) {
      state.loadingCount > 0 && (state.loadingCount -= 1)
    },
  },
}
