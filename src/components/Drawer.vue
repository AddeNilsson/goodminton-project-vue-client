<template lang="html">
  <div v-bind:class="{
    'backdrop-show': open, 'backdrop-hide': !open,
    }" class="drawer-backdrop">
    <div class="drawer" v-bind:class="{
        'show': open, 'hide': !open,
      }">
      <div class="drawer-header">
        <div class="col-2">
          <icon-button @handleClick="handleDrawerClose">
            <div class="icon text-white">X</div>
          </icon-button>
        </div>
        <div class="col-10">
          <h4>{{ drawerTitle }}</h4>
        </div>
      </div>
      <div v-bind:class="[{ 'fade-in': open, 'fade-out': !open }, 'slot-content']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from './IconButton.vue';

export default {
  name: 'Drawer',
  props: {
    open: Boolean,
    drawerTitle: String,
  },
  components: {
    IconButton,
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
  .drawer-backdrop {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    transition: opacity .25s cubic-bezier(0, 0, .5, 1);
  }
  .backdrop-show {
    width: 100%;
    opacity: 1;
  }
  .backdrop-hide {
    width: 0px;
    opacity: 0;
  }
  .hidden {
    width: 0px;
    left: -150px;
  }
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
    width: 350px;
  }
  .drawer-header {
    height: $header-hight;
    background-color: $blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
    color: #fff;
  }
  .slot-content {
    opacity: 0;
    transition: opacity .75s ease-in;
  }
  .fade-in {
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
</style>
