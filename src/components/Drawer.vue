<template lang="html">
  <backdrop v-bind:show="open">
    <div class="drawer" v-bind:class="{
        'show': open, 'hide': !open,
      }">
      <grid v-if="open" row gutters classes="drawer-header flex-align-center">
        <grid :xs="2">
          <icon-button @handleClick="handleDrawerClose">
            <div class="icon text-white">X</div>
          </icon-button>
        </grid>
        <grid :xs="10">
          <h4>{{ drawerTitle }}</h4>
        </grid>
      </grid>
      <div v-if="open">
        <slot></slot>
      </div>
    </div>
  </backdrop>
</template>

<script>
import IconButton from './IconButton.vue';
import Backdrop from './Backdrop.vue';
import Grid from './Grid.vue';

export default {
  name: 'Drawer',
  props: {
    open: Boolean,
    drawerTitle: String,
  },
  components: {
    IconButton,
    Backdrop,
    Grid,
  },
  methods: {
    handleDrawerClose() {
      this.$emit('closeDrawer');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/scss/_variables';
  .drawer {
    height: 100%;
    position: absolute;
    background-color: #fff;
    transition: width .45s ease-in-out;
    width: 0px;
  }
  .hide {
    width: 0px;
  }
  .show {
    width: $drawer-width;
  }
  .drawer-header {
    height: $header-hight;
    background-color: $blue;
    padding: 8px;
    box-sizing: border-box;
    color: #fff;
  }
</style>
