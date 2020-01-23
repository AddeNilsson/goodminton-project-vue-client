<template lang="html">
  <custom-table v-if="rows.length > 0" v-bind:columnData="columns" v-bind:dense="dense">
    <tr v-for="row in rows" :key="row.uid">
      <td v-bind:class="{ 'foo': dense }" v-for="col in columns" v-bind:key="col.id">
        {{ row[col.id] }}
      </td>
    </tr>
  </custom-table>
</template>

<script>
import CustomTable from './Table.vue';

export default {
  name: 'Leaderboard',
  props: {
    full: Boolean,
    columns: Array,
    rows: Array,
    dense: Boolean,
  },
  components: {
    CustomTable,
  },
};
</script>

<style lang="css" scoped>
</style>
