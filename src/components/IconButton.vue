<template lang="html">
  <button :disabled="disabled" @click="$emit('handleClick')"><slot /></button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    disabled: Boolean,
  },
};

</script>

<style lang="scss" scoped>
  button {
    border-radius: 50%;
    border-width: 0;
    background-color: transparent;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, .1);
    }
    &:active {
      border-width: 1px;
      border-style: solid;
    }
    &:focus {
      outline: none;
    }
  }
</style>
