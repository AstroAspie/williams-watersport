<template>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      show: false,
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async userLogin() {
      try {
        const res = await this.$store.dispatch("userLogin", {
          email: this.email,
          password: this.password,
        });
        if (res) {
          this.show = false;
          this.$router.push("/account");
        }
      } catch (err) {
        this.error = err.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
</style>