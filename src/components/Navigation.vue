<template lang="html">
  <div id="nav">
    <list>
      <router-link
        v-for="item in menuData"
        :key="item.path"
        :to="item.path"
        @click.native="$emit('onNavigate')"
      >
        <list-item
          v-bind:active="item.activePath.indexOf($router.history.current.path) !== -1"
        >{{ item.label }}</list-item>
      </router-link>
    </list>
  </div>
</template>

<script>
import { List, ListItem } from './List';

const menuData = [
  { path: '/', label: 'Home', activePath: ['/sign-in', '/dashboard'] },
  { path: '/leaderboards', label: 'Leaderboards', activePath: ['/leaderboards'] },
  { path: '/about', label: 'About', activePath: ['/about'] },
];

export default {
  name: 'Navigation',
  data: () => ({
    menuData,
  }),
  components: {
    List, ListItem,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables';
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
  li {
    &:hover {
      &:after {
        width: 100%;
      }
    }
    &:after {
      position: absolute;
      content: '';
      height: 4px;
      bottom: -1px;
      margin: 0 auto;
      left: 0;
      width: 10px;
      background: rgba(0, 0, 0, .2);
      transition: width .4s ease-in-out;
    }
    &.active:after {
      background: $blue;
    }
  }
</style>
