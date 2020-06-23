<template>
  <div class="dashboard">
    <div class="card">
      <div class="card__text">
        <h2 class="card__heading">Find University of your dream</h2>
        <p class="card__paragraph">
          We provide a full-featured platform for management your university
          application process. You can find the best university for yourself in
          one click and save it in account. Let's rocket your future career!
        </p>
        <a-button @click="$router.push('/search')" type="primary" size="large"
          >Find something awesome</a-button
        >
      </div>
      <img src="@/assets/images/swinging_doodle.svg" alt="Swinging doodle" />
    </div>
    <h2 class="dashboard__heading">Choose country</h2>
    <country-slider class="dashboard__country-slider" />
    <h1 class="dashboard__head">STUDY WHEREVER YOU WANT</h1>
    <country-grid />
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

.card {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.card__text {
  width: 70%;
}

.card__heading {
  font-size: 30px;
}

.card__paragraph {
  margin-bottom: 20px;
}

.dashboard__heading {
  margin-top: 50px;
  font-size: 26px;
}

.dashboard__head {
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
