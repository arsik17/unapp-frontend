<template>
  <section class="intro">
    <div class="intro__text-container">
      <h1 class="intro__heading">Looking for the university?</h1>
      <p class="intro__paragraph">
        Tired of looking for the perfect university? Hate universities websites
        with scattered information?
        <span class="intro__bold-text">UnApp can help you!</span>
      </p>
      <a-button type="primary" size="large" class="intro__button"
        >Find something awesome</a-button
      >
      <p class="intro__account-text">
        Do not have account?
        <router-link to="/auth/register">Sign Up</router-link>
      </p>
    </div>
    <img
      src="@/assets/images/discussion_image.png"
      alt="Discussion image"
      class="intro__image"
    />
  </section>
</template>

<style scoped>
.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.intro__heading {
  margin: 0 0 20px;
  line-height: 1.2;
  color: #1f2933;
  font-size: 50px;
  font-weight: 700;
}

.intro__paragraph {
  margin: 0 0 25px;
  color: #555555;
  line-height: 1.3;
  font-size: 18px;
}

.intro__button {
  font-weight: 500;
}

.intro__bold-text {
  font-weight: 700;
}

.intro__account-text {
  margin-top: 20px;
  font-size: 16px;
  color: #555555;
}
</style>
