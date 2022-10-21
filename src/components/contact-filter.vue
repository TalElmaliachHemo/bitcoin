<template>
  <section class="contact-filter">
    <h1 class="filterBy-title">
      <span>Filter</span>
      your contacts by name and start to
      <span> send BTC</span>
    </h1>
    <input
      class="filterBy-input"
      @input="onFilter"
      v-model="filterBy.name"
      placeholder="search by name"
      type="text"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { name: "" },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>
