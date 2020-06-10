<template>
  <div class="statistics">
    <a-tooltip>
      <template slot="title">{{ tooltip }}</template>
      <p class="statistics__title statistics__item">{{ title }}</p>
      <p class="statistics__value statistics__item">{{ value }}</p>
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
    value: String || Number,
    tooltip: String
  }
};
</script>

<style scoped>
.statistics__item {
  margin: 0;
}

.statistics__value {
  color: #000000;
  font-size: 26px;
}
</style>
