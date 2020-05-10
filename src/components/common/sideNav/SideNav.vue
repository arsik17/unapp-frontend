<template>
  <nav class="nav">
    <div class="logo"></div>
    <div class="nav__links">
      <router-link to="#" class="nav__link">
        <a-icon type="home" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Home</span>
      </router-link>
      <router-link to="#" class="nav__link">
        <a-icon type="bank" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Universities</span>
      </router-link>
      <router-link to="#" class="nav__link">
        <a-icon type="idcard" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Profile</span>
      </router-link>
      <router-link to="#" class="nav__link">
        <a-icon type="copy" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Documents</span>
      </router-link>
      <router-link to="#" class="nav__link">
        <a-icon type="trophy" theme="filled" class="nav__icon" />
        <span class="nav__link-text">Progress</span>
      </router-link>
    </div>
    <footer class="nav__footer">
      <a-icon type="api" theme="filled" class="nav__footer-icon" />
      <span class="nav__footer-text">Exit</span>
    </footer>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0b78dd;
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
.nav__footer:hover {
  background-color: #1574cc;
}

.nav__icon,
.nav__footer-icon {
  margin-right: 20px;
}
</style>
