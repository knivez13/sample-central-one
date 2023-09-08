import { defineStore } from "pinia";
import { cafeteriaFetchAll } from "@/api/cafeteriaApi.js";

export const useCafeteriaStore = defineStore("cafe", {
  state: () => ({
    menu: [],
    user: [],
  }),
  getters: {
    get_menu: (state) => state.menu,
    get_user: (state) => state.user,
  },
  actions: {
    async fetchAll() {
      await cafeteriaFetchAll().then(({ data }) => {
        this.$state.menu = data;
      });
    },
  },
  persist: true,
});
