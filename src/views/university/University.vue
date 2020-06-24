<template>
  <div class="university" :class="{ visible: universityLoaded }">
    <h1 class="university__title">{{ university.name }}</h1>
    <a-row v-if="university.description" type="flex" justify="space-between">
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
        <span class="university__contacts__text">
          {{ university.officialEmail }}
        </span>
      </a>
      <a
        v-if="university.officialSite"
        target="_blank"
        :href="university.officialSite"
        class="university__contacts-item"
      >
        <a-icon type="build" theme="filled" class="university__contacts-icon" />
        <span class="university__contacts__text">
          {{ university.officialSite }}
        </span>
      </a>
    </div>
    <div
      v-for="faculty in university.faculties"
      :key="faculty.id"
      class="university__faculty"
    >
      <h3 class="university__faculty-name">{{ faculty.name }}</h3>
      <a-row type="flex" class="university__grid-row">
        <a-col :span="8">
          <statistics
            title="Early admission deadline"
            :value="getParsedDate(faculty.earlyAdmissionDeadline)"
            tooltip="Early admission deadline"
          />
        </a-col>
        <a-col :span="8">
          <statistics
            title="Regular admission deadline"
            :value="getParsedDate(faculty.regularAdmissionDeadline)"
            tooltip="Regular admission deadline"
          />
        </a-col>
        <a-col :span="8">
          <statistics
            title="Bachelor cost"
            :value="faculty.bachelorCost"
            tooltip="Bachelor cost"
          />
        </a-col>
      </a-row>
      <a-row type="flex" class="university__grid-row">
        <a-col :span="8">
          <statistics
            title="IELTS score"
            :value="getUniversityScore(faculty.minIelts)"
            tooltip="IELTS score"
          />
        </a-col>
        <a-col :span="8">
          <statistics
            title="Motivation letter"
            :value="getBooleanText(faculty.motivationLetter)"
            tooltip="Motivation letter"
          />
        </a-col>
        <a-col :span="8">
          <statistics
            title="Recommendation letter"
            :value="getBooleanText(faculty.recommendationLetter)"
            tooltip="Recommendation letter"
          />
        </a-col>
      </a-row>
      <a-row type="flex" class="university__grid-row">
        <a-col :span="8">
          <statistics
            title="SAT Reasoning"
            :value="getUniversityScore(faculty.minSat)"
            tooltip="SAT Reasoning"
          />
        </a-col>
        <a-col :span="8">
          <statistics
            title="SAT Subject"
            :value="getUniversityScore(faculty.minSatSubject)"
            tooltip="SAT Subject"
          />
        </a-col>
      </a-row>
      <div
        v-if="faculty.additionalExams"
        class="university__additional-requirements"
      >
        <h4 class="university__section-heading">Additional requirements</h4>
        <p class="university__additional-requirements-list">
          {{ faculty.additionalExams }}
        </p>
      </div>
      <div
        v-if="getSpecializationsOfFaculty(faculty.id).length > 0"
        class="university__specializations"
      >
        <h4 class="university__section-heading">Available specialization</h4>
        <a-tag
          v-for="specialization in getSpecializationsOfFaculty(faculty.id)"
          :key="specialization.id"
          color="green"
          >{{ specialization.name }}</a-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/request/request";
import Statistics from "@/components/university/statistics/Statistics";
import moment from "moment";
import { mapActions, mapGetters } from "vuex";

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
    },
    ...mapGetters(["specializations"])
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
    },
    getSpecializationsOfFaculty(facultyId) {
      return this.specializations.filter(specialization =>
        specialization.faculties.find(faculty => faculty.id === facultyId)
      );
    },
    ...mapActions(["fetchSpecializations"])
  },
  beforeMount() {
    const currentUniversityId = this.$route.params.id;
    request({
      url: `/universities/${currentUniversityId}`,
      method: "GET"
    }).then(res => {
      console.log(res.data);
      this.university = res.data;
    });
    this.fetchSpecializations();
  }
};
</script>

<style scoped>
.university {
  width: 90%;
  display: none;
  margin: 30px auto 0;
  padding-bottom: 50px;
}

.university.visible {
  display: block;
}

.university__title {
  margin-bottom: 40px;
  font-size: 30px;
}

.university__description {
  font-size: 16px;
  font-weight: 500;
}

.university__contacts {
  margin: 20px 0 80px;
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

.university__faculty {
  margin-bottom: 80px;
}

.university__faculty-name {
  margin-bottom: 20px;
  font-size: 24px;
}

.university__grid-row {
  margin-bottom: 40px;
}

.university__section-heading {
  margin-top: 30px;
  font-size: 18px;
}

.university__additional-requirements {
  margin-top: 50px;
}
</style>
