<template>
  <div>
    <Counter />
    <History />
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import History from "./History.vue";

export default {
  name: "Component1",
  components: { Counter, History },
};
</script>

<style></style>
