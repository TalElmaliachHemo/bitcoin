<template>
  <section class="home main-layout" v-if="user">
    <h1 class="primary-title">Hello {{ user.name }}, {{ getGreeting }} !</h1>
    <h4 class="secondary-title">
      Start to
      <span>Send and Exchange </span>
      with Mr. BitCoin free and secure BTC app
    </h4>
    <main class="data">
      <div class="flex column">
        <div class="balance">
          <span class="btc"
            >{{ user.name }}'s balance:
            <span> ₿{{ user.balance }} </span>
          </span>
          <span class="usd"
            >USD:
            <span> ${{ BTCtoUSD }}</span>
          </span>
          <span class="eur"
            >EUR:
            <span> €{{ BTCtoEUR }}</span>
          </span>
        </div>
        <TransactionList
          v-if="getTransactions"
          :transactions="getTransactions"
        />
      </div>
      <MarketPriceHistory />
    </main>
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import TransactionList from "../components/transaction-list.vue";
import MarketPriceHistory from "../components/market-price-history.vue";
export default {
  data() {
    return {
      rate: {},
    };
  },
  async created() {
    if (!this.user) {
      console.log("user");
      this.$router.push("/login-signup");
    }
    this.rate = await bitcoinService.getRate();
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    BTCtoUSD() {
      return (this.user.balance * this.rate.usd).toFixed(2);
    },

    BTCtoEUR() {
      return (this.user.balance * this.rate.eur).toFixed(2);
    },
    getTransactions() {
      const transactions = this.user.transactions;
      if (!transactions) return;
      if (transactions.length > 3) return transactions.slice(0, 3);
      else return transactions;
    },
    getGreeting() {
      const date = new Date();
      const hours = date.getHours();
      if (hours > -1 && hours < 5) return "Good Night";
      if (hours > 4 && hours < 13) return "Good Morning";
      if (hours > 12 && hours < 18) return "Good Afternoon";
      if (hours > 17 && hours < 21) return "Good Evening";
      if (hours > 20 && hours < 24) return "Good Night";
    },
  },
  components: {
    TransactionList,
    MarketPriceHistory,
  },
};
</script>