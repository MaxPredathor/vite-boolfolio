<template>
  <div>Projects</div>
  <div class="container">
    <select name="categories" @change="getProjectsByCategory()" v-model="selectedCategory">
      <option selected value="all">All</option>
      <option v-for="category in store.categories" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
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
      selectedCategory: "all",
    };
  },
  components: {
    CardProject,
  },
  methods: {
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
    getAllCategories() {
      if (store.categories.length < 1) {
        axios
          .get(store.apiURL + "categories")
          .then((res) => {
            store.categories = res.data.results;
            console.log(store.categories);
          })
      }

    },
    getProjectsByCategory() {
      if (this.selectedCategory == "all") {
        this.getAllProjects();
      } else {
        axios
          .get(store.apiURL + "projects", {
            params: { category: this.selectedCategory },
          })
          .then((response) => {
            console.log(response);
            this.projects = response.data.results;
          });
      }
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
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped></style>
