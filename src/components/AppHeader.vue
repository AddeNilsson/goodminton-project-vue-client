<template>
  <div class="app-header flex flex-grid text-white">
    <grid :xs="2" :md="3">
      <icon-button @handleClick="$emit('toggleMenu')">
        <div class="icon text-white">&#9776;</div>
      </icon-button>
    </grid>
    <grid :md="6" classes="hide-md-down text-center">
      <h2>Vueminton Tracker</h2>
    </grid>
    <grid row gutters :xs="10" :md="3" classes="flex-align-center justify-end">
      <grid :xs="6" classes="text-right">
        <p v-if="user">{{ user.displayName || '' }}</p>
      </grid>
      <grid :xs="6" classes="text-right">
        <custom-button
          v-bind:disabled="!user.loggedIn"
          @handleClick="signOut"
          transparent
          text="Sign Out"
        ></custom-button>
      </grid>
    </grid>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CustomButton from './Button.vue';
import IconButton from './IconButton.vue';
import Grid from './Grid.vue';

export default {
  name: 'AppHeader',
  components: {
    CustomButton,
    IconButton,
    Grid,
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/scss/_variables';
  .app-header {
    height: $header-hight;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 0 8px;
    background-color: $blue;
    align-items: center;
    box-sizing: border-box;
  }
</style>
