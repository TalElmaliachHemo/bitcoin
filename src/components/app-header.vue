<template>
  <header class="app-header main-layout">
    <span class="logo">
      <RouterLink to="/"> Mr. BitCoin </RouterLink>
    </span>
    <nav class="nav-app" v-if="!isLoginSignupPath">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistic">Statistics</RouterLink>
      <span class="separator">|</span>
      <button class="btn-logout" @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login-signup')
    }
  },
  computed: {
    isLoginSignupPath() {
      return this.$route.path === '/login-signup'
    },
  },
};
</script>