<template>
  <div class="app-header flex flex-grid text-white">
    <div class="col-2">
      <icon-button @handleClick="$emit('toggleMenu')">
        <div class="icon text-white">&#9776;</div>
      </icon-button>
    </div>
    <div class="col-8 text-center">
      <h2>Vueminton Tracker</h2>
    </div>
    <div class="flex flex-grid flex-align-center justify-end col-2">
      <div class="col-8 text-right">
        <p v-if="user">{{ user.displayName || '' }}</p>
      </div>
      <div class="col-3 text-right">
        <custom-button
        v-bind:disabled="!user.loggedIn"
        @handleClick="signOut"
        transparent
        text="Sign Out"
        ></custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CustomButton from './Button.vue';
import IconButton from './IconButton.vue';

export default {
  name: 'AppHeader',
  components: {
    CustomButton,
    IconButton,
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
  .menu-icon {
    padding: 8px;
    font-size: 1.5em;
  }
</style>
