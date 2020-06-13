<template>
  <div class="saved-universities">
    <a-table :columns="columns" :data-source="tableData" :pagination="false">
      <span slot="name" slot-scope="record">
        <router-link :to="'/universities/' + record.id">{{
          record.name
        }}</router-link>
      </span>
      <span slot="scholarship" slot-scope="scholarship">
        <a-tag :color="getScholarshipColor(scholarship)">{{
          scholarship.toUpperCase()
        }}</a-tag>
      </span>
      <span slot="save" slot-scope="record">
        <a-button @click="removeUniversity(record.id)">Remove</a-button>
      </span>
    </a-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import universitiesConfig from "@/config/universities";

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
    tableData() {
      return this.filteredUniversities.map(item => {
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
    filteredUniversities() {
      const savedUniversitiesIds = this.getSavedUniversitiesIds(
        this.savedUniversities
      );
      return this.universities.filter(university =>
        savedUniversitiesIds.includes(university._id)
      );
    },
    ...mapGetters(["universities", "savedUniversities", "currentUser"])
  },
  methods: {
    getScholarshipColor(scholarship) {
      return universitiesConfig.scholarshipColors[scholarship];
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
    getSavedUniversitiesIds(savedUniversities) {
      return savedUniversities.map(university => university._id);
    },
    ...mapActions(["fetchUniversities", "updateSavedUniversities"])
  },
  beforeMount() {
    this.fetchUniversities();
  }
};
</script>

<style></style>
