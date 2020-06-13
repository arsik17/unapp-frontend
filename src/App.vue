<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: mapActions(["fetchCurrentUser"]),
  beforeMount() {
    this.fetchCurrentUser();
  }
};
</script>
