<template lang="html">
  <div>
    <!-- <p class="text-body">Win Ratio: {{ winRatio }} </p> -->
    <!-- <hr /> -->
    <p class="text-body">Win Ratio: {{ winRatio }} </p>
    <hr />
    <div class="flex">
      <div class="col">
        <!-- <div class="flex">
          <div class="col">
            <p class="text-body">Win Ratio: {{ winRatio }} </p>
          </div>
          <div class="col">
            <p class="text-body-alt">Updated: {{ touched }}</p>
          </div>
        </div> -->
<!-- <hr /> -->
        <div class="flex">
          <div class="col">
            <span class="text-body">Won: {{ win }}</span>
          </div>
          <div class="col">
            <span>Lost: {{ loss }}</span>
          </div>
        </div>

        <div class="flex">
          <div class="col">
            <span class="text-body">Walkovers: {{ wo }}</span>
          </div>
          <div class="col">
            <span>Games Total: {{ total }}</span>
          </div>
        </div>

        <div class="flex">
          <div class="col">
            <!-- <p class="text-body-alt">Updated: {{ touched }}</p> -->
          </div>
        </div>
        <hr />
        <!-- <p class="text-body">Win Ratio: {{ winRatio }} </p> -->
        <p class="text-body">Updated: {{ touched }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerDetails',
  props: {
    win: Number,
    loss: Number,
    wo: Number,
    total: Number,
    winRatio: Number,
    touched: String,
  },
};
</script>

<style lang="css" scoped>
</style>
