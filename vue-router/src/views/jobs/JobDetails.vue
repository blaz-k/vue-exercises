<template>
  <div>
    <h1>Job details</h1>
    <p>the job id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
