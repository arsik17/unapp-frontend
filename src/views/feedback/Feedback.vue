<template>
  <a-form-model class="feedback" :model="form" :rules="rules" ref="form">
    <h1 class="feedback__heading">Give us feedback ;)</h1>
    <a-form-model-item label="Email" prop="firstName">
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
import request from "@/request/request";
import { mapGetters } from "vuex";

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
  computed: mapGetters(["currentUser"]),
  methods: {
    handleFormSubmit() {
      if (this.isFormValid()) {
        const data = {
          user: this.currentUser._id,
          email: this.form.email,
          text: this.form.text
        };
        this.sendFeedback(data)
          .then(() => {
            (this.form.email = ""), (this.form.text = "");
          })
          .catch(() => {});
      }
    },
    sendFeedback(data) {
      return new Promise((resolve, reject) => {
        request({
          url: "/feedbacks",
          method: "POST",
          data
        })
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    },
    isFormValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    }
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
