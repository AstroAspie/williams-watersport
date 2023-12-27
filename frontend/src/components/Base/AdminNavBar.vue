<template>
  <div class="admin-view">
    <NavBar :links="admin_links" />
    <div class="admin-view-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
  data() {
    return {
      admin_links: [
        { name: 'Home', path: '/' },
        { name: 'Orders', path: '/admin/orders' },
        { name: 'Products', path: '/admin/products' },
        { name: 'Users', path: '/admin/users' }
      ],
    }
  },
  methods: {
    // ...
  }
}
</script>

<style scoped>
</style>