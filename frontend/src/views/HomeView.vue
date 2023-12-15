
<template>
  <v-main>
    <section class="main">
      <img class='logo' src="/demo-images/williams-water-sports-logo.png" alt="williams water sport">
    </section>
    <v-btn
      color="success"
      class="btn"
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

<style scoped>y
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

.logo {
  position: absolute;
  height: 90vh;
  width: 100%;
  opacity: 0.03;
  z-index: -1;
}

.btn {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translateX(-50%);
}

@media (min-width: 1024px) {
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>