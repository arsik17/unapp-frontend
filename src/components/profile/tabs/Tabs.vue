<template>
  <div class="tabs">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Exams" force-render>
        Exams tab
      </a-tab-pane>
      <a-tab-pane key="2" tab="Stastics">
        <statistics />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Questions"
        >Form for asking questions for developers</a-tab-pane
      >
    </a-tabs>
  </div>
</template>

<script>
import Statistics from "@/components/profile/statistics/Statistics";

export default {
  components: {
    statistics: Statistics
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>

<style scoped>
.tabs {
  padding: 0 30px;
}
</style>
