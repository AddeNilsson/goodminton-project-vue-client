/* TODO: Namespace this?
export default {
  // namespaced: true,
  state: {
    loggedIn: false,
    data: null,
    uid: null,
  },
  getters: {
    user(state) {
      console.log('Getter state: ', state);
      return state.user;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      console.log('SET_USER: ', state, data);
      // state.data = data;
      state.user = {
        state.user,
        ...data,
      }
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null);
      if (user) {
        console.log('User Store:', user);
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        commit('SET_USER', null);
      }
    },
  },
};
*/
