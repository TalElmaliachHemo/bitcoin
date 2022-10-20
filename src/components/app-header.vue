<template>
  <header class="app-header">
    <span class="logo">
      <RouterLink to="/"> Mr. BitCoin </RouterLink>
    </span>
    <nav class="nav-app" v-if="!isLoginSignupPath">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistic">Statistics</RouterLink>
      <span class="separator">|</span>
      <RouterLink to="/login-signup">Login</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoginSignupPath() {
      return this.$route.path === '/login-signup'
    },
  },
};
</script>