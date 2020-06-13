<template>
  <div class="university" :class="{ visible: universityLoaded }">
    <h1 class="university__title">{{ university.name }}</h1>
    <a-row type="flex" justify="space-between">
      <a-col :span="14">
        <p class="university__description">{{ university.description }}</p>
      </a-col>
    </a-row>
    <div class="university__contacts">
      <a
        v-if="university.officialEmail"
        :href="'mailto:' + university.officialEmail"
        class="university__contacts-item"
      >
        <a-icon type="mail" theme="filled" class="university__contacts-icon" />
        <span class="university__contacts__text">{{
          university.officialEmail
        }}</span>
      </a>
      <a
        v-if="university.officialSite"
        target="_blank"
        :href="university.officialSite"
        class="university__contacts-item"
      >
        <a-icon type="build" theme="filled" class="university__contacts-icon" />
        <span class="university__contacts__text">{{
          university.officialSite
        }}</span>
      </a>
    </div>
    <a-row type="flex" justify="space-between" class="university__grid-row">
      <a-col :span="8">
        <statistics
          title="Early admission deadline"
          :value="getParsedDate(university.earlyAdmissionDeadline)"
          tooltip="Early admission deadline"
        />
      </a-col>
      <a-col :span="8">
        <statistics
          title="Regular admission deadline"
          :value="getParsedDate(university.regularAdmissionDeadline)"
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
    <div class="university__additional-requirements">
      <h4 class="university__additional-requirements-title">
        Additional requirements
      </h4>
      <p class="university__additional-requirements-list">
        {{ university.exams }}
      </p>
    </div>
  </div>
</template>

<script>
import request from "@/request/request";
import Statistics from "@/components/university/statistics/Statistics";
import moment from "moment";

export default {
  components: {
    statistics: Statistics
  },
  data() {
    return {
      university: {}
    };
  },
  computed: {
    universityLoaded() {
      return Boolean(this.university.name);
    }
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
    },
    getParsedDate(date) {
      return moment(date).format("DD.MM.YYYY");
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
  display: none;
  margin: auto;
  padding-bottom: 50px;
}

.university.visible {
  display: block;
}

.university__title {
  margin-bottom: 40px;
  font-size: 26px;
}

.university__description {
  font-size: 16px;
  font-weight: 500;
}

.university__contacts {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.university__contacts-item {
  font-size: 20px;
  font-weight: 500;
}

.university__contacts-icon {
  margin-right: 10px;
}

.university__article-text {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.university__grid-row {
  margin-top: 40px;
}

.university__additional-requirements {
  margin-top: 50px;
}

.university__additional-requirements-title {
  font-size: 18px;
}
</style>
