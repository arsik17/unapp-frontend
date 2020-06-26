<template>
  <div class="saved-universities">
    <h1 class="saved-universities__heading">Saved Universities</h1>
    <a-row
      type="flex"
      justify="space-between"
      class="saved-universities__controls"
    >
      <a-button
        @click="$router.push('/universities')"
        type="primary"
        icon="plus-circle"
        :disabled="savedUniversities.length >= maxSavedUniversities"
        >Add university</a-button
      >
    </a-row>
    <universities-table :universities="filteredUniversities" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import universitiesConfig from "@/config/universities";
import UniversitiesTable from "@/components/common/universitiesTable/UniversitiesTable";

export default {
  components: {
    "universities-table": UniversitiesTable
  },
  data() {
    return {
      maxSavedUniversities: universitiesConfig.maxSavedUniversities
    };
  },
  computed: {
    filteredUniversities() {
      const savedUniversitiesIds = this.getSavedUniversitiesIds(
        this.savedUniversities
      );
      return this.universities.filter(university =>
        savedUniversitiesIds.includes(university._id)
      );
    },
    ...mapGetters(["universities", "savedUniversities"])
  },
  methods: {
    getSavedUniversitiesIds(savedUniversities) {
      return savedUniversities.map(university => university._id);
    },
    ...mapActions(["fetchUniversities"])
  },
  beforeMount() {
    this.fetchUniversities();
  }
};
</script>

<style scoped>
.saved-universities {
  width: 90%;
  margin: auto;
}

.saved-universities__heading {
  margin: 0 0 30px;
}

.saved-universities__controls {
  margin-bottom: 20px;
}
</style>
