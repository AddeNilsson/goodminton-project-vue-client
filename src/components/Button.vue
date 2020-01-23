<template lang="html">
  <div id="custom-button">
    <button
      :disabled="disabled"
      @click="$emit('handleClick')"
      v-bind:class="[{
        'blue': blue,
        'transparent': transparent,
        'full-width': fullWidth,
        }]"
    >{{ text }} <slot /></button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
    disabled: Boolean,
    blue: Boolean,
    transparent: Boolean,
    fullWidth: Boolean,
  },
};

</script>

<style lang="scss" scoped>
  button {
    padding: 8px 12px;
    font-size: 1em;
    border: 1px solid #fff;
    border-radius: 3px;
    min-width: 100px;
    color: #fff;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, .1);
    }
    &:active {
      border: 1px inset black;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
  }
  .transparent {
    background-color: transparent;

  }
  .blue {
    background-color: #3f51b5;
    &:hover {
      background-color: darken(#3f51b5, 5%);
    }
  }
  .full-width { width: 100%; }
</style>
