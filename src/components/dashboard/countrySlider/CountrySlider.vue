<template>
  <hooper class="country-slider" :itemsToShow="3" :trimWhiteSpace="true">
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/MassachusettsInstitute.png"
          alt="Germany"
          class="country-slider__image"
        />
        <h4 class="country-slider__country-name">
          Massachusetts Institute of Technology
        </h4>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/SeoulUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <h4 class="country-slider__country-name">Seoul National University</h4>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/HarvardUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <h4 class="country-slider__country-name">Harvard University</h4>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/MassachusettsInstitute.png"
          alt="Germany"
          class="country-slider__image"
        />
        <h4 class="country-slider__country-name">
          Massachusetts Institute of Technology
        </h4>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/SeoulUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <h4 class="country-slider__country-name">Seoul National University</h4>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/HarvardUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <h4 class="country-slider__country-name">Harvard University</h4>
      </div>
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
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #2e1151;
}

.country-slider__image {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.country-slider__country-name {
  font-size: 20px;
  color: #ffffff;
}
</style>
