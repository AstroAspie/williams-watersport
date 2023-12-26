<template>
  <div v-for="item in items" :key="item.name" class="catalog">
    <Catalog_Item :product="item" />
  </div>
</template>

<script>
import Catalog_Item from './Catalog_Item.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Catalog',
  components: {
    Catalog_Item,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      products: [],
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.catalog {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
}
</style>