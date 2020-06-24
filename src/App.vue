<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["fetchCurrentUser"]),
  beforeMount() {
    if (this.isLoggedIn) {
      this.fetchCurrentUser();
    }
  }
};
</script>
