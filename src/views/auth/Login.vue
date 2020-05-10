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
      <a-form-model-item prop="user">
        <a-input v-model="form.user" placeholder="Username" autocomplete="off">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
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
export default {
  data() {
    return {
      form: {
        user: "",
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
        console.log("Form is submitted");
      }
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
