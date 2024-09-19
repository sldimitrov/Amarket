import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import VeeValidatePlugin from "./plugin/VeeValidatePlugin";
import router from "./router";
import "./main.css";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.use(VeeValidatePlugin);
app.mount("#app");
