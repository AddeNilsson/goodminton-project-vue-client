<template lang="html">
  <li v-bind:class="{ 'dense': dense }">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    dense: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;
    padding: 12px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    &:hover {
      background-color: darken(white, 5%);
    }
  }
  .dense {
    padding: 8px 16px;
  }
</style>
