<template lang="html">
  <div id="nav">
    <list>
      <router-link
        v-for="item in menuData"
        :key="item.path"
        :to="item.path"
        @click.native="$emit('onNavigate')"
      >
        <list-item>{{ item.label }}</list-item>
      </router-link>
    </list>
  </div>
</template>

<script>
import { List, ListItem } from './List';

const menuData = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/leaderboards', label: 'Leaderboards' },
  { path: '/about', label: 'About' },
];

export default {
  name: 'Navigation',
  data: () => ({
    menuData,
  }),
  components: {
    List, ListItem,
  },
  methods: {
    foo() {
      console.log('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables';
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: $blue;
    }
  }
</style>
