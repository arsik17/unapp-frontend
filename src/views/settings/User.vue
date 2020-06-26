<template>
  <a-form-model class="user-settings" :model="form" :rules="rules" ref="form">
    <h1 class="user-settings__heading">User info</h1>
    <a-form-model-item label="First name" prop="firstName">
      <a-input
        placeholder="First name"
        class="user-settings__input"
        v-model="form.firstName"
        :disabled="loading"
        :maxLength="60"
      />
    </a-form-model-item>
    <a-form-model-item label="Last name" prop="lastName">
      <a-input
        placeholder="Last name"
        class="user-settings__input"
        v-model="form.lastName"
        :disabled="loading"
        :maxLength="60"
      />
    </a-form-model-item>
    <a-form-model-item label="Date of birth">
      <a-input
        type="date"
        class="user-settings__input"
        v-model="form.dateOfBirth"
        :disabled="true"
      />
    </a-form-model-item>
    <a-form-model-item label="Phone number">
      <a-input
        class="user-settings__input"
        v-model="form.phoneNumber"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="Country">
      <a-input
        class="user-settings__input"
        v-model="form.country"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="City">
      <a-input
        class="user-settings__input"
        v-model="form.city"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="Make my contacts visible for users of UnApp">
      <a-switch v-model="form.contactsVisible" :disabled="loading" />
    </a-form-model-item>
    <a-button @click="handleFormSubmit" type="primary" size="large"
      >Save</a-button
    >
  </a-form-model>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      form: {
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        phoneNumber: "",
        country: "",
        city: "",
        contactsVisible: false
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: "change"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Please enter your last name",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: mapGetters(["currentUser"]),
  methods: {
    setInitialValues(data) {
      this.form = data;
    },
    handleFormSubmit() {
      if (this.isFormValid()) {
        const userData = this.form;
        const userId = this.currentUser._id;
        this.updateCurrentUser({ userId, userData });
      }
    },
    isFormValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    },
    ...mapActions(["fetchCurrentUser", "updateCurrentUser"])
  },
  beforeMount() {
    this.loading = true;
    this.fetchCurrentUser().then(userData => {
      this.setInitialValues(userData);
      this.loading = false;
    });
  }
};
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
