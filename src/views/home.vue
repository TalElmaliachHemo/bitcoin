<template>
  <section class="home main-layout">
    <h1 class="title">Hello You !! {{ user.name }}, Welcome !</h1>
    <main class="data">
      <div class="balance">
        <span class="btc">{{ user.name }}'s balance: ₿{{ user.balance }}</span>
        <span class="usd">USD: ${{ BTCtoUSD }}</span>
        <span class="eur">EUR: €{{ BTCtoEUR }}</span>
      </div>
    </main>
  </section>
</template>

<script>
import { userService } from "../services/user.service.js";
import { bitcoinService } from "../services/bitcoin.service.js";
export default {
  data() {
    return {
      user: userService.getUser(),
      rate: {},
    };
  },
  async created() {
    this.rate = await bitcoinService.getRate();
  },
  computed: {
    BTCtoUSD() {
      return this.user.balance * this.rate.usd;
    },

    BTCtoEUR() {
      return this.user.balance * this.rate.eur;
    },
  },
};
</script>