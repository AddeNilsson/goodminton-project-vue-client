<template lang="html">
  <div v-bind:class="{
    'backdrop-show': show, 'backdrop-hide': !show,
    'dark': dark
    }" class="drawer-backdrop">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
  props: {
    show: Boolean,
    dark: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.drawer-backdrop {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  transition: opacity .25s cubic-bezier(0, 0, .5, 1);
  z-index: 1; // override disabled buttons
}
.backdrop-show {
  width: 100%;
  opacity: 1;
}
.backdrop-hide {
  width: 0px;
  opacity: 0;
}
.dark {
  background-color: rgba(0, 0, 0, .7);
}
</style>
