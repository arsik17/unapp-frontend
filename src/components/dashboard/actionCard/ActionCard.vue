<template>
  <div class="card">
    <div class="card__text">
      <h2 class="card__heading">Your opinion matters</h2>
      <p class="card__paragraph">
        This is BETA version of the application and we need your feedback to
        make it better. Please right several sentences about what you disliked
        and liked about UnApp.
      </p>
      <a-button @click="$router.push('/search')" type="primary" size="large"
        >Anonymous feedback</a-button
      >
    </div>
    <img src="@/assets/images/swinging_doodle.svg" alt="Swinging doodle" />
  </div>
</template>

<style scoped>
.card {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.card__text {
  width: 70%;
}

.card__heading {
  font-size: 30px;
}

.card__paragraph {
  margin-bottom: 20px;
}
</style>
