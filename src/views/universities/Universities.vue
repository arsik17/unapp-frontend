<template>
  <div class="universities">
    <h1 class="universities__heading">All Universities</h1>
    <universities-table :universities="universities" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UniversitiesTable from "@/components/common/universitiesTable/UniversitiesTable";

export default {
  components: {
    "universities-table": UniversitiesTable
  },
  computed: {
    ...mapGetters(["universities"])
  },
  methods: {
    ...mapActions(["fetchUniversities"])
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

.universities__heading {
  margin: 0 0 30px;
}
</style>
