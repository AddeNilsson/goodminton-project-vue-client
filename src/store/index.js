import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import initialState from './initialState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...initialState },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    SET_USER_DATA(state, data) {
      state.userData = data;
    },
    SET_USERS_DATA(state, data) {
      state.users = data;
    },
    SET_LOADING(state) {
      state.loading += 1;
    },
    RESET_LOADING(state) {
      state.loading -= 1;
    },
    SET_ERROR(state, e) {
      console.log(state, e);
      state.error = e.message;
    },
    REMOVE_ERROR(state) {
      state.error = '';
      state.loading = false;
    },
  },
  actions: {
    ...actions,
  },
});

/* TODO: namespace with modules ?
import userstore from './userStore';

export default new Vuex.Store({
  modules: {
    user: userStore,
  },
});
*/
