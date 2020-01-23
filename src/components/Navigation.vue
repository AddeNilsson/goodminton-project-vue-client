<template lang="html">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/leaderboards">Leaderboards</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
/* TODO: Styles && Close menu on navigation */
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
