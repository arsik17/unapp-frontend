<template>
  <div class="university">
    <h1 class="university__title">{{ university.name }}</h1>
    <a-row type="flex" justify="space-between">
      <a-col :span="14">
        <p class="university__description">{{ university.description }}</p>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" class="university__grid-row">
      <a-col :span="8">
        <statistics
          title="Early admission deadline"
          :value="university.earlyAdmissionDeadline"
          tooltip="Early admission deadline"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="Regular admission deadline"
          :value="university.regularAdmissionDeadline"
          tooltip="Regular admission deadline"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="Bachelor cost"
          :value="university.bachelorCost"
          tooltip="Bachelor cost"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" class="university__grid-row">
      <a-col :span="8">
        <statistics
          title="Acceptance rate"
          :value="getPercents(university.acceptanceRate)"
          tooltip="Acceptance rate"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="IELTS score"
          :value="getUniversityScore(university.minIelts)"
          tooltip="IELTS score"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="Motivation letter"
          :value="getBooleanText(university.motivationLetter)"
          tooltip="Motivation letter"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" class="university__grid-row">
      <a-col :span="8">
        <statistics
          title="Recommendation letter"
          :value="getBooleanText(university.recommendationLetter)"
          tooltip="Recommendation letter"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="SAT Reasoning"
          :value="getUniversityScore(university.minSat)"
          tooltip="SAT Reasoning"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="SAT Subject"
          :value="getUniversityScore(university.minSatSubject)"
          tooltip="SAT Subject"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import request from "@/request/request";
import Statistics from "@/components/university/Statistics";

export default {
  components: {
    statistics: Statistics
  },
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
  padding-bottom: 50px;
}

.university__title {
  margin-bottom: 40px;
  font-size: 26px;
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
