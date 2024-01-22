<template>
  <Header v-if="store.showHeader"></Header>
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
    };
  },
  components: {
    Header,
  },
  methods: {},
  mounted() { },
};
</script>

<style lang="scss" scoped>
@use "@/assets/style/partials/variables" as *;
</style>
