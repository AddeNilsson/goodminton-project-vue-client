<template lang="html">
    <div
      v-bind:class="[{
        'flex': row,
        'grid-gutters': gutters,
        'col-xs-12': !xs && !row,
        ['col-xs-' + xs]: xs > 0,
        ['col-sm-' + sm]: sm > 0,
        ['col-md-' + md]: md > 0,
        ['col-lg-' + lg]: lg > 0,
        'child': !row,
        }, classes]"
     ><slot></slot></div>
</template>


<script>
export default {
  name: 'Grid',
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    row: Boolean,
    gutters: Boolean,
    classes: String,
  },
};
</script>

<style lang="scss">

</style>
