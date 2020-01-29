<template>
  <div id="sign-up" class="view">
    <grid row classes="flex-center">
      <grid :xs="12" :sm="10" :md="8" :lg="4">
        <card>
          <card-content>
            <p v-if="loggedIn" class="text-body">
              You're already signed in!
              <router-link to="/dashboard">Home</router-link>
            </p>
            <div>
              <h1>Create Account</h1>
              <form class="form flex flex-column" @submit.prevent>
                <label for="user-name">Username</label>
                <input id="user-name" v-model="userName" />
                <label for="email">Email</label>
                <input id="email" v-model="email" />
                <label for="psw">Password</label>
                <input id="psw" v-model="psw" type="password" />
                <label for="psw-confirm">Confirm Password</label>
                <input
                  id="psw-confirm"
                  v-model="pswConfirm"
                  type="password"
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
            </div>
          </card-content>
        </card>
      </grid>
    </grid>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CustomButton from '../components/Button.vue';
import { Card, CardContent } from '../components/Card';
import Grid from '../components/Grid.vue';

const SignUp = {
  name: 'SignUp',
  data: () => ({
    userName: '',
    email: '',
    psw: '',
    pswConfirm: '',
    error: '',
  }),
  components: {
    Card,
    CustomButton,
    CardContent,
    Grid,
  },
  computed: {
    ...mapState({
      loggedIn: state => state.user.loggedIn,
    }),
  },
  methods: {
    createUserWithEmailAndPsw() {
      const { userName, email, psw } = this;
      this.$store.dispatch('signUp', { userName, email, psw });
    },
  },
};

export default SignUp;
</script>

<style media="screen" scoped>
</style>
