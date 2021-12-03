import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Books from "../views/books/Books.vue";
import BookDetails from "../views/books/BookDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/books/:id",
    name: "BookDetails",
    component: BookDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
