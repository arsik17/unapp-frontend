<template>
  <a-form-model class="user-settings">
    <h1 class="user-settings__heading">User info</h1>
    <a-form-model-item label="First name">
      <a-input
        placeholder="First name"
        class="user-settings__input"
        v-model="firstName"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="Last name">
      <a-input
        placeholder="Last name"
        class="user-settings__input"
        v-model="lastName"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="Date of birth">
      <a-input
        type="date"
        class="user-settings__input"
        v-model="dateOfBirth"
        :disabled="true"
      />
    </a-form-model-item>
    <a-form-model-item label="Phone number">
      <a-input
        class="user-settings__input"
        v-model="phoneNumber"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="Country">
      <a-input
        class="user-settings__input"
        v-model="country"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="City">
      <a-input
        class="user-settings__input"
        v-model="city"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="Make my contacts visible for users of UnApp">
      <a-switch v-model="contactsVisible" :disabled="loading" />
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
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      phoneNumber: "",
      country: "",
      city: "",
      contactsVisible: false
    };
  },
  computed: mapGetters(["currentUser"]),
  methods: {
    setInitialValues(data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.phoneNumber = data.phoneNumber;
      this.country = data.country;
      this.city = data.city;
      this.contactsVisible = data.contactsVisible;
    },
    handleFormSubmit() {
      const {
        firstName,
        lastName,
        phoneNumber,
        country,
        city,
        contactsVisible
      } = this;
      const userData = {
        firstName,
        lastName,
        phoneNumber,
        country,
        city,
        contactsVisible
      };
      const userId = this.currentUser._id;
      this.updateCurrentUser({ userId, userData });
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
