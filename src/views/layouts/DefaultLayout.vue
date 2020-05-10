<template>
  <div class="default-layout">
    <div class="defaut-layout__nav-wrapper">
      <side-nav class="default-layout__nav" />
    </div>
    <div class="default-layout__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/common/sideNav/SideNav";

export default {
  components: {
    "side-nav": SideNav
  }
};
</script>

<style scoped>
.default-layout {
  display: flex;
  justify-content: space-between;
}

.default-layout__nav-wrapper {
  width: 20%;
  min-height: 100vh;
  border: 1px solid red;
  box-sizing: border-box;
}

.default-layout__nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20vw;
  background-color: #1890ff;
}

.default-layout__content {
  width: 80%;
  box-sizing: border-box;
  border: 1px solid green;
}
</style>
