<template>
  <a-form-model class="notifications-settings">
    <h1 class="notifications-settings__heading">Notifications</h1>
    <a-form-model-item label="Send me university suggestions every week">
      <a-switch />
    </a-form-model-item>
    <a-button type="primary" size="large">Save</a-button>
  </a-form-model>
</template>

<script>
export default {};
</script>

<style scoped>
.notifications-settings {
  width: 60%;
  padding: 30px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
}

.notifications-settings__input {
  width: 60%;
}
</style>
