<template>
  <header class="header">
    <div class="header__left">
      <a-input-search
        placeholder="Search university"
        class="header__search-field"
        @search="onSearch"
      />
    </div>
    <div class="header__right">
      <div class="header__notifications-button">
        <a-badge count="5">
          <a-icon type="bell" class="header__notifications-icon" />
        </a-badge>
      </div>
      <a-dropdown>
        <a-avatar icon="user" size="large" />
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">Profile</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">Settings</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item @click="handleLogout">
            <a href="javascript:;">Log out</a>
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
    onSearch(text) {
      console.log("Searching: " + text);
    },
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
  height: 90px;
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
</style>
