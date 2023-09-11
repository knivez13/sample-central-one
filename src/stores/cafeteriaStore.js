import { defineStore } from "pinia";
import {
  cafeteriaFetchAll,
  cafeteriaShedFetchAll,
  cafeteriaShedFetchBydateAll,
  cafeteriaShedTodayFetchAll,
} from "@/api/cafeteriaApi.js";

export const useCafeteriaStore = defineStore("cafe", {
  state: () => ({
    menu: [],
    shed_menu: [],
    user: [],
  }),
  getters: {
    get_menu: (state) => state.menu,
    get_shed_menu: (state) => state.shed_menu,
    get_user: (state) => state.user,
  },
  actions: {
    async fetchAll() {
      await cafeteriaFetchAll().then(({ data }) => {
        this.$state.menu = data;
      });
    },
    async fetchShedAll() {
      await cafeteriaShedFetchAll().then(({ data }) => {
        this.$state.shed_menu = data;
      });
    },
    async fetchShedByidAll(res) {
      await cafeteriaShedFetchBydateAll(res).then(({ data }) => {
        console.log(data);
        this.$state.shed_menu = data;
      });
    },
    async fetchShedShowidAll() {
      await cafeteriaShedTodayFetchAll().then(({ data }) => {
        this.$state.shed_menu = data;
      });
    },
  },
  persist: true,
});
