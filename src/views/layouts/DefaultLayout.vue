<template>
  <div class="default-layout">
    <div class="defaut-layout__nav-wrapper">
      <side-nav class="default-layout__nav" />
    </div>
    <div class="default-layout__content">
      <c-header class="default-layout__header" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/common/sideNav/SideNav";
import Header from "@/components/common/header/Header";

export default {
  components: {
    "side-nav": SideNav,
    "c-header": Header
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
  box-sizing: border-box;
}

.default-layout__nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20vw;
}

.default-layout__header {
  margin-bottom: 30px;
}

.default-layout__content {
  width: 80%;
  box-sizing: border-box;
}
</style>
