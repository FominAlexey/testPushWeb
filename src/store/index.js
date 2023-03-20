import { createStore } from "vuex";

export default createStore({
  state: {
    token: ''
  },
  getters: {},
  mutations: {
      getToken(state, token) {
      state.token = token;
      }
  },
  actions: {},
  modules: {},
});
