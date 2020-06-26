<template>
  <div class="country-grid">
    <country-card
      class="country-grid__card"
      title="Kazakhstan"
      :background="kazakhstanImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Russia"
      :background="russiaImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="USA"
      :background="usaImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Canada"
      :background="canadaImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Austria"
      :background="austriaImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Czech"
      :background="czechImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Germany"
      :background="germanyImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Italy"
      :background="italyImage"
      route="/search"
    />
    <country-card
      class="country-grid__card"
      title="Spain"
      :background="spainImage"
      route="/search"
    />
  </div>
</template>

<script>
import CountryCard from "@/components/dashboard/countryCard/CountryCard";
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
.country-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.country-grid__card {
  height: 100%;
  width: 100%;
}
</style>
