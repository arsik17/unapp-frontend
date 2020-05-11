<template>
  <div class="profile">
    <div class="profile__block profile__card-container">
      <profile-card class="profile__card" />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/common/profileCard/ProfileCard";

export default {
  components: {
    "profile-card": ProfileCard
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
}
</style>
