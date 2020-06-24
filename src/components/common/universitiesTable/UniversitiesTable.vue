<template>
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
      <a-tag v-if="scholarship" :color="getScholarshipColor(scholarship)">
        {{ scholarship.toUpperCase() }}
      </a-tag>
      <a-tag v-else color="red">No data</a-tag>
    </span>
    <span slot="bachelorCost" slot-scope="bachelorCost">
      <span v-if="bachelorCost">{{ bachelorCost }}</span>
      <a-tag v-else color="red">No data</a-tag>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
    key: "bachelorCost",
    scopedSlots: { customRender: "bachelorCost" }
  },
  {
    key: "save",
    scopedSlots: { customRender: "save" }
  }
];

export default {
  props: {
    universities: {
      type: Array,
      default: () => []
    }
  },
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
    ...mapGetters(["savedUniversities", "currentUser"])
  },
  methods: {
    getScholarshipColor(scholarship) {
      return universitiesConfig.scholarshipColors[scholarship];
    },
    getSavedUniversitiesIds(savedUniversities) {
      return savedUniversities.map(university => university._id);
    },
    showTooManyUniversitiesError(message, description) {
      this.$notification["error"]({
        message,
        description
      });
    },
    saveUniversity(id) {
      if (
        this.savedUniversities.length >= universitiesConfig.maxSavedUniversities
      ) {
        this.showTooManyUniversitiesError(
          "Too many saved universities",
          "You have to focus on your 20 primary universities"
        );
        return;
      }
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
    ...mapActions(["updateSavedUniversities"])
  }
};
</script>

<style></style>
