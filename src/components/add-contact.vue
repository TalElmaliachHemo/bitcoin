<template>
  <section class="add-contact">
    <h1 class="title">Add more friends to your contact list!</h1>
    <form class="add-contact-form" @submit.prevent>
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
    </form>
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
      this.contact = {
        name: "",
        email: "",
        phone: "",
      };
    },
  },
};
</script>