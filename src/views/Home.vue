<template>
  <div>Home</div>
  <button class="btn btn-primary">
    <router-link :to="{ name: 'Projects' }"></router-link>
  </button>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
