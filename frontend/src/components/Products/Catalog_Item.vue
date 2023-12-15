<template>
  <div class="catalog_item">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" alt="product image">
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price_per_hour }} per hour</p>
    <p>Max Speed: {{ product.max_speed }}</p>
    <p>Capacity: {{ product.capacity }}</p>
    <p v-if="product.available">Available</p>
    <p v-else>Not Available</p>
  </div>
</template>

<script>
export default {
  name: "Catalog_Item",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped>
.catalog_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.catalog_item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.catalog_item h2 {
  margin: 0;
}

.catalog_item p {
  margin: 0;
}

@media (min-width: 1024px) {
  .catalog_item {
    width: 100%;
    max-width: 1024px;
  }
}

@media (min-width: 1440px) {
  .catalog_item {
    width: 100%;
    max-width: 1440px;
  }
}

@media (min-width: 2560px) {
  .catalog_item {
    width: 100%;
    max-width: 2560px;
  }
}

@media (min-width: 3840px) {
  .catalog_item {
    width: 100%;
    max-width: 3840px;
  }
}

@media (min-width: 5120px) {
  .catalog_item {
    width: 100%;
    max-width: 5120px;
  }
}
</style>