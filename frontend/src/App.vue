<template>
  <div id="app">
    <BaseLayout>
      <template #header>
        <NavBar />
      </template>
      <template #content>
        <RouterView />
      </template>
      <template #footer>
        <BaseFooter />
      </template>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import NavBar from "@/components/Base/NavBar.vue";
import BaseFooter from "@/components/Base/Footer.vue";

export default {
  name: "App",
  components: {
    BaseLayout,
    NavBar,
    BaseFooter
  },
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.footer {
  margin-top: 30px;
}
</style>
