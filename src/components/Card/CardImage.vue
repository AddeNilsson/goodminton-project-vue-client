<template>
  <div
    v-bind:class="[{
      'border-radius-top': top,
      'border-radius-bottom': bottom,
      }, 'card-image']"
    :style="{ backgroundImage: `url('${require(`@/assets/${assetImage}`)}')` }"
  />
</template>

<script>
const CardImage = {
  name: 'CardImage',
  props: { assetImage: String, top: Boolean, bottom: Boolean },
};

export default CardImage;
</script>

<style media="screen">
  .card-image {
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .border-radius-top {
    border-radius: 8px 8px 0 0;
  }
  .border-radius-bottom {
    border-radius: 0 0 8px 8px;
  }
</style>
