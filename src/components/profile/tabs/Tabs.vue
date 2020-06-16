<template>
  <div class="tabs">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Saved universities" force-render>
        <saved-universities />
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
import SavedUniversities from "@/components/profile/savedUniversities/SavedUniversities";

export default {
  components: {
    statistics: Statistics,
    "saved-universities": SavedUniversities
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
