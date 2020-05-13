<template>
  <section class="login">
    <a-form-model
      :model="form"
      @submit="handleSubmit"
      :rules="rules"
      ref="form"
      @submit.native.prevent
      class="login__form"
    >
      <h1 class="login__heading">Log In</h1>
      <a-form-model-item prop="email">
        <a-input v-model="form.email" placeholder="Email" autocomplete="off">
          <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input v-model="form.password" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-button type="primary" html-type="submit">
        Log in
      </a-button>
    </a-form-model>
  </section>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please enter user name",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "Please enter password",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid()) {
        this.login({
          email: this.form.email,
          password: this.form.password
        }).then(() => this.$router.push("/"));
      }
    },
    isFormValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    },
    ...mapActions(["login"])
  }
};
</script>

<style scoped>
.login {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: url("../../assets/images/university_library.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login__form {
  padding: 30px 40px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.login__heading {
  margin-bottom: 20px;
}
</style>
