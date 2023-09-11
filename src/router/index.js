import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/food-survey",
      name: "food-survey",
      component: () => import("@/views/Food.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("@/layouts/DashboardLayout.vue"),
      children: [
        {
          name: "dashboard",
          path: "/dashboard/home",
          component: () => import("@/views/dashboard/Dashboard.vue"),
        },
        {
          name: "cafeteria-rating",
          path: "/administrator/rating/cafeteria",
          component: () =>
            import(
              "@/views/dashboard/administrator/rating/cafeteria/Cafeteria.vue"
            ),
        },
        {
          name: "cafeteria-schedule",
          path: "/administrator/rating/schedules",
          component: () =>
            import(
              "@/views/dashboard/administrator/rating/cafeteria/MenuSched.vue"
            ),
        },
      ],
    },
  ],
});
export default router;
