<template>
  <div>
    <h2>Books that I like:</h2>
    <div :key="book.id" v-for="book in books" class="books">
      <router-link :to="{ name: 'BookDetails', params: { id: book.id } }"
        ><p>
          <span class="title">{{ book.title }}</span> by
          <span>{{ book.author }}</span>
        </p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      books: [
        { title: "His Dark Materials", id: "1", author: "Phillip Pullman" },
        { title: "The Lord Of The Rings", id: "2", author: "J.R.R Tolkien " },
        { title: "A Game of Thrones", id: "3", author: "George R.R Martin" },
      ],
    };
  },
};
</script>

<style>
.title {
  font-weight: 600;
}
</style>
