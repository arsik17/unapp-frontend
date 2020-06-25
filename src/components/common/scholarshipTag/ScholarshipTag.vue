<template>
  <a-tag v-if="scholarship === 'full'" color="green">Full scholarship</a-tag>
  <a-tag v-else-if="scholarship === 'partial'" color="orange"
    >Partial scholarship</a-tag
  >
  <a-tag v-else color="red">No scholarship</a-tag>
</template>

<script>
export default {
  props: {
    scholarship: String
  }
};
</script>
