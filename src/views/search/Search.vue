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
        placeholder="Find University"
        enter-button="Search"
        @search="handleSearch"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearching: false
    };
  },
  methods: {
    handleSearch(query) {
      if (!query) {
        return;
      }
      this.isSearching = true;
    }
  }
};
</script>

<style>
.search__field-container {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
}

.search__field-container.search__field-container_small {
  height: 15vh;
}

.search__logo {
  height: 60px;
  margin-bottom: 40px;
}

.search__field {
  font-size: 20px;
}
</style>
