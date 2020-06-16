<template>
  <div class="home">
    <c-header class="header" />
    <intro class="intro" />
    <general class="general" />
    <university class="university" />
    <save class="save" />
    <collaboration class="collaboration" />
    <users class="users" />
    <c-footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/home/header/Header";
import Intro from "@/components/home/intro/Intro";
import General from "@/components/home/general/General";
import University from "@/components/home/university/University";
import Save from "@/components/home/save/Save";
import Collaboration from "@/components/home/collaboration/Collaboration";
import Users from "@/components/home/users/Users";
import Footer from "@/components/home/footer/Footer";

export default {
  components: {
    "c-header": Header,
    intro: Intro,
    general: General,
    university: University,
    save: Save,
    collaboration: Collaboration,
    users: Users,
    "c-footer": Footer
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
.save,
.users {
  max-width: 980px;
  margin: auto;
  margin-bottom: 100px;
}

.collaboration {
  margin-bottom: 90px;
}
</style>
