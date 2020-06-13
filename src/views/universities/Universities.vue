<template>
  <div class="universities">
    <a-table
      :columns="columns"
      :data-source="universitiesTableData"
      :pagination="false"
    >
      <span slot="name" slot-scope="record">
        <router-link :to="'/universities/' + record.id">
          {{ record.name }}
        </router-link>
      </span>
      <span slot="scholarship" slot-scope="scholarship">
        <a-tag :color="getScholarshipColor(scholarship)">
          {{ scholarship.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="save" slot-scope="record">
        <a-button v-if="record.saved" @click="removeUniversity(record.id)"
          >Remove</a-button
        >
        <a-button v-else type="primary" @click="saveUniversity(record.id)"
          >Save</a-button
        >
      </span>
    </a-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const columns = [
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating"
  },
  {
    title: "Name",
    key: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country"
  },
  {
    title: "Scholarship",
    key: "scholarship",
    dataIndex: "scholarship",
    scopedSlots: { customRender: "scholarship" }
  },
  {
    title: "Cost",
    dataIndex: "bachelorCost",
    key: "cost"
  },
  {
    key: "save",
    scopedSlots: { customRender: "save" }
  }
];

export default {
  data() {
    return {
      columns
    };
  },
  computed: {
    universitiesTableData() {
      return this.universities.map(item => {
        item.key = item._id;
        item.rating = item.rating || "";
        item.scholarship = item.scholarship || "";
        item.bachelorCost = item.bachelorCost || "";
        item.saved = this.savedUniversities.find(
          university => university._id === item._id
        );
        return item;
      });
    },
    ...mapGetters(["universities", "savedUniversities", "currentUser"])
  },
  methods: {
    getScholarshipColor(scholarship) {
      const scholarshipColors = {
        full: "green",
        no: "volcano",
        partial: "orange"
      };
      return scholarshipColors[scholarship];
    },
    getSavedUniversitiesIds(savedUniversities) {
      return savedUniversities.map(university => university._id);
    },
    saveUniversity(id) {
      const savedUniversitiesIds = this.getSavedUniversitiesIds(
        this.savedUniversities
      );
      const updatedSavedUniversities = [...savedUniversitiesIds, id];
      this.updateSavedUniversities({
        userId: this.currentUser._id,
        savedUniversities: updatedSavedUniversities
      });
    },
    removeUniversity(id) {
      const savedUniversitiesIds = this.getSavedUniversitiesIds(
        this.savedUniversities
      );
      const updatedSavedUniversities = savedUniversitiesIds.filter(
        universityId => universityId !== id
      );
      this.updateSavedUniversities({
        userId: this.currentUser._id,
        savedUniversities: updatedSavedUniversities
      });
    },
    ...mapActions(["fetchUniversities", "updateSavedUniversities"])
  },
  beforeMount() {
    this.fetchUniversities();
  }
};
</script>

<style scoped>
.universities {
  width: 90%;
  margin: auto;
}
</style>
