<template>
  <section class="transaction-preview">
    <h1>Transactions</h1>
    <span>{{ getDate }}</span>
    <span>{{ getTime }}</span>
    <span>{{ transaction.to }}</span>
    <span>BTC {{ transaction.amount }}</span>
  </section>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getDate() {
      const date = new Date(this.transaction.at);
      return date.toLocaleDateString("en-US");
    },
    getTime() {
      const date = new Date(this.transaction.at);
      return `${date.getHours()}:${date.getMinutes()}`;
    },
  },
};
</script>