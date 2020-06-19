<template>
  <hooper class="country-slider" :itemsToShow="3">
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">Slide 1</div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">Slide 2</div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">Slide 3</div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">Slide 4</div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">Slide 5</div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">Slide 6</div>
    </slide>
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
  outline: none;
}

.country-slider__slide-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.country-slider__slide {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #3e2179;
  border-radius: 10px;
}
</style>
