<template>
  <div class="home">
    <c-header class="header" />
    <intro class="intro" />
    <general class="general" />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";
import Intro from "@/components/home/intro/Intro";
import General from "@/components/home/general/General";

export default {
  components: {
    "c-header": Header,
    intro: Intro,
    general: General
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

.intro {
  margin-bottom: 100px;
}
</style>
