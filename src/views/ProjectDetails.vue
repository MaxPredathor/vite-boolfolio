<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.body }}</p>
    <p>{{ project.category.name }}</p>
    <div class="d-inline-block" v-for="item in project.technologies">
      <img style="width: 50px" :src="item.image" :alt="item.name">
    </div>
    <br>
    <img class="w-25 mt-4" :src="`${store.imagePath}${project.image}`" :alt="project.title" />
  </div>
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
    this.store.showHeader = true;
  },
};
</script>

<style lang="scss" scoped></style>
