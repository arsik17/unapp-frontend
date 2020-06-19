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
      <router-link to="/dashboard" exact class="nav__link">
        <a-icon type="home" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Dashboard</span>
      </router-link>
      <router-link to="/universities" class="nav__link">
        <a-icon type="bank" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Universities</span>
      </router-link>
      <router-link to="/saved-universities" class="nav__link">
        <a-icon type="heart" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Saved</span>
      </router-link>
      <router-link to="/search" class="nav__link">
        <a-icon type="search" theme="outlined" class="nav__icon" />
        <span class="nav__link-text">Search</span>
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
  background-color: #3e2179;
}

.logo {
  width: 45%;
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
  font-size: 19px;
  color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  transition: 300ms;
}

.nav__link:hover,
.nav__footer:hover,
.nav__link.router-link-active {
  background-color: #23104d;
}

.nav__icon,
.nav__footer-icon {
  margin-right: 20px;
}
</style>
