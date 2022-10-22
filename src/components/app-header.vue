<template>
  <header class="app-header main-layout" :class="menuClass">
    <span class="logo">
      <RouterLink to="/"> Mr. BitCoin </RouterLink>
    </span>
    <nav class="nav-app" v-if="!isLoginSignupPath">
      <RouterLink to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contacts</RouterLink>
      <RouterLink to="/statistic" @click="closeMenu">Statistics</RouterLink>
      <span class="separator">|</span>
      <button class="btn-logout" @click="logout">Logout</button>
    </nav>
    <button class="toggle-menu" v-if="!isLoginSignupPath" @click="openMenu">
      ☰
    </button>
    <button class="btn-close-menu" v-if="!isLoginSignupPath" @click="closeMenu">
      X
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuClass: "",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.menuClass = "";
      this.$router.push("/login-signup");
    },
    openMenu() {
      this.menuClass = "menu-opened";
    },
    closeMenu() {
      this.menuClass = "";
    },
  },
  computed: {
    isLoginSignupPath() {
      return this.$route.path === "/login-signup";
    },
  },
};
</script>