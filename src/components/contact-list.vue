<template>
  <section class="contact-list">
    <ul class="clean-list">
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./contact-preview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
};
</script>