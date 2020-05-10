<template>
  <div class="default-layout">
    <div class="defaut-layout__nav-wrapper">
      <nav class="default-layout__nav nav">
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
    </div>
    <div class="default-layout__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.default-layout {
  display: flex;
  justify-content: space-between;
}

.default-layout__nav-wrapper {
  width: 20%;
  min-height: 100vh;
  border: 1px solid red;
  box-sizing: border-box;
}

.default-layout__nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20vw;
  background-color: #1890ff;
}

.default-layout__content {
  width: 80%;
  box-sizing: border-box;
  border: 1px solid green;
}

.nav {
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
