<template>
  <section class="contact-preview">
    <img :src="imgURL" alt="contact-img" />
    <div class="contact-data">
      <input
        class="contact-name"
        @click.prevent="onSubmitContact"
        v-on:input.prevent="onSubmitContact"
        v-model="newContact.name"
        type="text"
      />
      <input
        class="contact-email"
        @click.prevent="onSubmitContact"
        v-on:input.prevent="onSubmitContact"
        v-model="newContact.email"
        type="email"
      />
      <input
        class="contact-phone"
        @click.prevent="onSubmitContact"
        v-on:input.prevent="onSubmitContact"
        v-model="newContact.phone"
        type="text"
      />
    </div>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service";
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newContact: {...this.contact}
    };
  },
  methods: {
    async onSubmitContact() {
      console.log(this.newContact)
      await contactService.save(this.newContact)
    },
  },
  computed: {
    imgURL() {
      return `https://robohash.org/${this.contact.name}/?set=set5`;
    },
  },
};
</script>