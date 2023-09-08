import { defineStore } from "pinia";
import { login } from "@/api/authApi.js";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authorization: null,
    user: [],
  }),
  getters: {
    get_authorization: (state) => state.authorization,
    get_user: (state) => state.user,
  },
  actions: {
    async loginUser(res) {
      await login(res).then(({ data }) => {
        this.$state.authorization = data.token;
        this.$state.user = data.user;
        router.push("/dashboard");
      });
    },
    async logoutUser() {
      this.$state.authorization = null;
      this.$state.user = [];
      router.push("/");
    },

    clear() {
      this.$state.authorization = null;
      this.$state.user = [];
    },
  },
  persist: true,
});
