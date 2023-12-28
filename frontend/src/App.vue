<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Base/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>
