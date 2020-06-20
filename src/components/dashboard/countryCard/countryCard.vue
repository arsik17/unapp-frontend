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
  width: 365px;
  height: 262px;
  display: table;
  border-radius: 10px;
  background-image: url("/assets/images/countries/Kazakhstan.png");
  background-size: cover;
}

.country-card__title {
  display: table-cell;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: white;
  text-align: center;
  vertical-align: middle;
}
</style>
