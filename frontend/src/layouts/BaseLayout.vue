<template>
  <div>
    <div class="top banner">
      <slot name="header">
      </slot>
    </div>
    <div class="content banner">
      <slot name="content">
      </slot>
    </div>
    <div class="lower banner">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  data() {
    return {
      // backgroundImage: "@/assets/williams-water-sports-logo.png",
    };
  },
};
</script>

<style scoped>
.banner {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  left: 1px;
  width: 99vw;
  height: 98vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.top {
  padding: 20px;
  margin: 30px 10px 10px;
  overflow-x: hidden;
}

.content {
  padding: 20px;
  margin: 10px;
  overflow-x: hidden;
  overflow-y: visible;
  height: auto;
}

.lower {
  margin: 10px;
  overflow-x: hidden;
}
</style>