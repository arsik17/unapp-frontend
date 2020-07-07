<template>
  <hooper class="country-slider" :settings="sliderSettings">
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/MassachusettsInstitute.png"
          alt="Germany"
          class="country-slider__image"
        />
        <div class="country-slider__title-box">
          <h4 class="country-slider__country-name">
            Massachusetts Institute of Technology
          </h4>
        </div>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/SeoulUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <div class="country-slider__title-box">
          <h4 class="country-slider__country-name">
            Seoul National University
          </h4>
        </div>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/HarvardUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <div class="country-slider__title-box">
          <h4 class="country-slider__country-name">Harvard University</h4>
        </div>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/MassachusettsInstitute.png"
          alt="Germany"
          class="country-slider__image"
        />
        <div class="country-slider__title-box">
          <h4 class="country-slider__country-name">
            Massachusetts Institute of Technology
          </h4>
        </div>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/SeoulUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <div class="country-slider__title-box">
          <h4 class="country-slider__country-name">
            Seoul National University
          </h4>
        </div>
      </div>
    </slide>
    <slide class="country-slider__slide-container">
      <div class="country-slider__slide">
        <img
          src="@/assets/images/universities/HarvardUniversity.png"
          alt="Germany"
          class="country-slider__image"
        />
        <div class="country-slider__title-box">
          <h4 class="country-slider__country-name">Harvard University</h4>
        </div>
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
  },
  data() {
    return {
      sliderSettings: {
        itemsToShow: 1,
        trimWhiteSpace: true,
        breakpoints: {
          850: {
            itemsToShow: 2
          },
          1200: {
            itemsToShow: 3
          }
        }
      }
    };
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #3e2179;
}

.country-slider__image {
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 65%;
}

.country-slider__country-name {
  font-size: 20px;
  color: #ffffff;
  text-align: center;
}

.country-slider__title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  width: 100%;
}
</style>
