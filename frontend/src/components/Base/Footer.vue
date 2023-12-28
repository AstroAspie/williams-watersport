<template>
  <div class="footer">
    <div class="footer-links">
      <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="footer-links"
          exact
          active-class="active"
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {
      links: [
        { name: "Facebook", path: "https://www.facebook.com" },
        { name: "Instagram", path: "https://www.instagram.com" },
        { name: "Twitter", path: "https://www.twitter.com" },
        { name: "Agreements: Terms of Service", path: "/terms-of-service" },
        { name: "Agreements: Privacy Policy", path: "/privacy-policy" },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  left: 0;
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
}

.footer-links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4rem;
  color: #00c4be;
}

</style>