<template>
  <div class="dashboard">
    <div class="card">
      <div class="card__text">
        <h2 class="card__heading">Find University of your dream</h2>
        <p class="card__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident molestias nam quos. Consectetur impedit eaque explicabo odit
          sit ullam.
        </p>
        <a-button type="primary" size="large">Find something awesome</a-button>
      </div>
      <img src="@/assets/images/swinging_doodle.svg" alt="Swinging doodle" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dashboard {
  width: 90%;
  margin: 20px auto 0;
}

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
