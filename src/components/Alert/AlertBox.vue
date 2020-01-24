<template lang="html">
  <div class="flex flex-center">
    <div class="col-3">
      <div
        v-bind:class="[{'show': message, 'hide': !message }]"
        class="alert-box flex flex-center"
      >
        <div class="col-10 text-center">
          <span class="text-body error-text" >{{ message }}</span>
        </div>
        <div class="col-2 text-right">
          <icon-button v-if="message" v-bind:disabled="!message" @handleClick="handleHideClick">
            <div class="icon text-white">X</div>
          </icon-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '../IconButton.vue';

export default {
  name: 'AlertBox',
  props: {
    message: String,
  },
  data: () => ({
    timer: null,
  }),
  components: {
    IconButton,
  },
  watch: {
    message(newMsg) {
      if (newMsg) {
        this.timer = setTimeout(this.hide, 5 * 1000);
      }
    },
  },
  methods: {
    hide() {
      this.$emit('hideAlert');
    },
    handleHideClick() {
      clearTimeout(this.timer);
      this.timer = null;
      this.$emit('hideAlert');
    },
  },
};
</script>

<style lang="css" scoped>
  .alert-box {
    background-color: #f44336;
    color: #fff;
    padding: 8px 16px;
    height: 1.5em;
    border-radius: 4px;
    margin: .2em 0;
    opacity: 0;
    transition: opacity .4s ease-in-out;
  }
  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0,
  }
  .error-text {
    color: #fff;
    font-weight: 700;
  }
</style>
