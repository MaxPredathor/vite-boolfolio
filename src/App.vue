<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./store.js";
import Header from "./components/Header.vue";
export default {
  name: "App",
  data() {
    return {
      store,
      projects: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    getAllProjects() {
      axios
        .get(store.apiURL + "/projects", { params: { page: this.currentPage } })
        .then((res) => {
          console.log(res.data);
          this.projects = res.data.results.data;
          console.log(this.projects);
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
    },
  },
  mounted() {
    // this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/style/partials/variables" as *;
</style>
