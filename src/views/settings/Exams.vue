<template>
  <a-form-model class="exams-settings">
    <h1 class="exams-settings__heading">My exams</h1>
    <p>Exams data is used to provide valid university recommedation</p>
    <a-form-model-item label="SAT Reasoning score">
      <a-input
        placeholder="SAT Reasoning score"
        class="exams-settings__input"
        v-model="satScore"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="SAT Subject score">
      <a-input
        placeholder="SAT Subject score"
        class="exams-settings__input"
        v-model="satSubjectScore"
        :disabled="loading"
      />
    </a-form-model-item>
    <a-form-model-item label="IELTS score">
      <a-input
        placeholder="IELTS Score"
        class="exams-settings__input"
        v-model="ieltsScore"
        :disabled="loading"
      />
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
      satScore: null,
      satSubjectScore: null,
      ieltsScore: null
    };
  },
  computed: mapGetters(["currentUser"]),
  methods: {
    setInitialValues(data) {
      this.satScore = data.satScore;
      this.satSubjectScore = data.satSubjectScore;
      this.ieltsScore = data.ieltsScore;
    },
    handleFormSubmit() {
      const { satScore, satSubjectScore, ieltsScore } = this;
      const userData = {
        satScore,
        satSubjectScore,
        ieltsScore
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
