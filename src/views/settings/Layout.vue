<template>
  <div class="settings">
    <side-nav class="settings__side-nav" />
    <router-view class="settings__content" />
  </div>
</template>

<script>
import SideNav from "@/components/settings/sideNav/SideNav";

export default {
  components: {
    "side-nav": SideNav
  }
};
</script>

<style scoped>
.settings {
  width: 90%;
  margin: 30px auto 50px;
  display: flex;
}

.settings__side-nav {
  width: 25%;
  box-sizing: border-box;
}

.settings__content {
  width: 75%;
  box-sizing: border-box;
}
</style>
