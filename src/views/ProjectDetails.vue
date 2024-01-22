<template>
  <div>Show</div>
  <!-- <div>{{ project.title }}</div> -->
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
        .get(store.apiURL + "projects/" + this.$route.params.slug)
        .then((res) => {
          this.project = res.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
