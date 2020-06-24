<template>
  <div class="save-block">
    <div class="save-block__block">
      <div class="save-block__content">
        <h1 class="save-block__title">Save and remove liked universities</h1>
        <span class="save-block__description"
          >Create your own universities list by simply clicking one button. You
          can add up to 20 universities into your list.</span
        >
        <button class="save-block__button">
          Go to this page
        </button>
      </div>
      <div class="save-block__image-box">
        <img
          src="@/assets/images/screens/Save.png"
          alt="Save"
          class="save-block__image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.save-block {
  width: 1022px;
  height: 448px;
  display: flex;
}
.save-block__block {
  width: 701px;
  height: 448px;
  background: #ffffff;
  border: 3px solid rgb(211, 209, 209);
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.save-block__content {
  display: flex;
  flex-direction: column;
}
.save-block__title {
  color: #fb5357;
  width: 475.23px;
  font-size: 32px;
  margin-left: 60px;
}
.save-block__description {
  color: #2e1151;
  width: 475px;
  font-size: 20px;
  margin-left: 60px;
}
.save-block__button {
  font-size: 21px;
  border-radius: 10px;
  width: 230px;
  height: 55.08px;
  background-color: #fb5357;
  color: #ffffff;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 60px;
}
.save-block__image-box {
  width: 489px;
  height: 366px;
  z-index: 2;
  margin-right: 50px;
}
</style>
