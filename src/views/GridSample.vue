<template>
  <div class="grid-sample">

<grid row gutters classes="text-right">
    <grid v-bind:xs="10" v-bind:lg="2" v-bind:md="6" v-bind:sm="8">
      XXXXX
    </grid>
    <grid v-bind:xs="2" v-bind:sm="4" :md="6" :lg="10">
      YYYYYYY
    </grid>
</grid>

    <hr />
    <div class="flex">
      <div class="col-1">
        <card>1</card>
      </div>
      <div class="col-11">
        <card>11</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-2">
        <card>2</card>
      </div>
      <div class="col-10">
        <card>10</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-3">
        <card>3</card>
      </div>
      <div class="col-9">
        <card>9</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-4">
        <card>4</card>
      </div>
      <div class="col-8">
        <card>8</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-5">
        <card>5</card>
      </div>
      <div class="col-7">
        <card>7</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-6">
        <card>6</card>
      </div>
      <div class="col-6">
        <card>6</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-7">
        <card>7</card>
      </div>
      <div class="col-5">
        <card>5</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-8">
        <card>8</card>
      </div>
      <div class="col-4">
        <card>4</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-9">
        <card>9</card>
      </div>
      <div class="col-3">
        <card>3</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-10">
        <card>10</card>
      </div>
      <div class="col-2">
        <card>2</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-11">
        <card>11</card>
      </div>
      <div class="col-1">
        <card>1</card>
      </div>
    </div>

    <div class="flex">
      <div class="col-12">
        <card>12</card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from '../components/Card';
import Grid from '../components/Grid.vue';

export default {
  name: 'gridSample',
  components: {
    Card, Grid,
  },
};
</script>
