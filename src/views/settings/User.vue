<template>
  <a-form-model class="user-settings">
    <h1 class="user-settings__heading">User info</h1>
    <a-form-model-item label="First name">
      <a-input placeholder="First name" class="user-settings__input" />
    </a-form-model-item>
    <a-form-model-item label="Last name">
      <a-input placeholder="Last name" class="user-settings__input" />
    </a-form-model-item>
    <a-form-model-item label="Date of birth">
      <a-input type="date" class="user-settings__input" />
    </a-form-model-item>
    <a-form-model-item label="Phone number">
      <a-input class="user-settings__input" />
    </a-form-model-item>
    <a-form-model-item label="Country">
      <a-select class="user-settings__input"></a-select>
    </a-form-model-item>
    <a-form-model-item label="City">
      <a-select class="user-settings__input"></a-select>
    </a-form-model-item>
    <a-form-model-item label="Make my info private">
      <a-switch />
    </a-form-model-item>
    <a-button type="primary" size="large">Save</a-button>
  </a-form-model>
</template>

<script>
export default {};
</script>

<style scoped>
.user-settings {
  width: 60%;
  padding: 30px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
}

.user-settings__input {
  width: 60%;
}
</style>
