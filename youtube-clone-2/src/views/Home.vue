<template>
  <div class="home">{{ name }}, allvideo IDS: {{ allVideosIds }}</div>
</template>

<script>
// @ is an alias to /src

import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  setup() {
    const name = ref("blaz");
    // STORE:
    const store = useStore();
    // To get state from vuex:
    const allVideosIds = computed(() => store.state.allVideosIds);

    return { name, allVideosIds };
  },
};
</script>
