<template>
  <section class="login">
    <img src="@/assets/images/logo_light.svg" alt="Logo" class="login__logo" />
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
      <a-button type="primary" html-type="submit">Log in</a-button>
      <p class="login__bottom-text">
        Do not have account?
        <router-link to="/auth/register">Sign up</router-link>
      </p>
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
        }).then(() => this.$router.push("/dashboard"));
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #3e2179;
}

.login__form {
  padding: 30px 40px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.login__logo {
  width: 150px;
  margin: 0 auto 40px;
  display: block;
}

.login__heading {
  margin-bottom: 20px;
}

.login__bottom-text {
  margin-top: 20px;
}
</style>
