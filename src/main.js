import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';

Vue.config.productionTip = false;

auth.onAuthStateChanged((user) => {
  console.log(user);
  store.dispatch('fetchUser', user);
  const prevUser = localStorage.getItem('uid'); // store.dispatch('user/fetchUser', user); // namespaced

  if (user) {
    localStorage.setItem('uid', JSON.stringify(user.uid));
    store.dispatch('onUserDataChange', user.uid);
    store.dispatch('onUsersDataChange');
    if (!prevUser) {
      router.push('/');
    }
  } else if (prevUser) {
    localStorage.removeItem('uid');
    store.dispatch('removeListeners', prevUser);
    router.push('/sign-in');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
