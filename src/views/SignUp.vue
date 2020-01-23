<template>
  <div id="sign-up" class="view">
    <div class="flex flex-center">
      <div class="col-4">
        <card>
          <card-content>
            <form class="form flex flex-column" @submit.prevent>
              <label for="username">Username</label>
              <input id="username" v-model="username" />
              <label for="email">Email</label>
              <input id="email" v-model="email" />
              <label for="psw">Password</label>
              <input id="psw" v-model="psw" type="password" />
              <label for="psw-confirm">Confirm Password</label>
              <input
                id="psw-confirm"
                v-model="pswConfirm"
                type="password"
                v-on:keypress.enter="createUserWithEmailAndPsw"
              />
              <custom-button
                @handleClick="createUserWithEmailAndPsw"
                v-bind:disabled="psw.length < 5 || psw !== pswConfirm"
                text="Create Account"
                blue
                class="text-right"
              />
              <router-link to="sign-in">Sign in</router-link>
              <p>{{ error }}</p>
            </form>
          </card-content>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase';
import CustomButton from '../components/Button.vue';
import { Card, CardContent } from '../components/Card';

const newUserBase = {
  win: 0, loss: 0, wo: 0, total: 0,
};

const SignUp = {
  name: 'SignUp',
  data: () => ({
    username: '',
    email: '',
    psw: '',
    pswConfirm: '',
    error: '',
  }),
  components: {
    Card,
    CustomButton,
    CardContent,
  },
  methods: {
    createUserWithEmailAndPsw() {
      console.log('TODO: move to actions');
      auth.createUserWithEmailAndPassword(this.email, this.psw)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.username,
            })
            .then(() => {
              db.ref(`users/${data.user.uid}`)
                .set({ ...newUserBase, userName: this.username });
            });
        })
        .catch((e) => { this.error = e.message; });
    },
  },
};

export default SignUp;
</script>

<style media="screen" scoped>
</style>
