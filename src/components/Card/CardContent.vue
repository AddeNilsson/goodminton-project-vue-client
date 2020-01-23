<template>
  <div class="card-content">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <slot />
  </div>
</template>

<script>
const CardContent = {
  name: 'CardContent',
  props: { title: String },
};

export default CardContent;
</script>

<style media="screen" scoped>
  .card-content {
    padding: 16px 24px;
  }
</style>
