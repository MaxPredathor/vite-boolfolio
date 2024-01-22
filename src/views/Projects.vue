
import { store } from '@/store';
<template>
  <div>Projects</div>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <router-link :to="{ name: 'project-details', params: { slug: project.slug } }" class="btn btn-primary">{{
        project.title }}</router-link>
    </li>
  </ul>
  <div>
    <div>Pagina corrente: {{ currentPage }}</div>
    <div>Ultima pagina: {{ lastPage }}</div>
  </div>
  <button :disabled="currentPage === 1" @click="previousPage">Indietro</button>
  <button :disabled="currentPage === lastPage" @click="nextPage">Avanti</button>
</template>

<script>
import axios from "axios";
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
