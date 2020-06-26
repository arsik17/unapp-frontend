<template>
  <router-link
    :to="route"
    class="country-card"
    :style="{ backgroundImage: 'url(' + background + ')' }"
  >
    <h1 class="country-card__title">{{ title }}</h1>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    background: String,
    route: String
  }
};
</script>

<style>
.country-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-size: cover;
}

.country-card__title {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
}
</style>
