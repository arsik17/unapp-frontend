<template>
  <section class="general">
    <img
      src="@/assets/images/screens.png"
      alt="Application screens"
      class="general__image"
    />
    <div class="general__text-container">
      <h1 class="general__heading">Find university of your dream with UnApp</h1>
      <p class="general__paragraph">
        UnApp provides full-featured university list and advanced search which
        you can use to easily find the perfect university for youself
      </p>
      <a-button type="primary" size="large" class="general__button"
        >I cannot wait to join!</a-button
      >
    </div>
  </section>
</template>

<style scoped>
.general {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.general__image {
  width: 45%;
}

.general__text-container {
  width: 50%;
}

.general__heading {
  margin: 0 0 20px;
  line-height: 1.2;
  color: #1f2933;
  font-size: 40px;
  font-weight: 700;
}

.general__paragraph {
  margin: 0 0 25px;
  color: #555555;
  line-height: 1.3;
  font-size: 18px;
}

.general__button {
  font-weight: 500;
}

@media all and (max-width: 1000px) {
  .general__heading {
    font-size: 30px;
  }

  .general__paragraph {
    font-size: 16px;
  }
}

@media all and (max-width: 800px) {
  .general {
    flex-direction: column;
    text-align: center;
  }

  .general__image {
    width: 50%;
  }

  .general__text-container {
    width: 80%;
    margin-top: 30px;
  }
}

@media all and (max-width: 540px) {
  .general__image {
    width: 70%;
  }
}
</style>
