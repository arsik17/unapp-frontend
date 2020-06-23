<template>
  <a-form-model class="exams-settings">
    <h1 class="exams-settings__heading">My exams</h1>
    <p>Exams data is used to provide valid university recommedation</p>
    <a-form-model-item label="SAT Reasoning score">
      <a-input
        placeholder="SAT Reasoning score"
        class="exams-settings__input"
      />
    </a-form-model-item>
    <a-form-model-item label="SAT Subject score">
      <a-input placeholder="SAT Subject score" class="exams-settings__input" />
    </a-form-model-item>
    <a-form-model-item label="IELTS score">
      <a-input placeholder="IELTS Score" class="exams-settings__input" />
    </a-form-model-item>
    <a-button type="primary" size="large">Save</a-button>
  </a-form-model>
</template>

<script>
export default {};
</script>

<style scoped>
.exams-settings {
  width: 60%;
  padding: 30px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
}

.exams-settings__input {
  width: 60%;
}
</style>
