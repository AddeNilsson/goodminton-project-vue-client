<template lang="html">
  <button @click="$emit('handleClick')"><slot /></button>
</template>

<script>
export default {
  name: 'IconButton',
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
