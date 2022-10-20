<template>
  <section class="home main-layout" v-if="user">
    <h1 class="title">Hello {{ user.name }}, Welcome !</h1>
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
import { bitcoinService } from "../services/bitcoin.service.js";
export default {
  data() {
    return {
      rate: {},
    };
  },
  async created() {
    if (!this.user) {
      console.log("user")
      this.$router.push("/login-signup");
    }
    this.rate = await bitcoinService.getRate();
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    BTCtoUSD() {
      return this.user.balance * this.rate.usd;
    },

    BTCtoEUR() {
      return this.user.balance * this.rate.eur;
    },
  },
};
</script>