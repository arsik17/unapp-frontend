<template>
  <div class="search">
    <div
      class="search__field-container"
      :class="{ 'search__field-container_small': isSearching }"
    >
      <img
        class="search__logo"
        src="@/assets/images/logo_dark.svg"
        alt="UnApp Logo"
      />
      <a-input-search
        class="search__field"
        size="large"
        style="width: 50%"
        placeholder="Find University by name"
        enter-button="Search"
        @search="handleSearch"
      />
    </div>
    <universities-table
      v-if="isUniversityListLoaded"
      :universities="filteredUniversities"
      class="search__universities"
    />
  </div>
</template>

<script>
import UniversitiesTable from "@/components/common/universitiesTable/UniversitiesTable";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    "universities-table": UniversitiesTable
  },
  data() {
    return {
      isSearching: false,
      isUniversityListLoaded: false,
      filteredUniversities: []
    };
  },
  computed: {
    ...mapGetters(["universities"])
  },
  methods: {
    handleSearch(query) {
      if (!query) {
        return;
      }
      this.isSearching = true;
      this.fetchUniversities().then(() => {
        this.filteredUniversities = this.filterUniversities(
          query,
          this.universities
        );
        this.isUniversityListLoaded = true;
      });
    },
    filterUniversities(searchQuery, universities) {
      searchQuery = searchQuery.toLowerCase();
      return universities.filter(university => {
        let universityName = university.name.toLowerCase();
        return universityName.indexOf(searchQuery) !== -1;
      });
    },
    ...mapActions(["fetchUniversities"])
  }
};
</script>

<style>
.search {
  width: 90%;
  margin: auto;
}

.search__field-container {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
}

.search__field-container.search__field-container_small {
  height: 20vh;
}

.search__logo {
  height: 60px;
  margin-bottom: 40px;
}

.search__field {
  font-size: 20px;
}

.search__universities {
  margin-top: 50px;
}
</style>
