<template>
  <div class="box">
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
    <a-button type="primary" @click="showModal" class="search__filter">
      Filters
    </a-button>
    <a-modal v-model="visible" title="Filters" on-ok="handleOk" class="modal">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          Return
        </a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
        >
          Submit
        </a-button>
      </template>
      <v-filters class="filters" />
    </a-modal>
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
      loading: false,
      visible: false,
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
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
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

.modal {
  width: 1000px;
  height: 1000px;
}
</style>
