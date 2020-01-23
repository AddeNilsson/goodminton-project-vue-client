<template>
  <div id="sign-in" class="view">
    <div class="flex flex-center">
      <div class="col-4">
        <card>
          <card-content>
            <form class="form flex flex-column" @submit.prevent>
              <label for="email">Email</label>
              <input id="email" v-model="email" />
              <label for="psw">Password</label>
              <input
                id="psw"
                v-model="psw"
                type="password"
                v-on:keypress.enter="signInWithEmailAndPsw"
              />
              <custom-button
                @handleClick="signInWithEmailAndPsw"
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
import firebase from 'firebase/app';
import { Card, CardContent } from '../components/Card';
import CustomButton from '../components/Button.vue';

const SignIn = {
  name: 'SignIn',
  data: () => ({ email: '', psw: '', error: '' }),
  created() {
    this.auth = firebase.auth();
  },
  components: {
    Card,
    CustomButton,
    CardContent,
  },
  methods: {
    signInWithEmailAndPsw() {
      console.log('TODO: move to action and fix routing');
      this.auth.signInWithEmailAndPassword(this.email, this.psw)
        // redirect won't do it cuz user hasn't landed properly..
        // .then(() => this.$router.push('dashboard'))
        .catch((e) => { this.error = e; });
    },
  },
};

export default SignIn;
</script>

<style media="screen" scoped>
</style>
