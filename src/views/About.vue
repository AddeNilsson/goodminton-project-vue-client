<template>
   <grid row classes="flex-center">
     <grid :xs="12" :sm="10" :md="8" :lg="6" :xl="5">
      <card>
        <card-content>
          <h1>About</h1>
          <p class="text-body">
            This project's purpose is to be viewed upon as a badminton
            playing frontend developers way to get into Vue.js.
          </p>
          <p class="text-body">
            Another version, written in React, is to be found
            <a href="https://goodminton-tracker.firebaseapp.com/" target="_blank">
              Here
            </a>
          </p>
          <p class="text-body">
            Feel free to create an account and have a look around!
          </p>
        </card-content>
      </card>
    </grid>
  </grid>
</template>

<script>
import { Card, CardContent } from '../components/Card';
import Grid from '../components/Grid.vue';

export default {
  name: 'home',
  components: {
    Card, CardContent, Grid,
  },
};
</script>
