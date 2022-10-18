<template>
  <section class="contact-preview">
    <span class="contact-name">{{contact.name}}</span>    
    <span class="contact-email">{{contact.email}}</span>    
    <span class="contact-phone">{{contact.phone}}</span>    
  </section>
</template>

<script>
export default {
props: {
    contact: {
        type: Object,
        required: true
    }
}
}
</script>