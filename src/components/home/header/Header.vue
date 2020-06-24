<template>
  <header class="header">
    <router-link to="/" class="header__logo-container">
      <img
        src="@/assets/images/logo_dark.svg"
        alt="UnApp Logo"
        class="header__logo"
      />
    </router-link>
    <router-link
      v-if="isLoggedIn"
      to="/dashboard"
      class="header__avatar-container"
    >
      <span>{{ currentUser.firstName }}</span>
      <a-avatar icon="user" size="large" class="header__avatar" />
    </router-link>
    <div v-else class="header__button-container">
      <router-link to="/auth/register" class="header__sign-up"
        >Sign Up</router-link
      >
      <a-button
        @click="$router.push('/auth/login')"
        type="primary"
        class="header__log-in"
        >Log In</a-button
      >
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["isLoggedIn", "currentUser"])
};
</script>

<style scoped>
.header {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  height: 41px;
}

.header__avatar-container {
  display: flex;
  align-items: center;
}

.header__avatar {
  margin-left: 15px;
}

.header__sign-up {
  margin-right: 49px;
  color: #555555;
  font-weight: 500;
}

.header__log-in {
  font-weight: 500;
}

@media all and (max-width: 800px) {
  .header {
    width: 85%;
  }

  .header__sign-up {
    margin-right: 10px;
  }
}
</style>
