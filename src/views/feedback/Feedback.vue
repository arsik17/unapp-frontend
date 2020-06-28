<template>
  <a-form-model class="feedback" :model="form" :rules="rules" ref="form">
    <h1 class="feedback__heading">Give us feedback ;)</h1>
    <a-form-model-item label="First name" prop="firstName">
      <a-input
        placeholder="Email (if you want us to contact you)"
        class="feedback__input"
        v-model="form.email"
      />
    </a-form-model-item>
    <a-form-model-item label="Your message" prop="text">
      <a-textarea
        placeholder="Write whatever you want"
        v-model="form.text"
        class="feedback__text"
      />
    </a-form-model-item>
    <a-button @click="handleFormSubmit" type="primary" size="large"
      >Send</a-button
    >
  </a-form-model>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      form: {
        email: "",
        text: ""
      },
      rules: {
        text: [
          {
            required: true,
            message: "Please write your feedback",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleFormSubmit() {
      if (this.isFormValid()) {
        console.log("Send feedback", this.form);
      }
    },
    isFormValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    },
    ...mapActions([])
  }
};
</script>

<style scoped>
.feedback {
  width: 60%;
  margin: 50px auto 0;
  padding: 30px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
}

.feedback__input {
  width: 60%;
}

.feedback__text {
  height: 200px;
}
</style>
