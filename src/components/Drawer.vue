<template lang="html">
    <backdrop v-bind:show="open">
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
        <div v-if="open">
          <slot></slot>
        </div>
      </div>
    </backdrop>
</template>

<script>
import IconButton from './IconButton.vue';
import Backdrop from './Backdrop.vue';

export default {
  name: 'Drawer',
  props: {
    open: Boolean,
    drawerTitle: String,
  },
  components: {
    IconButton,
    Backdrop,
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
</style>
