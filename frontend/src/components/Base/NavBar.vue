<template>
  <nav>
    <div class="container">
      <div class="nav-links">
        <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            class="nav-links"
            exact
            active-class="active"
        >
          {{ link.name }}
        </router-link>
      </div>
      <div class="user-links">
        <Button v-if="!user" @click="userLogin">Login</Button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      user: null,
      links: [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact"}
      ],
    };
  },
  methods: {
    userLogin() {
      
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  left: 0px;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.nav-links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4rem;
  color: #00c4be;
}
</style>