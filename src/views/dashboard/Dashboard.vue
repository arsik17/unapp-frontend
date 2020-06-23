<template>
  <div class="dashboard">
    <h1 class="dashboard__heading">STUDY WHEREVER YOU WANT</h1>
    <country-grid />
    <h2 class="dashboard__heading">Choose country</h2>
    <country-slider class="dashboard__country-slider" />
  </div>
</template>

<script>
import CountrySlider from "@/components/dashboard/countrySlider/CountrySlider";
import CountryGrid from "@/components/dashboard/countryGrid/CountryGrid";

export default {
  components: {
    "country-slider": CountrySlider,
    "country-grid": CountryGrid
  }
};
</script>

<style scoped>
.dashboard {
  width: 90%;
  margin: 20px auto 0;
  padding-bottom: 50px;
}

.dashboard__heading {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  text-align: center;
  color: #3e2179;
  padding-top: 30px;
  font-size: 60px;
}

.dashboard__country-slider {
  height: 300px;
}
</style>
