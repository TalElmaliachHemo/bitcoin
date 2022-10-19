<template>
  <section class="contact-app main-layout">
    <div class="contact-actions">
      <ContactFilter @filter="onFilter" />
      <AddContact />
    </div>
    <ContactList
      @contact-removed="onRemoveContact"
      :contacts="contactsToShow"
    />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import ContactList from "../components/contact-list.vue";
import ContactFilter from "../components/contact-filter.vue";
import AddContact from "../components/add-contact.vue";
export default {
  data() {
    return {
      contacts: [],
      filterBy: {},
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  methods: {
    onFilter(filterBy) {
      this.filterBy = filterBy;
    },
    onRemoveContact(contactId) {
      contactService.remove(contactId);

      const idx = this.contacts.findIndex(
        (contact) => contact._id === contactId
      );
      this.contacts.splice(idx, 1);
    },
  },
  computed: {
    contactsToShow() {
      const regex = new RegExp(this.filterBy.name, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  components: {
    ContactList,
    ContactFilter,
    AddContact,
  },
};
</script>