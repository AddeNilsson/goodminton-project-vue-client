<template lang="html">
  <div class="flex flex-grid">
    <div class="col-4">
      <custom-button
        blue
        fullWidth
        @handleClick="$emit('registerWin')"
      >Win!</custom-button>
    </div>
    <div class="col-4">
      <custom-button
        @handleClick="$emit('registerLoss')"
        blue
        fullWidth
      >Lost</custom-button>

    </div>
    <div class="col-4">
      <custom-button
        @handleClick="$emit('registerWo')"
        blue
        fullWidth
      >Wo!</custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from './Button.vue';

export default {
  name: 'ButtonField',
  components: {
    CustomButton,
  },
};
</script>

<style lang="css" scoped>
</style>
