<template>
  <div class="profile-card">
    <img
      src="@/assets/images/blank_profile_picture.svg"
      alt="Profile picture"
      class="profile-card__avatar"
    />
    <h3 class="profile-card__name">Sayazhan Onglassyn</h3>
    <p class="profile-card__from">Use UnApp from 10.05.2020</p>
    <div class="profile-card__info profile-card__location">
      <a-icon type="pushpin" theme="filled" class="profile-card__info-icon" />
      <span>Taraz, Kazakhstan</span>
    </div>
    <div class="profile-card__info profile-card__social">
      <a-icon type="facebook" theme="filled" class="profile-card__info-icon" />
      <span>Saydzhon</span>
    </div>
    <a class="profile-card__info profile-card__social" href="tel:87071498484">
      <a-icon type="phone" theme="filled" class="profile-card__info-icon" />
      <span>+7 (707) 149-84-48</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-card {
  width: 100%;
}

.profile-card__avatar {
  width: 100%;
  border-radius: 10px;
}

.profile-card__name {
  margin: 16px 0 0px;
  font-size: 24px;
}

.profile-card__from {
  font-size: 12px;
}

.profile-card__info {
  margin-bottom: 5px;
  font-size: 16px;
  color: inherit;
}

.profile-card__info-icon {
  margin-right: 10px;
}
</style>
