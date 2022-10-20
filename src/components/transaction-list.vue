<template>
  <section class="transaction-list">
    <ul class="clean-list">
      <TransitionGroup name="list">
        <li v-for="transaction in transactions" :key="transaction.id">
            <TransactionPreview :transaction="transaction" />
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<script>
import TransactionPreview from './transaction-preview.vue'
export default {
    props: {
        transactions: {
            type: Array,
            required: true
        }
    },
    components: {
        TransactionPreview
    }
}
</script>