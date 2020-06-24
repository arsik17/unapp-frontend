<template>
  <div class="statistics">
    <a-tooltip>
      <template slot="title">{{ tooltip }}</template>
      <p class="statistics__title statistics__item">{{ title }}</p>
      <p class="statistics__item">
        <a-tag
          v-if="value !== undefined"
          class="statistics__value"
          color="#6535c5"
          >{{ value }}</a-tag
        >
        <a-tag v-else class="statistics__value" color="#f5222d">No data</a-tag>
      </p>
    </a-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: [String, Number],
    tooltip: String
  }
};
</script>

<style scoped>
.statistics__item {
  margin: 0;
}

.statistics__value {
  margin-top: 10px;
  padding: 7px 10px;
  color: #ffffff;
  font-size: 20px;
}
</style>
