<template>
  <div id="sign-in" class="view">
    <div class="flex flex-center">
      <div class="col-4">
        <card>
          <card-content>
            <p v-if="loggedIn" class="text-body">
              You're already signed in!
              <router-link to="/dashboard">Home</router-link>
            </p>
            <form v-else class="form flex flex-column" @submit.prevent>
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
              <p class="text-error">{{ error }}</p>
              <router-link to="sign-up">Sign Up!</router-link>
            </form>
          </card-content>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { Card, CardContent } from '../components/Card';
import CustomButton from '../components/Button.vue';

const SignIn = {
  name: 'SignIn',
  data: () => ({ email: '', psw: '', error: '' }),
  components: {
    Card,
    CustomButton,
    CardContent,
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
