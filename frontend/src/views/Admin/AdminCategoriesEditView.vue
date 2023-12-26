<template>
  <h1>Testing</h1>
</template>

<script>
export default {
  name: 'AdminCategoriesEditView',
  data() {
    return {
      category: {
        name: '',
        description: '',
        image: '',
      },
    };
  },
  methods: {
    async createCategory() {
      try {
        const response = await this.$store.dispatch('categories/createCategory', this.category);
        this.$router.push({ name: 'AdminCategoriesEditView', params: { id: response.data.id } });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>

</style>