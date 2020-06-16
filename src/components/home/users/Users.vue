<template>
  <section class="users">
    <img
      src="@/assets/images/users_image.png"
      alt="Users image"
      class="users__image"
    />
    <div class="users__text-container">
      <h1 class="users__heading">We love our users</h1>
      <p class="users__paragraph">
        We want to make everything ideal for our users. If you have an idea how
        to make UnApp better you are welcome to write us on social media
      </p>
      <div class="users__buttons">
        <a-button type="primary" size="large" class="users__button">
          <img
            src="@/assets/images/vk_icon.svg"
            alt="VK icon"
            style="height: 11px"
            class="users__button-icon"
          />
          Vkontakte</a-button
        >
        <a-button
          type="primary"
          class="users__instagram-button users__button"
          size="large"
        >
          <img
            src="@/assets/images/instagram_icon.svg"
            alt="Instagram icon"
            class="users__button-icon"
          />
          Instagram</a-button
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.users {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.users__image {
  width: 45%;
}

.users__text-container {
  width: 50%;
}

.users__heading {
  margin: 0 0 20px;
  line-height: 1.2;
  color: #1f2933;
  font-size: 40px;
  font-weight: 700;
}

.users__paragraph {
  margin: 0 0 25px;
  color: #555555;
  line-height: 1.3;
  font-size: 18px;
}

.users__buttons {
  display: flex;
}

.users__button {
  display: flex;
  align-items: center;
}

.users__button-icon {
  height: 15px;
  margin-right: 5px;
}

.users__instagram-button {
  margin-left: 15px;
}

@media all and (max-width: 1000px) {
  .users__heading {
    font-size: 30px;
  }

  .users__paragraph {
    font-size: 16px;
  }
}

@media all and (max-width: 800px) {
  .users {
    flex-direction: column;
    text-align: center;
  }

  .users__image {
    width: 50%;
  }

  .users__text-container {
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media all and (max-width: 540px) {
  .users__image {
    width: 70%;
  }
}
</style>
