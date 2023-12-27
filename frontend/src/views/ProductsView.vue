<template>
  <div>
    <div class="page_header">
      <h1>Jet skis</h1>
    </div>
    <div class="page_container">
      <img class="logo" src="/demo-images/williams-water-sports-logo.png" alt="Williams Water Sport" />
      <div class="products_page">
        <div class="catalog">
          <Catalog :items="products.products" />
          <BaseFooter />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Catalog from "@/components/Products/Catalog.vue";
import BaseFooter from "@/components/Base/Footer.vue";

export default {
  name: "ProductsView",
  components: {
    Catalog,
    BaseFooter,
  },
  data() {
    return {
      products: {
        "products": [
          {
            id: 1,
            name: "Single Seater Jet Ski",
            description: "A powerful single-seater Jet Ski for adrenaline junkies.",
            price_per_hour: 50.00,
            max_speed: "96.56 kph",
            capacity: 1,
            available: true,
            image: "/demo-images/jetski_1.jpg"
          },
          {
            id: 2,
            name: "Double Seater Jet Ski",
            description: "A powerful double-seater Jet Ski for adrenaline junkies.",
            price_per_hour: 75.00,
            max_speed: "96.56 kph",
            capacity: 2,
            available: true,
            image: "/demo-images/jetski_2.jpg"
          },
          {
            id: 3,
            name: "Triple Seater Jet Ski",
            description: "A powerful triple-seater Jet Ski for adrenaline junkies.",
            price_per_hour: 100.00,
            max_speed: "96.56 kph",
            capacity: 3,
            available: true,
            image: "/demo-images/jetski_3.jpg"
          }
      ]
    }
  }
},
};
</script>

<style scoped>

.page_header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
}

.page_container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  height: 68vh;
}

.logo {
  position: fixed;
  top: 30px;
  left: 10px;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  z-index: -1;
}

.products_page {
  display: flex;
  margin: 4rem;
  border-radius: 5px;
  width: 100%;
}

@media (min-width: 1024px) {
  .catalog {
    width: 100%;
    max-width: 1024px;
  }
}

@media (min-width: 1440px) {
  .catalog {
    width: 100%;
    max-width: 1440px;
  }
}

@media (min-width: 1920px) {
  .catalog {
    width: 100%;
    max-width: 1920px;
  }
}

@media (min-width: 2560px) {
  .catalog {
    width: 100%;
    max-width: 2560px;
  }
}

@media (min-width: 3840px) {
  .catalog {
    width: 100%;
    max-width: 3840px;
  }
}

@media (min-width: 5120px) {
  .catalog {
    width: 100%;
    max-width: 5120px;
  }
}
</style>
