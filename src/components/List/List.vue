<template lang="html">
  <div class="">
    <ul v-if="items && items.length > 0">
      <list-item
        v-for="item in items"
        :key="item.label"
      >{{ item.label }}</list-item>
    </ul>
    <ul v-else>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'List',
  props: {
    items: Array,
  },
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
  }
</style>
