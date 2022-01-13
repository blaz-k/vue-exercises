<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },

  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no data available!");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(err.value);
      }
    };

    load();

    return { posts, error };
  },
};

// butto delete post
</script>
