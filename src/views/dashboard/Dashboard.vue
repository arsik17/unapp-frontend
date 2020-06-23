<template>
  <div class="dashboard">
    <section class="dashboard__section">
      <h1 class="dashboard__heading">Study wherever you want</h1>
      <country-grid class="dashboard__country-grid" />
    </section>
    <section class="dashboard__section">
      <h2 class="dashboard__heading">Choose country</h2>
      <country-slider class="dashboard__country-slider" />
    </section>
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
  width: 80%;
  margin: 20px auto 0;
  padding-bottom: 50px;
}

.dashboard__section {
  margin-bottom: 50px;
}

.dashboard__heading {
  margin-bottom: 40px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #3e2179;
  padding-top: 30px;
  font-size: 45px;
}

.dashboard__country-grid {
  margin: auto;
}

.dashboard__country-slider {
  height: 300px;
  margin: auto;
}
</style>
