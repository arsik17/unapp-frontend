<template>
  <div class="list-block">
    <div class="list-block__block">
      <div class="list-block__image-box">
        <img
          src="@/assets/images/screens/Navigation.png"
          alt="Navigation"
          class="list-block__image"
        />
      </div>
      <div class="list-block__content">
        <h1 class="list-block__title">View the list of universities</h1>
        <span class="list-block__description"
          >Get detailed information about universities including their
          deadlines, requirements and possible scholarships. Use searching tools
          in order to find suitable higher education establishments and save
          them.
        </span>
        <div class="list-block__button-box">
          <a-button
            @click="$router.push('/universities')"
            class="list-block__button"
            type="primary"
            size="large"
          >
            All universities
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list-block {
  width: 880px;
  height: 380px;
  display: flex;
}
.list-block__block {
  width: 650px;
  height: 380px;
  background: #ffffff;
  border: 3px solid rgb(211, 209, 209);
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
  left: 220px;
}
.list-block__content {
  width: 80%;
}
.list-block__title {
  color: #fb5357;
  width: 380px;
  font-size: 32px;
}
.list-block__description {
  color: #2e1151;
  font-size: 18px;
}
.list-block__button-box {
  margin-top: 30px;
}
.list-block__image-box {
  z-index: 2;
  position: relative;
  right: 220px;
  width: 20%;
}
.list-block__image {
  height: 320px;
  margin-right: 50px;
}
</style>
