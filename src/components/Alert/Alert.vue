<template lang="html">
  <alert-box @hideAlert="hideAlert" v-bind:message="error"></alert-box>
</template>

<script>
import { mapState } from 'vuex';
import AlertBox from './AlertBox.vue';

export default {
  name: 'Alert',
  computed: mapState(['error']),
  components: {
    AlertBox,
  },
  methods: {
    hideAlert() {
      this.$store.dispatch('removeError');
    },
  },
};
</script>

<style lang="css" scoped>
</style>
