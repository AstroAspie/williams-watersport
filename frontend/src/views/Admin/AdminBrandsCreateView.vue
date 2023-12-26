<template>
  <div>
    <h1>Admin Brands</h1>
  </div>
</template>

<script>
export default {
  name: 'AdminBrandsCreateView',
  data() {
    return {
      brand: {
        name: '',
        description: '',
        image: '',
      },
    };
  },
  methods: {
    async createBrand() {
      try {
        const response = await this.$store.dispatch('brands/createBrand', this.brand);
        this.$router.push({ name: 'AdminBrandsEditView', params: { id: response.data.id } });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
</style>