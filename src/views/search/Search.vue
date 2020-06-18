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
      placeholder="Search university"
      enter-button
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    };
  },
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
