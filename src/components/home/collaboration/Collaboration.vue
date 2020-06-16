<template>
  <section class="collaboration">
    <div class="collaboration__container">
      <img
        src="@/assets/images/castle_image.png"
        alt="Application screens"
        class="collaboration__image"
      />
      <div class="collaboration__text-container">
        <h1 class="collaboration__heading">
          UnApp is open for collaboration. Please contact us in social media ;)
        </h1>
        <div class="collaboration__buttons">
          <a-button type="primary" size="large" class="collaboration__button">
            <img
              src="@/assets/images/vk_icon.svg"
              alt="VK icon"
              class="collaboration__button-icon"
            />
            Vkontakte</a-button
          >
          <a-button
            type="primary"
            class="collaboration__secondary-button collaboration__button"
            size="large"
          >
            <img
              src="@/assets/images/instagram_icon.svg"
              alt="Instagram icon"
              class="collaboration__button-icon"
            />
            Instagram</a-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collaboration {
  width: 100%;
  padding: 70px 0;
  background-color: #3e2179;
}

.collaboration__container {
  max-width: 980px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
}

.collaboration__image {
  width: 45%;
}

.collaboration__text-container {
  width: 50%;
}

.collaboration__heading {
  margin: 0 0 20px;
  line-height: 1.2;
  color: #1f2933;
  font-size: 24px;
  font-weight: 500;
}

.collaboration__buttons {
  display: flex;
}

.collaboration__button {
  display: flex;
  align-items: center;
}

.collaboration__button-icon {
  height: 15px;
  margin-right: 5px;
}

.collaboration__secondary-button {
  margin-left: 15px;
  background-color: #fac738;
  border-color: #fac738;
}
</style>
