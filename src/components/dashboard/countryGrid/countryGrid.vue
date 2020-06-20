<template>
  <div class="container">
    <div class="country-grid">
      <div class="country-grid__row">
        <div class="country-grid__country-card">
          <country-card
            title="Kazakhstan"
            :background="kazakhstanImage"
            route="/search"
          />
        </div>
        <div class="country-grid__country-card">
          <country-card
            title="Russia"
            :background="russiaImage"
            route="/search"
          />
        </div>
        <div class="country-grid__country-card">
          <country-card title="USA" :background="usaImage" route="/search" />
        </div>
      </div>
      <div class="country-grid__row">
        <div class="country-grid__country-card">
          <country-card
            title="Canada"
            :background="canadaImage"
            route="/search"
          />
        </div>
        <div class="country-grid__country-card">
          <country-card
            title="Austria"
            :background="austriaImage"
            route="/search"
          />
        </div>
        <div class="country-grid__country-card">
          <country-card
            title="Czech"
            :background="czechImage"
            route="/search"
          />
        </div>
      </div>
      <div class="country-grid__row">
        <div class="country-grid__country-card">
          <country-card
            title="Germany"
            :background="germanyImage"
            route="/search"
          />
        </div>
        <div class="country-grid__country-card">
          <country-card
            title="Italy"
            :background="italyImage"
            route="/search"
          />
        </div>
        <div class="country-grid__country-card">
          <country-card
            title="Spain"
            :background="spainImage"
            route="/search"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryCard from "@/components/dashboard/countryCard/countryCard";
import kazakhstanImage from "@/assets/images/countries/Kazakhstan.png";
import russiaImage from "@/assets/images/countries/Russia.png";
import usaImage from "@/assets/images/countries/Usa.png";
import canadaImage from "@/assets/images/countries/Canada.png";
import austriaImage from "@/assets/images/countries/Austria.png";
import czechImage from "@/assets/images/countries/Czech.png";
import germanyImage from "@/assets/images/countries/Germany.png";
import italyImage from "@/assets/images/countries/Italy.png";
import spainImage from "@/assets/images/countries/Spain.png";

export default {
  data() {
    return {
      kazakhstanImage,
      russiaImage,
      usaImage,
      canadaImage,
      austriaImage,
      czechImage,
      germanyImage,
      italyImage,
      spainImage
    };
  },
  components: {
    "country-card": CountryCard
  }
};
</script>

<style>
.container {
  padding-right: 30px;
  display: flex;
  justify-content: center;
}

.country-grid {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.country-grid__row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 30px;
}

.country-grid__country-card {
  padding-left: 30px;
}
</style>
