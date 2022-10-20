<template>
  <section v-if="contact" class="contact-details">
    <img :src="contact.img" alt="contact-img" />
    <span class="contact-name">{{ contact.name }}</span>
    <span class="contact-email">Email: {{ contact.email }}</span>
    <span class="contact-phone">Phone: {{ contact.phone }}</span>
    <TransactionList :transactions="getTransactions" />
    <TransferFunds :contact="contact" />
    <button class="btn-back">
      <RouterLink to="/contact">Back</RouterLink>
    </button>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import TransactionList from "../components/transaction-list.vue";
import TransferFunds from "../components/transfer-funds.vue";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const _id = this.$route.params.id;
    this.contact = await contactService.getById(_id);
  },
  computed: {
    getTransactions() {
      const transactions = this.$store.getters.loggedinUser.transactions;
      return transactions.filter(
        (transaction) => transaction.toId === this.contact._id
      );
    },
  },
  components: {
    TransactionList,
    TransferFunds
  },
};
</script>