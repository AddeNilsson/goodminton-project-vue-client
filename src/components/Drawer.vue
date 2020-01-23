<template lang="html">
  <div v-if="open" class="drawer-backdrop">
    <div class="drawer">
      <div class="drawer-header">
        <h4>{{ drawerTitle }}</h4>
          <icon-button @handleClick="handleDrawerClose">
            <div class="icon text-white">X</div>
          </icon-button>
      </div>
      <slot></slot>
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
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
  }
  .drawer {
    width: 350px;
    height: 100%;
    position: absolute;
    background-color: #fff;
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
