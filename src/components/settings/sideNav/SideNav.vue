<template>
  <nav class="settings-nav">
    <router-link to="/settings" exact class="settings-nav__link"
      >User</router-link
    >
    <router-link to="/settings/exams" class="settings-nav__link"
      >Exams</router-link
    >
    <router-link to="/settings/notifications" class="settings-nav__link"
      >Notifications</router-link
    >
  </nav>
</template>

<style scoped>
.settings-nav {
  display: flex;
  flex-direction: column;
}

.settings-nav__link {
  margin-bottom: 15px;
  font-size: 16px;
  color: #555555;
}

.settings-nav__link.router-link-active {
  font-weight: 700;
}
</style>
