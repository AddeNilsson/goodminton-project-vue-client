<template>
  <div id="app">
    <app-header @toggleMenu="handleMenu" />
    <drawer
      v-bind:open="menuOpen"
      @closeDrawer="handleMenu"
      drawerTitle="Menu"
    >
      <navigation @onNavigate="handleMenu"></navigation>
    </drawer>
    <alert-box></alert-box>
    <main
      v-bind:class="{
        'margin-left': menuOpen
        }"
    >
      <div>
        <loading-spinner v-bind:active="loading > 0" />
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import AppHeader from './components/AppHeader.vue';
import Drawer from './components/Drawer.vue';
import Navigation from './components/Navigation.vue';
import AlertBox from './components/Alert';
import LoadingSpinner from './components/LoadingSpinner.vue';

console.log('TODO: deployment, responsive styles, log actions, structure css, about page content');
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    ...mapState(['loading']),
  },
  components: {
    AppHeader,
    Drawer,
    Navigation,
    AlertBox,
    LoadingSpinner,
  },
  methods: {
    handleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss">
  @import '@/scss/styles';

  main {
    transition: margin .5s cubic-bezier(0, 0, .2, 1);
  }
  .margin-left {
    margin-left: 350px;
  }
</style>
