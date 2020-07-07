<template>
  <header class="header">
    <div class="header__left">
      <a-popover placement="bottom" title="We are in a BETA stage">
        <template slot="content">
          <p class="header__stage-popover-text">
            Do not be upset if something does not work properly. We are already
            fixing it!
          </p>
        </template>
        <a-tag color="#FAC738">BETA 0.1.0</a-tag>
      </a-popover>
    </div>
    <div class="header__right">
      <div class="header__notifications-button">
        <a-dropdown>
          <a-badge count="0">
            <a-icon type="bell" class="header__notifications-icon" />
          </a-badge>
          <a-menu slot="overlay">
            <a-menu-item>
              <span>Notification are not implemented yet</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <a-dropdown>
        <a-avatar icon="user" size="large" />
        <a-menu slot="overlay">
          <a-menu-item>
            <router-link to="/useful-links/ielts">Useful Links</router-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item>
            <router-link to="/profile">Profile</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/settings">Settings</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/feedback">Feedback</router-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item @click="handleLogout">
            <span>Log out</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    onSearch() {},
    handleLogout() {
      this.logout();
      this.$router.push("/auth/login");
    },
    ...mapMutations(["logout"])
  }
};
</script>

<style scoped>
.header {
  height: 10vh;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__left,
.header__right {
  display: flex;
  align-items: center;
}

.header__search {
  width: 200px;
}

.header__notifications-button {
  margin-right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.header__notifications-icon {
  font-size: 24px;
}

.header__stage-popover-text {
  max-width: 300px;
}
</style>
