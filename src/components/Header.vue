<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="(item, index) in menu" :key="index">
          <router-link active-class="active" class="nav-link" :to="{ name: item.name }">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [
        {
          label: "Home",
          name: "home",
        },
        {
          label: "Projects",
          name: "projects",
        },
        {
          label: "Contacts",
          name: "contacts",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
