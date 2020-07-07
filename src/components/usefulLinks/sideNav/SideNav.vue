<template>
  <nav class="useful-links-nav">
    <router-link to="/useful-links/ielts" exact class="useful-links-nav__link"
      >IELTS</router-link
    >
    <router-link to="/useful-links/toefl" exact class="useful-links-nav__link"
      >TOEFL</router-link
    >
    <router-link
      to="/useful-links/sat-reasoning"
      exact
      class="useful-links-nav__link"
      >SAT(Reasoning)</router-link
    >
    <router-link
      to="/useful-links/sat-subject"
      exact
      class="useful-links-nav__link"
      >SAT(Subject)</router-link
    >
    <router-link
      to="/useful-links/motiv-letter"
      exact
      class="useful-links-nav__link"
      >Motivational letter</router-link
    >
  </nav>
</template>

<style scoped>
.useful-links-nav {
  display: flex;
  flex-direction: column;
}
.useful-links-nav__link {
  margin-bottom: 15px;
  padding: 5px 10px;
  font-size: 16px;
  color: #555555;
  border-left: 2px solid transparent;
}
.useful-links-nav__link.router-link-active {
  font-weight: 700;
  border-left-color: #3e2179;
}
</style>
