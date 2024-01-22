<template>
  <div>Projects</div>
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project.title }}
    </li>
  </ul>
  <div>
    <div>Pagina corrente: {{ currentPage }}</div>
    <div>Ultima pagina: {{ lastPage }}</div>
  </div>
  <button :disabled="currentPage === lastPage" @click="nextPage">Avanti</button>
  <button :disabled="currentPage === 1" @click="previousPage">Indietro</button>
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
    getAllProjects() {
      axios.get(store.apiURL + "projects").then((res) => {
        this.projects = res.data.results.data;
        console.log(res.data);
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
  },
};
</script>

<style lang="scss" scoped></style>
