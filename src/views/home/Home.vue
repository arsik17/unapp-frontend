<template>
  <div class="home">
    <c-header class="header" />
    <intro class="intro" />
    <general class="general" />
    <university class="university" />
    <save class="save" />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";
import Intro from "@/components/home/intro/Intro";
import General from "@/components/home/general/General";
import University from "@/components/home/university/University";
import Save from "@/components/home/save/Save";

export default {
  components: {
    "c-header": Header,
    intro: Intro,
    general: General,
    university: University,
    save: Save
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
.university,
.save {
  margin-bottom: 100px;
}
</style>
