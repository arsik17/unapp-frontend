<template>
  <div class="profile-card">
    <img
      src="@/assets/images/blank_profile_picture.svg"
      alt="Profile picture"
      class="profile-card__avatar"
    />
    <h3 class="profile-card__name">{{ user.username }}</h3>
    <p class="profile-card__from">
      Use UnApp from {{ getFormatedDate(user.createdAt) }}
    </p>
    <div
      v-if="user.country || user.city"
      class="profile-card__info profile-card__location"
    >
      <a-icon type="pushpin" theme="filled" class="profile-card__info-icon" />
      <span>{{
        getUserLocation({ country: user.country, city: user.city })
      }}</span>
    </div>
    <a
      :href="'mailto:' + user.email"
      class="profile-card__info profile-card__social"
    >
      <a-icon type="mail" theme="filled" class="profile-card__info-icon" />
      <span>{{ user.email }}</span>
    </a>
    <a
      v-if="user.phoneNumber"
      class="profile-card__info profile-card__social"
      :href="'tel:' + user.phoneNumber"
    >
      <a-icon type="phone" theme="filled" class="profile-card__info-icon" />
      <span>{{ user.phoneNumber }}</span>
    </a>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    user: Object
  },
  methods: {
    getUserLocation({ country, city }) {
      if (country && city) {
        return `${city}, ${country}`;
      }
      return country || city;
    },
    getFormatedDate(date) {
      return moment(date).format("DD.MM.YYYY");
    }
  }
};
</script>

<style scoped>
.profile-card {
  width: 100%;
  display: flex;
  flex-direction: column;
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
