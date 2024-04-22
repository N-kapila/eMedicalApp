// store/index.js

import { createStore } from "vuex";

export default createStore({
  modules: {
    auth: {
      namespaced: true,
      state: {
        userUid: null,
      },
      mutations: {
        setUserUid(state, uid) {
          state.userUid = uid;
        },
      },
      actions: {
        setUserUid({ commit }, uid) {
          commit("setUserUid", uid);
        },
      },
      getters: {
        getUserUid(state) {
          return state.userUid;
        },
      },
    },
  },
});
