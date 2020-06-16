<template>
  <div class="home">
    <c-header class="header" />
    <intro class="intro" />
    <general class="general" />
    <university class="university" />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";
import Intro from "@/components/home/intro/Intro";
import General from "@/components/home/general/General";
import University from "@/components/home/university/University";

export default {
  components: {
    "c-header": Header,
    intro: Intro,
    general: General,
    university: University
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

.intro,
.general,
.university {
  margin-bottom: 100px;
}
</style>
