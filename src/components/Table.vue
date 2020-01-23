<template lang="html">
  <div class="table">
    <table>
      <thead>
        <tr>
          <th
            v-bind:class="{ 'dense': dense }"
            v-for="col in columnData"
            :key="col.id"
          >{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    columnData: Array,
    dense: Boolean,
  },
};
</script>

<style lang="css" scoped>
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
th, td {
  padding: 16px;
  line-height: 1.4;
  text-align: left;
}
th {
  border: 1px solid rgba(0, 0, 0, .4);
}
td {
  border: 1px solid rgba(0, 0, 0, .2);
}
.dense {
  padding: 8px;
}
</style>
