<template lang="html">
  <grid row classes="flex-center table">
    <grid :xs="12" :md="10" >
      <leaderboard v-bind:columns="columnData" v-bind:rows="users.filter(u => u.ratio > 0)" />
    </grid>
  </grid>
</template>

<script>
import { mapState } from 'vuex';

import Leaderboard from '../components/Leaderboard.vue';
import Grid from '../components/Grid.vue';

export default {
  name: 'Leaderboards',
  components: {
    Leaderboard, Grid,
  },
  data: () => ({
    columnData: [
      { id: 'userName', label: 'Player' },
      { id: 'win', label: 'Won' },
      { id: 'loss', label: 'Lost' },
      { id: 'total', label: 'Games Total' },
      { id: 'wo', label: 'Walkover' },
      { id: 'ratio', label: 'Ratio' },
    ],
  }),
  computed: {
    ...mapState(['users']),
  },
  methods: {
  },
};

</script>

<style lang="css" scoped>

</style>
