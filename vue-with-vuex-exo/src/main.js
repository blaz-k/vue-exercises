import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 15,
    };
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
