<template lang="html">
  <grid row gutters classes="flex-wrap">
    <grid :xs="12" :sm="4">
      <custom-button
        blue
        fullWidth
        @handleClick="$emit('registerWin')"
      >Win!</custom-button>
    </grid>
    <grid :xs="12" :sm="4">
      <custom-button
        @handleClick="$emit('registerLoss')"
        blue
        fullWidth
      >Lost</custom-button>
    </grid>
    <grid :xs="12" :sm="4">
      <custom-button
        @handleClick="$emit('registerWo')"
        blue
        fullWidth
      >Wo!</custom-button>
    </grid>
  </grid>
</template>

<script>
import CustomButton from './Button.vue';
import Grid from './Grid.vue';

export default {
  name: 'ButtonField',
  components: { CustomButton, Grid },
};
</script>

<style lang="css" scoped>
</style>
