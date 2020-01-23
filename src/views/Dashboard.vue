<template>
  <div class="home view">
    <h1 class="text-center">Wellcome {{ user.displayName }}</h1>
    <div class="flex flex-center flex-align-start">
      <div class="col-4">
        <card>
          <!-- img -->
          <card-image assetImage="img.jpg" top />
          <!-- stats -->
          <card-content>
            <h2>Register a game!</h2>
            <p class="text-body-alt">
              Register a game outcome using buttons or multiple games below.
              Walkover registers 6 losses. Edit / Undo registration by using the log.
            </p>
            <p class="text-body">Win Ratio: {{ userData ? winRatio : '' }} </p>
            <hr />
            <div class="flex">
              <div class="col">
                <div class="flex">
                  <div class="col">
                    <span class="text-body-alt">Won: {{ userData.win }}</span>
                  </div>
                  <div class="col">
                    <span>Lost: {{ userData.loss }}</span>
                  </div>
                </div>

                <div class="flex">
                  <div class="col">
                    <span class="text-body-alt">Walkovers: {{ userData.wo }}</span>
                  </div>
                  <div class="col">
                    <span>Games Total: {{ userData.total }}</span>
                  </div>
                </div>

                <!-- <div class="flex">
                  <div class="col">
                    <span class="text-body-alt">Updated: {{ userData.updated }}</span>
                  </div>
                </div> -->
                <hr />
              </div>
            </div>
          </card-content>
          <!-- buttons -->
          <card-content>
            <div class="flex flex-grid-3">
              <div class="col">
                <custom-button
                  blue
                  fullWidth
                  @handleClick="registerWin"
                >Win!</custom-button>
              </div>
              <div class="col">
                <custom-button
                  @handleClick="registerLoss"
                  blue
                  fullWidth
                >Lost</custom-button>

              </div>
              <div class="col">
                <custom-button
                  @handleClick="registerWo"
                  blue
                  fullWidth
                >Wo!</custom-button>
              </div>
            </div>
          </card-content>
        </card>
      </div>
      <div class="col-3">
        <card>
          <card-content>
            <h2>Leaderboard</h2>
            <leaderboard
              v-bind:columns="columns"
              v-bind:rows="users"
              dense>
            </leaderboard>
            <button @click="foo">Click</button>
            {{ userData !== null ? userData.win : '' }}
          </card-content>
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
import CustomButton from '../components/Button.vue';
import Leaderboard from '../components/Leaderboard.vue';

export default {
  name: 'dashboard',
  data: () => ({
    columns: [
      { id: 'userName', label: 'Player' },
      { id: 'ratio', label: 'Win Ratio' },
    ],
  }),
  computed: {
    ...mapState(['user', 'userData', 'users']),
    winRatio() {
      const { win, total } = this.userData;
      return Math.round((win / total) * 100) / 100 || 0;
    },
  },
  components: {
    Card,
    CardContent,
    CardImage,
    CustomButton,
    Leaderboard,
  },
  updated() {
    console.log('updated: ', this.user);
  },
  methods: { /* eslint-disable */
    foo() {
      console.log(this);
      console.log(this.getTime());
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
      }
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
      }
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
    }
  },
};
</script>
