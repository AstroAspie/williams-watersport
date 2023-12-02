<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Catalog</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Catalog',
  data() {
    return {
      loading: false,
      products: [],
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.loading = true;
      this.$axios.get('/api/products')
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
}
</script>

<style scoped></style>