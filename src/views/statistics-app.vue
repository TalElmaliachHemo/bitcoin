<template>
  <section class="statistics-app">
    <MarketPriceHistory />
  </section>
</template>

<script>
import MarketPriceHistory from "../components/market-price-history.vue";
export default {
  components: {
    MarketPriceHistory,
  },
};
</script>