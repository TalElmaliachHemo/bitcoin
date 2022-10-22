<template>
  <section class="login-signup">
    <h1 class="title">Signup</h1>
    <form class="login-signup-form" @submit.prevent="loginSignup">
      <input
        class="username"
        ref="input"
        v-model="username"
        placeholder="Enter your fullname"
        type="text"
      />
      <button class="btn-signup" @click="loginSignup">Signup</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    loginSignup() {
      this.$store.dispatch({ type: "signupUser", username: this.username });
      this.$router.push('/')
    },
  },
};
</script>