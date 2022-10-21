<template>
  <section class="transfer-funds">
    <input class="transfer-input" v-model="amount" type="number" />
    <span>BTC</span>
    <button class="btn-transfer" @click="onTransferFunds">Transfer</button>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    onTransferFunds() {
      this.$store.dispatch({
        type: "transferFunds",
        amount: this.amount,
        contact: this.contact,
      });
        this.amount = 0;
    },
  },
};
</script>