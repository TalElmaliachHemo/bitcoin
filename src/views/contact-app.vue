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
import ContactList from "../components/contact-list.vue";
import ContactFilter from "../components/contact-filter.vue";
import AddContact from "../components/add-contact.vue";
export default {
  data() {
    return {
      filterBy: {},
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  methods: {
    onFilter(filterBy) {
      this.filterBy = filterBy;
    },
    onRemoveContact(contactId) {
      this.$store.dispatch({ type: "removeContact", contactId });
    },
  },
  computed: {
    contactsToShow() {
      const regex = new RegExp(this.filterBy.name, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  components: {
    ContactList,
    ContactFilter,
    AddContact,
  },
};
</script>