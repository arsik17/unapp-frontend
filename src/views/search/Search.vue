<template>
  <div class="search">
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
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onSearch() {
      console.log("Searching");
    }
  }
};
</script>

<style>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.search__logo {
  height: 60px;
  margin-bottom: 40px;
}

.search__field {
  font-size: 20px;
}
</style>
