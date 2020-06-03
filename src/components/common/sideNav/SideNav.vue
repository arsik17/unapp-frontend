<template>
  <nav class="nav">
    <h2 class="nav__logo logo">
      <img
        class="logo__image"
        src="@/assets/images/logo_light.svg"
        alt="Logo"
      />
    </h2>
    <div class="nav__links">
      <router-link to="/" exact class="nav__link">
        <a-icon type="home" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Home</span>
      </router-link>
      <router-link to="/universities" class="nav__link">
        <a-icon type="bank" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Universities</span>
      </router-link>
      <router-link to="/profile" class="nav__link">
        <a-icon type="idcard" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Profile</span>
      </router-link>
    </div>
    <footer class="nav__footer"></footer>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 7vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0b78dd;
}

.logo {
  width: 55%;
}

.logo__image {
  width: 100%;
}

.nav__link {
  margin-bottom: 5px;
}

.nav__link,
.nav__footer {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  transition: 300ms;
}

.nav__link:hover,
.nav__footer:hover,
.nav__link.router-link-active {
  background-color: #1367b6;
}

.nav__icon,
.nav__footer-icon {
  margin-right: 20px;
}
</style>
