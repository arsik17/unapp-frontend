<template>
  <div class="useful-links">
    <side-nav class="useful-links__side-nav" />
    <router-view class="useful-links__content" />
  </div>
</template>

<script>
import SideNav from "@/components/usefulLinks/sideNav/SideNav";
export default {
  components: {
    "side-nav": SideNav
  }
};
</script>

<style scoped>
.useful-links {
  width: 90%;
  margin: 30px auto 50px;
  display: flex;
}
.useful-links__side-nav {
  width: 25%;
  box-sizing: border-box;
}
.useful-links__content {
  width: 75%;
  box-sizing: border-box;
}
</style>
