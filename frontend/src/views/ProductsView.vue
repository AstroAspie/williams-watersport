<template>
  <v-card>
    <v-card-title>Products</v-card-title>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
          {{ product.name }}
        </router-link>
      </li>
    </ul>
  </v-card>
</template>


<script>
export default {
  name: "ProductsView",
  data() {
    return {
      products: {
        "products": [
          {
            "id": 1,
            "name": "Single Seater Jet Ski",
            "description": "A powerful single-seater Jet Ski for adrenaline junkies.",
            "price_per_hour": 50.00,
            "max_speed": "96.56 kph",
            "capacity": 1,
            "available": true,
            "image": "/demo-images/jet-ski-1.jpg"
          },
          {
            "id": 2,
            "name": "Double Seater Jet Ski",
            "description": "A two-seater Jet Ski for couples or friends.",
            "price_per_hour": 75.00,
            "max_speed": "88.51 kph",
            "capacity": 2,
            "available": true,
            "image": "/demo-images/jet-ski-2.jpg"
          },
          {
            "id": 3,
            "name": "Family Jet Ski",
            "description": "A family-friendly Jet Ski that can accommodate up to 4 riders.",
            "price_per_hour": 100.00,
            "max_speed": "80.47 kph",
            "capacity": 4,
            "available": false,
            "image": "/demo-images/jet-ski-3.jpg"
          },
          {
            "id": 4,
            "name": "Racing Jet Ski",
            "description": "A high-performance Jet Ski designed for racing enthusiasts.",
            "price_per_hour": 120.00,
            "max_speed": "112.65 kph",
            "capacity": 1,
            "available": true,
            "image": "/demo-images/jet-ski-4.jpg"
          },
          {
            "id": 5,
            "name": "Luxury Jet Ski",
            "description": "A luxurious Jet Ski for those who want to ride in style.",
            "price_per_hour": 150.00,
            "max_speed": "80.47 kph",
            "capacity": 1,
            "available": true,
            "image": "/demo-images/jet-ski-5.jpg"
          }
        ]
      }
    }
  }
};
</script>

<style scoped>

</style>
