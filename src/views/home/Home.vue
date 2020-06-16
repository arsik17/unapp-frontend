<template>
  <div class="home">
    <c-header />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";

export default {
  components: {
    "c-header": Header
  }
};
</script>

<style scoped>
.home {
  max-width: 980px;
  margin: auto;
}
</style>
