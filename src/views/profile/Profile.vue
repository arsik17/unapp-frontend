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
      <tabs />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/common/profileCard/ProfileCard";
import Tabs from "@/components/profile/tabs/Tabs";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "profile-card": ProfileCard,
    tabs: Tabs
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
  width: 80%;
  box-sizing: border-box;
}
</style>
