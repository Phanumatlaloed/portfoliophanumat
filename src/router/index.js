import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import ProjectDetail from "../views/ProjectDetail.vue";
import Experience from "../views/Experience.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/projects/:id",
    component: ProjectDetail,
  },
  {
    path: "/experience",
    component: Experience,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;