<template>
  <div>
    <header>
      <NavBar />
    </header>
    <RouterView />
  </div>
</template>

<script>
import NavBar from "./components/Base/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped>

</style>
