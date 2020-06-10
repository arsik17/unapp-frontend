<template>
  <div class="university">
    <h1 class="university__title">{{ university.name }}</h1>
    <a-row type="flex" justify="space-between">
      <a-col :span="14">
        <p class="university__description">{{ university.description }}</p>
      </a-col>
      <a-col :span="8" class="university__article">
        <a-row>
          <a-col :span="14" class="university__article-text"
            >Early admission deadline:</a-col
          >
          <a-col :span="10" class="university__article-text">
            {{ university.earlyAdmissionDeadline }}
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="14" class="university__article-text"
            >Regular admission deadline:</a-col
          >
          <a-col :span="10" class="university__article-text">
            {{ university.regularAdmissionDeadline }}
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="14" class="university__article-text"
            >Bachelor cost:</a-col
          >
          <a-col :span="10" class="university__article-text">
            {{ university.bachelorCost }}
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" class="university__grid-row">
      <a-col :span="8">
        <a-statistic
          title="Acceptance rate"
          :value="getPercents(university.acceptanceRate)"
        />
      </a-col>
      <a-col :span="8">
        <a-statistic
          title="IELTS score"
          :value="getUniversityScore(university.minIelts)"
        />
      </a-col>
      <a-col :span="8">
        <a-statistic
          title="Motivation letter"
          :value="getBooleanText(university.motivationLetter)"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" class="university__grid-row">
      <a-col :span="8">
        <a-statistic
          title="Recommendation letter"
          :value="getBooleanText(university.recommendationLetter)"
        />
      </a-col>
      <a-col :span="8">
        <a-statistic
          title="SAT Reasoning"
          :value="getUniversityScore(university.minSat)"
        />
      </a-col>
      <a-col :span="8">
        <a-statistic
          title="SAT Subject"
          :value="getUniversityScore(university.minSatSubject)"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import request from "@/request/request";

export default {
  data() {
    return {
      university: {}
    };
  },
  methods: {
    getPercents(number) {
      return `${number * 100}%`;
    },
    getUniversityScore(score) {
      return score ? score : "Not needed";
    },
    getBooleanText(flag) {
      return flag ? "Needed" : "Not needed";
    }
  },
  beforeMount() {
    const currentUniversityId = this.$route.params.id;
    request({
      url: `/universities/${currentUniversityId}`,
      method: "GET"
    }).then(res => (this.university = res.data));
  }
};
</script>

<style scoped>
.university {
  width: 90%;
  margin: auto;
}

.university__title {
  margin-bottom: 40px;
  font-size: 22px;
}

.university__description {
  font-size: 16px;
  font-weight: 500;
}

.university__article-text {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.university__grid-row {
  margin-top: 40px;
}
</style>
