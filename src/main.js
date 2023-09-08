import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

import App from "@/layouts/App.vue";
import router from "./router";

const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

const app = createApp(App);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(router);
app.use(pinia);
app.mount("#app");
