<template>
  <div class="content">
    <div class="single__filter">
      <span class="content__label">Country:</span>
      <a-select
        class="filter filter__country"
        v-model="value"
        mode="multiple"
        style=""
        placeholder="select one country"
        option-label-prop="label"
      >
        <a-select-option value="china" label="China">
          <span role="img" aria-label="China">
            China
          </span>
        </a-select-option>
        <a-select-option value="usa" label="USA">
          <span role="img" aria-label="USA">
            USA
          </span>
        </a-select-option>
        <a-select-option value="japan" label="Japan">
          <span role="img" aria-label="Japan">
            Japan
          </span>
        </a-select-option>
        <a-select-option value="korea" label="Korea">
          <span role="img" aria-label="Korea">
            Korea
          </span>
        </a-select-option>
      </a-select>
    </div>

    <div class="single__filter">
      <span class="content__label">Min IELTS Score:</span>
      <a-input-number
        class="filter filter__ielts"
        :min="1"
        :max="100000"
        :default-value="0"
        @change="onChangeNumber"
      />
    </div>
    <div class="single__filter">
      <span class="content__label">Min SAT Score:</span>
      <a-input-number
        class="filter filter__ielts"
        :min="1"
        :max="100000"
        :default-value="0"
        @change="onChangeNumber"
      />
    </div>
    <div class="single__filter">
      <span class="content__label">Early admission deadline:</span>
      <a-date-picker @change="onChange" />
    </div>
    <div class="single__filter">
      <span class="content__label">Regular admission deadline:</span>
      <a-date-picker @change="onChange" />
    </div>
    <div class="single__filter">
      <span class="content__label">Regular admission deadline:</span>
      <a-date-picker @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: "v-filters",
  data() {
    return {
      value: ["usa"]
    };
  },
  watch: {
    startValue(val) {
      console.log("startValue", val);
    },
    endValue(val) {
      console.log("endValue", val);
    },
    value(val) {
      console.log(`selected:`, val);
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    onChangeNumber(value) {
      console.log("changed", value);
    },
    closeFilters() {
      this.$emit("closeFilters");
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.single__filter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 15px;
}

.content__motivletter {
  width: 30px;
}

.filter {
}

.filter__country {
  width: 350px;
}

.content__label {
  padding-right: 10px;
  font-size: 15px;
}
</style>
