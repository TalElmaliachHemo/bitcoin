<template>
  <section class="contact-preview">
    <img :src="newContact.img" alt="contact-img" />
    <div class="contact-data">
      <input
        class="contact-name"
        @click.prevent
        @blur="onSubmitContact"
        v-model="newContact.name"
        type="text"
      />
      <input
        class="contact-email"
        @click.prevent
        @blur="onSubmitContact"
        v-model="newContact.email"
        type="email"
      />
      <input
        class="contact-phone"
        @click.prevent
        @blur="onSubmitContact"
        v-model="newContact.phone"
        type="text"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newContact: {...this.contact},
    };
  },
  methods: {
    onSubmitContact() {
      this.$store.dispatch({ type: "saveContact", contact: this.newContact });
    },
  },
};
</script>