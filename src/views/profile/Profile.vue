<template>
  <div class="profile">
    <div class="profile__block profile__card-container">
      <profile-card
        v-show="currentUserLoaded"
        :user="currentUser"
        class="profile__card"
      />
    </div>
    <div class="profile__block profile__content">
      <span class="profile__content-title">Calendar of your deadlines</span>
      <a-calendar
        class="profile__content-calendar"
        @panelChange="onPanelChange"
      />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/common/profileCard/ProfileCard";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "profile-card": ProfileCard
  },
  computed: {
    currentUserLoaded() {
      return Boolean(this.currentUser.username);
    },
    ...mapGetters(["currentUser"])
  },
  methods: {
    ...mapActions(["fetchCurrentUser"])
  },
  beforeMount() {
    this.fetchCurrentUser();
  },
  nPanelChange(value, mode) {
    console.log(value, mode);
  }
};
</script>

<style scoped>
.profile {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.profile__card-container {
  width: 25%;
  box-sizing: border-box;
}

.profile__content {
  width: 65%;
  margin-right: 50px;
  box-sizing: border-box;
}

.profile__content-title {
  font-size: 30px;
  font-weight: 600;
}
</style>
