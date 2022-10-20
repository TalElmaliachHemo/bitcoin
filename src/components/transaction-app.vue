<template>
  <section class="transaction-app">
    <TransactionList :transactions="user.transactions" />
  </section>
</template>

<script>
import TransactionList from "./transaction-list.vue";
export default {
  computed: {
    user() {
        return this.$store.getters.loggedinUser
    }
  },
  components: {
    TransactionList,
  },
};
</script>