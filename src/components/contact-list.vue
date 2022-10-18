<template>
  <section class="contact-list">
    <ul class="clean-list">
      <TransitionGroup name="list">
        <li v-for="contact in contacts" :key="contact._id">
          <ContactPreview :contact="contact" />
          <button class="btn-remove" @click="onRemoveContact(contact._id)">
            x
          </button>
        </li>
      </TransitionGroup>
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
  methods: {
    onRemoveContact(contactId) {
      this.$emit("contact-removed", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>