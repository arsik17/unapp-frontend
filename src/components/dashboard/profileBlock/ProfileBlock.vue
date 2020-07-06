<template>
  <div class="profile-block">
    <div class="profile-block__block">
      <div class="profile-block__content">
        <h1 class="profile-block__title">Edit your profile</h1>
        <span class="profile-block__description"
          >Get detailed information about universities including their
          deadlines, requirements and possible scholarships. Use searching tools
          in order to find suitable higher education establishments and save
          them.
        </span>
        <div class="profile-block__button-box"></div>
        <a-button
          @click="$router.push('/profile')"
          class="profile-block__button"
          type="primary"
          size="large"
        >
          View profile
        </a-button>
      </div>
      <div class="profile-block__image-box">
        <img
          src="@/assets/images/screens/Profile.png"
          alt="Save"
          class="profile-block__image"
        />
      </div>
    </div>
  </div>
</template>

<style>
.profile-block {
  width: 100%;
  height: 380px;
}

.profile-block__block {
  width: 70%;
  height: 380px;
  background: #ffffff;
  border: 3px solid rgb(211, 209, 209);
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.profile-block__content {
  margin-left: 60px;
  width: 80%;
}

.profile-block__title {
  color: #fb5357;
  font-size: 32px;
}

.profile-block__description {
  color: #2e1151;
  font-size: 18px;
}

.profile-block__button-box {
  margin-top: 30px;
}

.profile-block__image-box {
  width: 20%;
  z-index: 2;
  position: relative;
  left: 30px;
}

.profile-block__image {
  height: 320px;
}

@media all and (max-width: 1300px) {
  .profile-block__block {
    position: static;
    width: 100%;
    height: auto;
    padding: 40px;
    justify-content: space-between;
  }

  .profile-block__content {
    width: 50%;
    margin: 0;
  }

  .profile-block__image-box {
    width: 40%;
    position: static;
  }

  .profile-block__image {
    width: 100%;
    height: auto;
  }
}

@media all and (max-width: 1150px) {
  .profile-block__description {
    font-size: 14px;
  }
}
</style>
