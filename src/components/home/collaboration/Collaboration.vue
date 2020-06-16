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
          UnApp is open for collaboration. Please contact us in social media
        </h1>
        <div class="collaboration__buttons">
          <a-button type="primary" size="large" class="collaboration__button">
            <img
              src="@/assets/images/vk_icon.svg"
              alt="VK icon"
              style="height: 11px"
              class="collaboration__button-icon"
            />
            Vkontakte</a-button
          >
          <a-button
            type="primary"
            class="collaboration__instagram-button collaboration__button"
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

.collaboration__instagram-button {
  margin-left: 15px;
}

@media all and (max-width: 1000px) {
  .collaboration__container {
    max-width: 700px;
  }

  .collaboration__heading {
    font-size: 20px;
  }
}

@media all and (max-width: 800px) {
  .collaboration__container {
    width: 60%;
    flex-direction: column;
    text-align: center;
  }

  .collaboration__image {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .collaboration__text-container {
    width: 80%;
    margin-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .collaboration__heading {
    text-align: center;
  }
}

@media all and (max-width: 540px) {
  .collaboration__container {
    width: 80%;
  }

  .collaboration__buttons {
    flex-direction: column;
    align-items: center;
  }

  .collaboration__button {
    width: 100%;
    margin: 0;
  }

  .collaboration__button:first-child {
    margin-bottom: 20px;
  }
}
</style>
