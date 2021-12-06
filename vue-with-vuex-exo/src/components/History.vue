<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p
        :key="index"
        v-for="(number, index) in history"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
        {{ number }}
      </p>
    </div>
    <input type="number" v-model="value" placeholder="Search by Index" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "History",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>

<style>
.container {
  margin-top: 5rem;
}

.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}

.flex p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}
</style>
