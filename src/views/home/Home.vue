<template>
  <div class="home">
    <c-header class="header" />
    <intro class="intro" />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";
import Intro from "@/components/home/intro/Intro";

export default {
  components: {
    "c-header": Header,
    intro: Intro
  }
};
</script>

<style scoped>
.home {
  max-width: 980px;
  margin: auto;
}

.header {
  margin-bottom: 70px;
}
</style>
