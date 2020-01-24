<template>
  <div id="sign-up" class="view">
    <div class="flex flex-center">
      <div class="col-4">
        <card>
          <card-content>
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
          </card-content>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../components/Button.vue';
import { Card, CardContent } from '../components/Card';

console.log('Fix error handling i Vuex state');
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
