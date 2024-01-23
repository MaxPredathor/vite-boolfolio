<template>
  <div>Projects</div>
  <div class="container">
    <div class="row">
      <CardProject v-for="project in projects" :key="project.id" :project="project"></CardProject>
    </div>
    <div class="d-flex ">
      <button class="btn" :disabled="currentPage === 1" @click="previousPage">Indietro</button>
      <div v-for="n in lastPage" :key="n">
        <button class="btn" @click="currentPage = n">{{ n }}</button>
      </div>
      <button class="btn" :disabled="currentPage === lastPage" @click="nextPage">Avanti</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import CardProject from "../components/CardProject.vue";
import { store } from "../store.js";

export default {
  name: "Projects",
  data() {
    return {
      store,
      projects: [],
      currentPage: 1,
      lastPage: 0,
    };
  },
  components: {
    CardProject,
  },
  methods: {
    // getAllProjects() {
    //   axios.get(store.apiURL + "projects").then((res) => {
    //     this.projects = res.data.results.data;
    //     this.currentPage = res.data.results.current_page;
    //     this.lastPage = res.data.results.last_page;
    //     console.log(res.data);
    //   });
    // },
    getAllProjects() {
      axios
        .get(store.apiURL + "projects", { params: { page: this.currentPage } })
        .then((res) => {
          console.log(res.data);
          this.projects = res.data.results.data;
          console.log(this.projects);
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
    },
    nextPage() {
      this.currentPage++;
      this.getAllProjects();
    },
    previousPage() {
      this.currentPage--;
      this.getAllProjects();
    },
  },
  mounted() {
    this.getAllProjects();
    this.store.showHeader = true;
  },
};
</script>

<style lang="scss" scoped></style>
