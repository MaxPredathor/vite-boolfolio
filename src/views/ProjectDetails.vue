<template>
  <div>Prova</div>
  <h1 v-if="project">{{ project.title }}</h1>
  <img :src="`${store.imagePath}${project.image}`" :alt="project.title" />
</template>

<script>
import axios from "axios";
import { store } from "../store.js";
export default {
  name: "ProjectDetails",
  data() {
    return {
      store,
      project: null,
    };
  },
  methods: {
    getProjectData() {
      axios
        .get(this.store.apiURL + "projects/" + this.$route.params.slug)
        .then((res) => {
          if (res.data.results) {
            this.project = res.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
    // mounted() {
    //   this.getProjectData();
    //   console.log(store.apiURL + "projects/" + this.$route.params.slug);
    // },
  },
  created() {
    this.getProjectData();
  },
};
</script>

<style lang="scss" scoped></style>
