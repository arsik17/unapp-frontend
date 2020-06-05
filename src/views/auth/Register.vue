<template>
  <section class="register">
    <a-form-model
      :model="form"
      @submit="handleSubmit"
      :rules="rules"
      ref="form"
      @submit.native.prevent
      class="register__form"
    >
      <h1 class="register__heading">Create account</h1>
      <a-form-model-item prop="user">
        <a-input v-model="form.user" placeholder="Username" autocomplete="off">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
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
      <a-button type="primary" html-type="submit">Let's go</a-button>
      <p class="register__bottom-text">
        Already have account?
        <router-link to="/auth/login">Log in</router-link>
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
        user: "",
        email: "",
        password: ""
      },
      rules: {
        user: [
          {
            required: true,
            message: "Please enter user name",
            trigger: "change"
          }
        ],
        email: [
          {
            required: true,
            message: "Please enter your email",
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
        const user = {
          username: this.form.user,
          email: this.form.email,
          password: this.form.password
        };
        this.register(user).then(() => this.$router.push("/"));
      }
    },
    isFormValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    },
    ...mapActions(["register"])
  }
};
</script>

<style scoped>
.register {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #3e2179;
}

.register__form {
  padding: 30px 40px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.register__heading {
  margin-bottom: 20px;
}

.register__bottom-text {
  margin-top: 20px;
}
</style>
