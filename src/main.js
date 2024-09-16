import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import WelcomePhoto from "./components/WelcomePhoto.vue";
import HeaderElement from "./components/HeaderElement.vue";
import CardItem from "./components/CardItem.vue";
import Aura from "@primevue/themes/aura";
import router from "./router";
import "./main.css";

const app = createApp(App);
app.component("welcome-photo", WelcomePhoto);
app.component("header-element", HeaderElement);
app.component("card-item", CardItem);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.mount("#app");
