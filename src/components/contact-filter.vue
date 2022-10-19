<template>
  <section class="contact-filter">
    <input class="filterBy-input"
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
