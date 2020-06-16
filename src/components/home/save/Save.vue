<template>
  <section class="save">
    <img
      src="@/assets/images/save_screen.png"
      alt="Application screens"
      class="save__image"
    />
    <div class="save__text-container">
      <h1 class="save__heading">Easily save liked universities</h1>
      <p class="save__paragraph">
        Create your own universities list by simply clicking one button. You can
        add up to 20 universities into your list.
      </p>
    </div>
  </section>
</template>

<style scoped>
.save {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.save__image {
  width: 45%;
}

.save__text-container {
  width: 50%;
}

.save__heading {
  margin: 0 0 20px;
  line-height: 1.2;
  color: #1f2933;
  font-size: 40px;
  font-weight: 700;
}

.save__paragraph {
  margin: 0 0 25px;
  color: #555555;
  line-height: 1.3;
  font-size: 18px;
}
</style>
