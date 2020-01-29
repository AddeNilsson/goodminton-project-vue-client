<template lang="html">
  <grid row gutters classes="flex-wrap">
    <grid :xs="12">
      <p class="text-body">Win Ratio: {{ winRatio }} </p>
      <hr />
    </grid>
    <grid :xs="6">
      <span class="text-body">Won: {{ win }}</span>
    </grid>
    <grid :xs="6">
      <span>Lost: {{ loss }}</span>
    </grid>
    <grid :xs="6">
      <span class="text-body">Walkovers: {{ wo }}</span>
    </grid>
    <grid :xs="6">
      <span>Games Total: {{ total }}</span>
    </grid>
    <grid :xs="12">
      <hr />
      <p class="text-body">Updated: {{ touched }}</p>
    </grid>
  </grid>
</template>

<script>
import Grid from './Grid.vue';

export default {
  name: 'PlayerDetails',
  props: {
    win: Number,
    loss: Number,
    wo: Number,
    total: Number,
    winRatio: Number,
    touched: String,
  },
  components: { Grid },
};
</script>

<style lang="css" scoped>
</style>
