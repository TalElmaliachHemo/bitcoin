<template>
  <section class="add-contact">
    <h1>Add a new contact</h1>
    <input
      class="contact-name"
      v-model="contact.name"
      placeholder="contact fullname"
      type="text"
    />
    <input
      class="contact-email"
      v-model="contact.email"
      placeholder="contact email"
      type="email"
    />
    <input
      class="contact-phone"
      v-model="contact.phone"
      placeholder="contact phone"
      type="text"
    />
    <button class="btn-add" @click="onAddContact">Add</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    onAddContact() {
      this.$store.dispatch({ type: "saveContact", contact: this.contact });
    },
  },
};
</script>