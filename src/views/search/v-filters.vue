<template>
  <div class="v-filters__wrapper">
    <div class="v-filters">
      <div class="header">
        <h1 class="header__title">Filters</h1>
        <a-icon type="close" class="header__close" @click="closeFilters" />
      </div>
      <div class="content">
        <a-select
          class="content__country"
          v-model="value"
          mode="multiple"
          style="width: 100%"
          placeholder="select one country"
          option-label-prop="label"
        >
          <a-select-option value="china" label="China">
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China
          </a-select-option>
          <a-select-option value="usa" label="USA">
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA
          </a-select-option>
          <a-select-option value="japan" label="Japan">
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan
          </a-select-option>
          <a-select-option value="korea" label="Korea">
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea
          </a-select-option>
        </a-select>
        <a-switch
          class="content__motivletter"
          default-checked
          @change="onChange"
        />
        <a-input-number
          :min="1"
          :max="100000"
          :default-value="0"
          @change="onChangeNumber"
        />
      </div>
      <div class="footer">
        <a-button type="default" @click="closeFilters">
          Close
        </a-button>
        <a-button class="footer__use" type="primary">Use</a-button>
      </div>
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
    value(val) {
      console.log(`selected:`, val);
    }
  },
  methods: {
    onChangeNumber(value) {
      console.log("changed", value);
    },

    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    closeFilters() {
      this.$emit("closeFilters");
    }
  }
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 0px 20px;
}

.header__close {
  margin-top: 8px;
  font-size: 25px;
}

.header__title {
  font-size: 25px;
}

.v-filters {
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 17px 0 #e7e7e7;
}

.v-filters__wrapper {
  background-color: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  padding: 0px 20px 0px 20px;
}

.content__motivletter {
  width: 30px;
}

.footer {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px 20px 20px;
}

.footer__use {
  background-color: green;
  color: green;
  width: 80px;
}
</style>
