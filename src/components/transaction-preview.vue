<template>
  <section class="transaction-preview">
    <span class="transaction-date"
      >{{ getDate }}
      <span>{{ getTime }}</span>
    </span>
    <span class="transaction-to">To {{ transaction.to }}</span>
    <span class="transaction-amount">BTC {{ transaction.amount }}</span>
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

      let hours = date.getHours() + "";
      let minutes = date.getMinutes() + "";
      hours = hours.length < 2 ? `0${hours}` : hours;
      minutes = minutes.length < 2 ? `0${minutes}` : minutes;

      return `${hours}:${minutes}`;
    },
  },
};
</script>