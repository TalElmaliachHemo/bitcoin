<template>
  <section class="transfer-funds">
    <input v-model="amount" type="number" />
    <button class="btn-transfer" @click="onTransferFunds">Transfer !</button>
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
      amount: "",
    };
  },
  methods: {
    onTransferFunds() {
      this.$store.dispatch({
        type: "transferFunds",
        amount: this.amount,
        contact: this.contact,
      });
        this.amount = "";
    },
  },
};
</script>