<template>
  <section class="contacts main-layout">
    <ContactFilter />
    <ContactList :contacts="contacts" />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import ContactList from "../components/contact-list.vue";
import ContactFilter from "../components/contact-filter.vue";
export default {
  data() {
    return {
      contacts: [],
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>