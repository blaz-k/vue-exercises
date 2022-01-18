<template>
  <div>
    <div class="home">allVideo IDS: {{ allVideosIds }}</div>
    <div class="row g-4 row-cols-1 row-cols-sm-4">
      <div v-for="VIds in allVideosIds" :key="VIds">
        <ShowVideo :showVideoId="VIds" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { computed } from "vue";
import { useStore } from "vuex";
import ShowVideo from "../components/ShowVideo.vue";

export default {
  name: "Home",
  setup() {
    // STORE:
    const store = useStore();
    // Get state from Vuex:
    const allVideosIds = computed(() => store.state.allVideosIds);
    return { allVideosIds };
  },
  components: { ShowVideo },
};
</script>
