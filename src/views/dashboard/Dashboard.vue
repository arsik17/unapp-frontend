<template>
  <div class="dashboard">
    <action-card class="dashboard__action-card" />
    <section class="dashboard__section">
      <h1 class="dashboard__heading">Study wherever you want</h1>
      <country-grid class="dashboard__country-grid" />
    </section>
    <section class="dashboard__section section__block">
      <profile-block class="dashboard__hint-block" />
      <list-block class="dashboard__hint-block" />
      <save-block class="dashboard__hint-block" />
    </section>
    <section class="dashboard__section">
      <h2 class="dashboard__heading">Most viewed universities</h2>
      <country-slider class="dashboard__country-slider" />
    </section>
  </div>
</template>

<script>
import ActionCard from "@/components/dashboard/actionCard/ActionCard";
import CountrySlider from "@/components/dashboard/countrySlider/CountrySlider";
import CountryGrid from "@/components/dashboard/countryGrid/CountryGrid";
import SaveBlock from "@/components/dashboard/saveBlock/SaveBlock";
import ListBlock from "@/components/dashboard/listBlock/ListBlock";
import ProfileBlock from "@/components/dashboard/profileBlock/ProfileBlock";

export default {
  components: {
    "action-card": ActionCard,
    "country-slider": CountrySlider,
    "country-grid": CountryGrid,
    "save-block": SaveBlock,
    "list-block": ListBlock,
    "profile-block": ProfileBlock
  }
};
</script>

<style scoped>
.dashboard {
  width: 80%;
  margin: 40px auto 0;
  padding-bottom: 50px;
}

.dashboard__action-card {
  margin-bottom: 30px;
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

.section__block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard__hint-block {
  margin-top: 100px;
}

@media all and (max-width: 1100px) {
  .dashboard__heading {
    font-size: 35px;
  }

  .dashboard__hint-block {
    margin-top: 50px;
  }
}

@media all and (max-width: 850px) {
  .section__block {
    display: none;
  }
}
</style>
