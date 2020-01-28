<template lang="html">
  <li
    v-bind:class="{
      'dense': dense,
      'active': active,
      'divider': divider,
      }"
    class="text-body"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    dense: Boolean,
    active: Boolean,
    divider: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  @import '@/scss/_variables';

  li {
    list-style-type: none;
    padding: 12px 24px;
    position: relative;
    &:hover {
      background-color: darken(white, 5%);
    }
  }
  .dense {
    padding: 8px 16px;
  }
  .divider {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
</style>
