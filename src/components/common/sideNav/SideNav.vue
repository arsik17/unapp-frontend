<template>
  <nav class="nav" :class="{ nav_closed: !isOpen }">
    <h2 class="nav__top">
      <router-link class="logo nav__logo" to="/">
        <img
          class="logo__image"
          src="@/assets/images/logo_light.svg"
          alt="Logo"
        />
      </router-link>
      <a-icon
        @click="isOpen = true"
        type="menu"
        class="nav__menu-icon nav__menu-icon_open"
      />
      <a-icon
        @click="isOpen = false"
        type="menu-fold"
        class="nav__menu-icon nav__menu-icon_close"
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
export default {
  data() {
    return {
      isOpen: true
    };
  }
};
</script>

<style scoped>
.nav {
  min-width: 250px;
  padding: 7vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #3e2179;
  transition: 200ms;
  overflow: hidden;
  z-index: 10;
}

.nav__top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__logo {
  display: block;
  width: 45%;
}

.nav__menu-icon {
  display: none;
  padding: 20px 0;
  font-size: 22px;
  color: #ffffff;
  transition: 300ms;
  cursor: pointer;
}

.nav__menu-icon:hover {
  background-color: #fac738;
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

@media all and (max-width: 1250px) {
  nav.nav {
    width: 250px;
    min-width: auto;
    padding: 0;
  }

  .nav__top {
    justify-content: space-between;
  }

  .nav__logo {
    margin-left: 25px;
  }

  .nav_closed > .nav__logo {
    display: none;
  }

  .nav__menu-icon {
    display: block;
  }

  .nav.nav_closed {
    width: 8vw;
  }

  .nav_closed > .nav__links {
    display: none;
  }

  .nav_closed .nav__logo {
    display: none;
  }

  .nav__menu-icon_open {
    width: 100%;
    display: none;
  }

  .nav__menu-icon_close {
    padding: 25px;
  }

  .nav_closed .nav__menu-icon_open {
    display: block;
  }

  .nav_closed .nav__menu-icon_close {
    display: none;
  }
}
</style>
