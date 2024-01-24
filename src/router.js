import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import ProjectDetails from "./views/ProjectDetails.vue";
import NotFound from "./views/NotFound.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/project/:slug",
      name: "project-details",
      component: ProjectDetails,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contact,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
