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
  width: 880px;
  height: 380px;
  display: flex;
}
.save-block__block {
  width: 600px;
  height: 380px;
  background: #ffffff;
  border: 3px solid rgb(211, 209, 209);
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.save-block__content {
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  width: 80%;
}
.save-block__title {
  color: #fb5357;
  font-size: 32px;
}
.save-block__description {
  color: #2e1151;
  font-size: 18px;
}
.save-block__button {
  font-size: 21px;
  border-radius: 10px;
  border: black;
  width: 230px;
  height: 55px;
  background-color: #fb5357;
  color: #ffffff;
  font-weight: 600;
  margin-top: 30px;
}
.save-block__image-box {
  z-index: 2;
  width: 20%;
  position: relative;
  left: 20px;
}
.save-block__image {
  height: 320px;
}
</style>
