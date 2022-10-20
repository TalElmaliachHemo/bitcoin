<template>
  <section class="statistics-app">
    <MarketPriceHistory
      :labels="getLabels"
      :data="getData"
      :description="marketPriceHistory.description"
    />
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service";
import MarketPriceHistory from "../components/market-price-history-chart.vue";
export default {
  data() {
    return {
      marketPriceHistory: {},
    };
  },
  async created() {
    const marketPriceHistory = await bitcoinService.getMarketPriceHistory();
    this.marketPriceHistory = marketPriceHistory;
  },
  computed: {
    getLabels() {
      const labels = this.marketPriceHistory.values.map((value) => {
        const date = new Date(value.x);
        return date.toLocaleDateString("en-US");
      });
      return labels;
    },
    getData() {
      return this.marketPriceHistory.values.map((value) => value.y);
    },
  },
  components: {
    MarketPriceHistory,
  },
};
</script>