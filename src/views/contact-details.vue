<template>
  <section v-if="contact" class="contact-details">
    <img :src="imgURL" alt="contact-img">
    <span class="contact-name">{{ contact.name }}</span>
    <span class="contact-email">Email: {{ contact.email }}</span>
    <span class="contact-phone">Phone: {{ contact.phone }}</span>
    <button class="btn-back">
      <RouterLink to="/contact">Back</RouterLink>
    </button>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
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
    imgURL() {
        return `https://robohash.org/${this.contact.name}/?set=set5`
    }
  }
};
</script>