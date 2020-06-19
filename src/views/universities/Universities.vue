<template>
  <div class="universities">
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
</style>
