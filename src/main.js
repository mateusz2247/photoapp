import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.min.css'
import 'primeflex/primeflex.css'
import "animate.css/animate.min.css";
import "./styles/global.scss";
createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
