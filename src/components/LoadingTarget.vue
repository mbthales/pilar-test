<script>
export default {
  name: "LoadingTarget",
  mounted() {
    this.$emit("mounted");
  },
};
</script>

<template>
  <div>
    <font-awesome-icon id="loading-target" :icon="['fas', 'spinner']" spin />
  </div>
</template>