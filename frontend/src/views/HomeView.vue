<template>
  
</template>


<script>
export default {
  name: 'HomeView',
  data() {
    return {
       user: null,
    }
  },
  mounted() {
    this.user = this.getUser();
  },
  methods: {
    getUser() {
      return {
        name: 'John Doe',
        email: 'test@john.com',
        active_rentals: {}
      };
    }
  }
}
</script> 

<style scoped>y
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

.logo {
  position: absolute;
  height: 90vh;
  width: 100%;
  opacity: 0.03;
  z-index: -1;
}

.btn {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translateX(-50%);
}

@media (min-width: 1024px) {
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>