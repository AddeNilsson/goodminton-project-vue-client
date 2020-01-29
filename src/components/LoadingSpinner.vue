<template lang="html">
  <backdrop v-bind:show="active" dark>
    <div v-if="active" class="flex flex-center align-center">
      <div class="ripple">
        <div />
        <div />
      </div>
    </div>
  </backdrop>
</template>

<script>
import Backdrop from './Backdrop.vue';

export default {
  name: 'LoadingSpinner',
  components: { Backdrop },
  props: {
    active: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .ripple {
    display: inline-block;
    position: relative;
    margin-top: 5em;
    width: 80px;
    height: 80px;
  }
  .ripple div {
    position: absolute;
    border: 4px solid white;
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }

</style>
