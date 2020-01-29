<template>
  <div id="sign-in" class="view">
    <grid row classes="flex-center">
      <grid :xs="12" :sm="10" :md="8" :lg="4">
        <card>
          <card-content>
            <p v-if="loggedIn" class="text-body">
              You're already signed in!
              <router-link to="/dashboard">Home</router-link>
            </p>
            <div v-else>
              <h1>Welcome!</h1>
              <p class="text-body-alt">
                Please sign in below or
                <router-link to="sign-up">Create Account</router-link>
              </p>
              <form class="form flex flex-column" @submit.prevent>
                <label for="email">Email</label>
                <input id="email" v-model="email" />
                <label for="psw">Password</label>
                <input
                  id="psw"
                  v-model="psw"
                  type="password"
                  v-on:keypress.enter="handleSignIn"
                />
                <custom-button
                  @handleClick="handleSignIn"
                  v-bind:disabled="psw.length < 5"
                  text="Sign In"
                  blue
                  class="text-right"
                />
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

import Grid from '../components/Grid.vue';
import { Card, CardContent } from '../components/Card';
import CustomButton from '../components/Button.vue';

const SignIn = {
  name: 'SignIn',
  data: () => ({ email: '', psw: '' }),
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
    handleSignIn() {
      const { email, psw } = this;
      this.$store.dispatch('signIn', { email, psw });
    },
  },
};

export default SignIn;
</script>

<style media="screen" scoped>
</style>
