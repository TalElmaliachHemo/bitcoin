<script>
import AppHeader from "./components/app-header.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <section class="app main-layout">
    <AppHeader />
    <RouterView />
  </section>
</template>