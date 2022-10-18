<template>
  <section class="contact-preview">
    <img :src="imgURL" alt="contact-img" />
    <div class="contact-data">
      <span class="contact-name">{{ contact.name }}</span>
      <span class="contact-email">{{ contact.email }}</span>
      <span class="contact-phone">{{ contact.phone }}</span>
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
  computed: {
    imgURL() {
      return `https://robohash.org/${this.contact.name}/?set=set5`;
    },
  },
};
</script>