<template>
  <div id="app">
    <app-header @toggleMenu="handleMenu" />
    <drawer
      v-bind:open="menuOpen"
      @closeDrawer="handleMenu"
      drawerTitle="Menu"
    >
      <navigation></navigation>
    </drawer>
    <alert-box></alert-box>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Drawer from './components/Drawer.vue';
import Navigation from './components/Navigation.vue';
import AlertBox from './components/Alert';

export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  components: {
    AppHeader,
    Drawer,
    Navigation,
    AlertBox,
  },
  methods: {
    handleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss">
  // TODO: Find better place for general styles && structure scss
  @import '@/scss/_variables';
  body {
    margin: 50px 0 0 0;
    padding: 0;
    font-family: 'Roboto', 'Arial', sans-serif;
  }
  /* Grid */
  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
    & > * {
      margin: 4px;
    }
  }
  .col { flex: 1;  }
  .col-1 { flex-basis: 8.34%;  }
  .col-2 { flex-basis: 16.68%;  }
  .col-3 { flex-basis: 25%;  }
  .col-4 { flex-basis: 33.36%;  }
  .col-5 { flex-basis: 41.667%;  }
  .col-6 { flex-basis: 50%;  }
  .col-7 { flex-basis: 58.48%;  }
  .col-8 { flex-basis: 66.67%;  }
  .col-9 { flex-basis: 76.92%;  }
  .col-10 { flex-basis: 83.34%;  }
  .col-11 { flex-basis: 91.74%;  }
  .col-12 { flex-basis: 100%;  }
  // .col-1 { flex-basis: calc(8.34% - 8px); } add gutters  ?
  .flex-center {
    justify-content: center;
    align-items: center;
  }
  .flex-align-center {
    align-items: center;
  }
  .flex-align-start {
    align-items: flex-start;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .flex-grid {
    justify-content: space-between;
    .col-1 { flex-basis: calc(8.34% - 8px);  }
    .col-2 { flex-basis: calc(16.68% - 8px);  }
    .col-3 { flex-basis: calc(25% - 8px);  }
    .col-4 { flex-basis: calc(33.36% - 8px);  }
    .col-5 { flex-basis: calc(41.667% - 8px);  }
    .col-6 { flex-basis: calc(50% - 8px);  }
    .col-7 { flex-basis: calc(58.48% - 8px);  }
    .col-8 { flex-basis: calc(66.67% - 8px);  }
    .col-9 { flex-basis: calc(76.92% - 8px);  }
    .col-10 { flex-basis: calc(83.34% - 8px);  }
    .col-11 { flex-basis: calc(91.74% - 8px);  }
    .col-12 { flex-basis: calc(100% - 8px);  }
  }
  .flex-grid-2 {
    justify-content: space-between;
    .col {
      max-width: 49%;
    }
  }
  .flex-grid-3 {
    justify-content: space-between;
    .col {
      max-width: 32%;
    }
  }
  .flex-grid-4 {
    justify-content: space-between;
    .col {
      max-width: 24%;
    }
  }
  /* Text */
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .text-white { color: #fff; }
  .text-error { color: tomato; font-weight: 700; }

  .text-body {
    letter-spacing: 0.015em;
    line-height: 1.3;
    color: rgba(0, 0, 0, .95);
  }
  .text-body-alt {
    color: rgba(0, 0, 0, .55);
    letter-spacing: 0.03em;
  }
  /* Misc */
  .icon {
    padding: 8px;
    font-size: 1.5em;
  }
  .view {
  }
  /* Base */
  input {
    height: 24px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .7);
    font-size: 1.2em;
    padding: 4px;
    &:focus {
      border: 2px solid rgba(0, 0, 0, 1);

      outline: none;
    }
  }
</style>
