<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__text">
        <router-link to="/">
          <img
            src="@/assets/images/logo_light.svg"
            alt="UnApp Logo"
            class="footer__logo"
          />
          <p class="footer__moto">Find university of your dream</p>
        </router-link>
        <div class="footer__social-media social-media">
          <p class="social-media__text">Subscribe us on social media</p>
          <div class="social-media__icons">
            <router-link to="https://www.instagram.com/unapp_study/">
              <img
                src="@/assets/images/instagram_icon.svg"
                alt="Instagram logo"
                class="social-media__icon"
            /></router-link>
            <router-link to="https://vk.com/unapp_study">
              <img
                src="@/assets/images/vk_icon.svg"
                style="height: 20px"
                alt="Vkontakte logo"
                class="social-media__icon"
            /></router-link>
            <router-link to="https://www.linkedin.com/company/54283889/">
              <img
                src="@/assets/images/linkedin_icon.svg"
                alt="LinkedIn logo"
                class="social-media__icon"
            /></router-link>
          </div>
        </div>
        <p class="social-media__copyright">&copy; UnApp</p>
      </div>
      <img
        src="@/assets/images/sitting_doodle.svg"
        alt="Sitting doodle"
        class=""
      />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #3e2179;
}

.footer__container {
  width: 980px;
  margin: auto;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__logo {
  height: 41px;
}

.footer__text {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
}

.social-media__text {
  font-size: 16px;
}

.footer__moto {
  margin-top: 14px;
  font-size: 18px;
  color: #ffffff;
}

.social-media__icons {
  display: flex;
  align-items: flex-end;
}

.social-media__icon {
  height: 25px;
  margin-right: 20px;
}

.social-media__copyright {
  font-size: 18px;
}
</style>
