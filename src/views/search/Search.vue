<template>
  <div class="box">
    <v-filters
      class="filters"
      v-if="isFiltersUsed"
      @closeFilters="closeFilters"
    />

    <h1 class="search__title">UnApp</h1>
    <a-input-search
      class="search__box"
      size="large"
      style="
        width: 600px;
        font-size: 20px;"
      placeholder="Search university"
      enter-button
      @search="onSearch"
    />
    <a-button type="primary" class="search__filter" @click="showFilters">
      Filters
    </a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    }
  }
};
</script>

<script>
import vFilters from "../search/v-filters";

export default {
  components: {
    vFilters
  },

  data() {
    return {
      isFiltersUsed: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    showFilters() {
      this.isFiltersUsed = true;
    },

    closeFilters() {
      this.isFiltersUsed = false;
    },

    onSubmit() {
      console.log("submit!", this.form);
    }
  }
};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.search__title {
  font-size: 100px;
  color: #3e2179;
}

.search__filter {
  margin-top: 30px;
  width: 100px;
}

.filters {
  z-index: 50;
}
</style>
