<template>
  <div>
    <div class="header banner">
      <slot name="header">
      </slot>
    </div>
    <div class="main banner">
      <slot name="content">
      </slot>
    </div>
    <div class="footer banner">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
};
</script>

<style scoped>
.banner {
  padding: 20px;
  margin-bottom: 30px;
}

.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.footer {
  margin-top: 30px;
}
</style>