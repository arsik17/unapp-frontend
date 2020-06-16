<template>
  <section class="university">
    <div class="university__text-container">
      <h1 class="university__heading">Simple university info</h1>
      <p class="university__paragraph">
        Get access to all needed information about university in one click. No
        need to surf the internet looking for deadlines.
      </p>
      <a-button
        @click="$router.push('/auth/login')"
        type="primary"
        size="large"
        class="university__button"
        >Search university</a-button
      >
    </div>
    <img
      src="@/assets/images/university_screen.png"
      alt="Application screens"
      class="university__image"
    />
  </section>
</template>

<style scoped>
.university {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.university__image {
  width: 45%;
}

.university__text-container {
  width: 50%;
}

.university__heading {
  margin: 0 0 20px;
  line-height: 1.2;
  color: #1f2933;
  font-size: 40px;
  font-weight: 700;
}

.university__paragraph {
  margin: 0 0 25px;
  color: #555555;
  line-height: 1.3;
  font-size: 18px;
}

.university__button {
  font-weight: 500;
}

@media all and (max-width: 1000px) {
  .university__heading {
    font-size: 30px;
  }

  .university__paragraph {
    font-size: 16px;
  }
}

@media all and (max-width: 800px) {
  .university {
    flex-direction: column-reverse;
    text-align: center;
  }

  .university__image {
    width: 50%;
  }

  .university__text-container {
    width: 80%;
    margin-top: 30px;
  }
}

@media all and (max-width: 540px) {
  .university__image {
    width: 70%;
  }
}
</style>
