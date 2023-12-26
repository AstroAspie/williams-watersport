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
    <div class="card flex justify-content-center">
      <Button label="Book Now" style=""/>
      <Button label="Add to Cart" />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  name: "Catalog_Item",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Button,
  },
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
card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  margin: 10px;
  max-width: 80%;
}

card Button {
  margin: 10px;
}

.catalog_item {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 1100px;
}

.catalog_item img {
  width: 100%;
}
</style>