<template>
  <div class="home">
    <c-header class="header" />
    <intro class="intro" />
    <general class="general" />
    <university class="university" />
    <save class="save" />
    <collaboration class="collaboration" />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";
import Intro from "@/components/home/intro/Intro";
import General from "@/components/home/general/General";
import University from "@/components/home/university/University";
import Save from "@/components/home/save/Save";
import Collaboration from "@/components/home/collaboration/Collaboration";

export default {
  components: {
    "c-header": Header,
    intro: Intro,
    general: General,
    university: University,
    save: Save,
    collaboration: Collaboration
  }
};
</script>

<style scoped>
.header {
  max-width: 980px;
  margin: auto;
  margin-bottom: 70px;
}

.intro,
.general,
.university,
.save {
  max-width: 980px;
  margin: auto;
  margin-bottom: 100px;
}
</style>
