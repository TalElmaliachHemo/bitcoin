<template>
  <section class="statistics-app">
    <MarketPriceHistory />
    <AvgBlockSize />
  </section>
</template>

<script>
import MarketPriceHistory from "../components/market-price-history.vue";
import AvgBlockSize from "../components/avg-block-size.vue";
export default {
  components: {
    MarketPriceHistory,
    AvgBlockSize,
  },
};
</script>