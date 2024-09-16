import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import InteriorView from "@/views/InteriorView.vue";
import ExteriorView from "@/views/ExteriorView.vue";
import ContactsView from "@/views/ContactsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/interior",
    name: "Interior",
    component: InteriorView,
  },
  {
    path: "/exterior",
    name: "Exterior",
    component: ExteriorView,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
