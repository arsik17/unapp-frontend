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
      <a-empty>
        <span slot="description">
          Here will be calendar of your deadlines
        </span>
      </a-empty>
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
  margin-top: 100px;
  box-sizing: border-box;
}
</style>
