
<template>
  <v-main>
    <section class="main">
      <img class='logo' src="/demo-images/williams-water-sports-logo.png" alt="williams water sport">
    </section>
    <v-btn
      color="primary"
      class="mt-10"
      @click="$router.push('/products')"
    >View Products</v-btn>
  </v-main>
</template>


<script>
export default {
  name: 'HomeView',
  data() {
    return {
       
    }
  },
}
</script> 

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

.logo {
  opacity: 0.5;
}

@media (min-width: 1024px) {
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>