import moment from 'moment';

import { auth, db } from '../firebase';
import initialState from './initialState';

const newUserBase = {
  win: 0,
  loss: 0,
  wo: 0,
  total: 0,
};
/* TODO: split into namespaces ? */

export const fetchUser = ({ commit }, user) => {
  if (user) {
    commit('SET_USER', {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      loggedIn: true,
    });
  } else {
    commit('SET_USER', { ...initialState.user });
    commit('SET_USER_DATA', { ...initialState.userData });
    commit('SET_USERS_DATA', []);
  }
};

export const userRef = uid => db.ref(`users/${uid}`);

export const usersRef = () => db.ref('users');

export const onUserDataChange = ({ commit }, uid) => {
  userRef(uid)
    .on('value', (snapshot) => {
      const data = snapshot.val();
      commit('SET_USER_DATA', data);
    });
};

export const onUsersDataChange = ({ commit }) => {
  usersRef().on('value', (snapshot) => {
    const data = snapshot.val();
    const usersData = Object.keys(data)
      .map(key => ({
        uid: key,
        ...data[key],
      }))
      .map(u => ({
        ...u,
        ratio: Math.round((u.win / u.total) * 100) / 100 || 0,
      }))
      .sort((a, b) => (
        a.ratio > b.ratio ? -1 : b.ratio > a.ratio ? 1 : 0
      ));
    commit('SET_USERS_DATA', usersData);
  });
};

export const register = ({ getters }, data) => {
  const { uid } = getters.user;
  db.ref(`users/${uid}`)
    .set(data.payload)
    .then(() => {
      const newEntry = db.ref(`log/${uid}`).push();
      const {
        isWo,
        isWin,
        isLoss,
        actionText,
      } = data.log;

      newEntry
        .set({
          actionText,
          regWin: isWin ? 1 : 0,
          regLoss: isLoss ? 1 : isWo ? 6 : 0,
          regWo: isWo ? 1 : 0,
          regGamesTotal: isWo ? 6 : 1,
          date: data.payload.touched,
          revertable: 1,
          reverted: 0,
        });
    })
    .catch((e) => { console.log(e); });
};

export const signOut = () => auth.signOut();

export const removeListeners = ({ ...rest }, prevUser) => { // eslint-disable-line no-unused-vars
  userRef(prevUser).off();
  usersRef().off();
};

export const signUp = ({ commit }, payload) => {
  const { email, psw, userName } = payload;
  commit('SET_LOADING');
  auth.createUserWithEmailAndPassword(email, psw)
    .then(({ user }) => {
      user
        .updateProfile({
          displayName: userName,
        })
        .then(() => {
          userRef(user.uid)
            .set({
              ...newUserBase,
              userName,
              touched: moment().format('YYYY-MM-DD HH:mm:ss'),
            });
        })
        .then(() => {
          console.log('done');
          commit('RESET_LOADING');
        });
    })
    .catch((e) => { console.error(e); });
};

export const signIn = ({ commit }, { email, psw }) => {
  commit('SET_LOADING');
  auth.signInWithEmailAndPassword(email, psw)
    .then(() => {
      commit('RESET_LOADING');
    })
    .catch((e) => { console.error(e); });
};

/* TODO
Auth API
pswReset = email => this.auth.sendPasswordResetEmail(email);
pswUpdate = password => this.auth.currentUser.updatePassword(password)

Log API
log = uid => this.db.ref(`logs/${uid}`);
logs = () => this.db.ref('logs');

*/
