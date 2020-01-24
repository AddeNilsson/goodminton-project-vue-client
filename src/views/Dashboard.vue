<template>
  <div class="home view">
    <div class="flex flex-center flex-align-start">
      <div class="col-6">
        <card>
          <card-image assetImage="img.jpg" top />
          <card-content v-bind:title="`Register a game ${user.displayName || ''}!`">
            <p class="text-body-alt">
              Register a game outcome using buttons or multiple games below.
              Walkover registers 6 losses. Edit / Undo registration by using the log.
            </p>
          <div v-if="!loading" class="flex flex-grid">
            <div class="col-6">
              <h3>Player stats</h3>
              <player-details v-bind="userData" v-bind:winRatio="winRatio" ></player-details>
            </div>
            <div class="col-6">
              <h3>Top 3</h3>
              <leaderboard
                v-bind:columns="columns"
                v-bind:rows="users"
                dense>
              </leaderboard>
            </div>
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        </card-content>
          <card-content>
            <button-field
              @registerWin="registerWin"
              @registerLoss="registerLoss"
              @registerWo="registerWo"
            ></button-field>
          </card-content>
          <button @click="foo">Click</button>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
/* TODO: Refactor into components */
import { mapState } from 'vuex';
import moment from 'moment';

import { Card, CardContent, CardImage } from '../components/Card';
import Leaderboard from '../components/Leaderboard.vue';
import ButtonField from '../components/ButtonField.vue';
import PlayerDetails from '../components/PlayerDetails.vue';

export default {
  name: 'dashboard',
  data: () => ({
    columns: [
      { id: 'userName', label: 'Player' },
      { id: 'ratio', label: 'Win Ratio' },
    ],
  }),
  computed: {
    ...mapState({
      user: state => state.user,
      userData: state => state.userData,
      loading: state => state.loading,
      users: state => state.users.slice(0, 3),
    }),
    winRatio() {
      const { win, total } = this.userData;
      return Math.round((win / total) * 100) / 100 || 0;
    },
    // TODO: getNewLogEntry () =>
  },
  components: {
    Card,
    CardContent,
    CardImage,
    Leaderboard,
    ButtonField,
    PlayerDetails,
  },
  methods: {
    foo() {
      console.log(this);
    },
    getTime() {
      return moment().format('YYYY-MM-DD HH:mm:ss');
    },
    registerWin() {
      const { total, win } = this.userData;
      const payload = {
        ...this.userData,
        total: total + 1,
        win: win + 1,
        touched: this.getTime(),
      };
      const log = {
        actionText: 'register_win',
        isWin: 1,
        isLoss: 0,
        isWo: 0,
      };
      this.submit({ payload, log });
    },
    registerLoss() {
      const { total, loss } = this.userData;
      const payload = {
        ...this.userData,
        total: total + 1,
        loss: loss + 1,
        touched: this.getTime(),
      };
      const log = {
        actionText: 'register_loss',
        isWin: 0,
        isLoss: 1,
        isWo: 0,
      };
      this.submit({ payload, log });
    },
    registerWo() {
      const { total, loss, wo } = this.userData;
      const payload = {
        ...this.userData,
        total: total + 6,
        wo: wo + 1,
        loss: loss + 6,
        touched: this.getTime(),
      };
      const log = {
        actionText: 'register_wo',
        isWin: 0,
        isLoss: 0,
        isWo: 1,
      };
      this.submit({ payload, log });
    },
    submit(payload) {
      this.$store.dispatch('register', payload);
    },
  },
};
</script>
