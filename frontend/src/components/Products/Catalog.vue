<template>
  <section class="catalog">
    <div v-for="item in items" :key="item.name">
      <Catalog_Item :product="item" />
    </div>
  </section>
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1200px;
}
</style>