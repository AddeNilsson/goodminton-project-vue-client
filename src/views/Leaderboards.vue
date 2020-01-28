<template lang="html">
  <div class="view">
    <div class="flex flex-center">
      <div class="col-8">
        <leaderboard v-bind:columns="columnData" v-bind:rows="users.filter(u => u.ratio > 0)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Leaderboard from '../components/Leaderboard.vue';

export default {
  name: 'Leaderboards',
  components: {
    Leaderboard,
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
