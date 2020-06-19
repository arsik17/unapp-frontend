<template>
  <hooper class="country-slider" :itemsToShow="3">
    <slide class="country-slider__slide">slide 1</slide>
    <slide class="country-slider__slide">slide 2</slide>
    <slide class="country-slider__slide">slide 3</slide>
    <slide class="country-slider__slide">slide 4</slide>
    <slide class="country-slider__slide">slide 5</slide>
    <slide class="country-slider__slide">slide 6</slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    hooper: Hooper,
    slide: Slide
  }
};
</script>

<style scoped>
.country-slider {
  width: 100%;
}

.country-slider__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
