import BaseLayout from "@/app/BaseLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "base-layout",
      component: BaseLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/app/home/HomeView.vue"),
        },
        {
          path: "/clasificatoria",
          name: "ranking",
          component: () => import("@/app/ranking/RankingView.vue"),
        },
        {
          path: "/recompensas",
          name: "recompensas",
          children: [
            {
              path: "bordes",
              name: "rewards-borders",
              component: () => import("@/app/rewards/borders/BordersView.vue"),
            },
            {
              path: "embeecards",
              name: "rewards-embeecards",
              component: () => import("@/app/rewards/embeecards/EmbeecardsView.vue"),
            },
          ],
        },
        {
          path: "/perfil/:username",
          name: "profile",
          component: () => import("@/app/profile/ProfileLayout.vue"),
          children: [
            {
              path: "",
              name: "tickets",
              component: () => import("@/app/profile/TicketsView.vue"),
            },
            {
              path: "borders",
              name: "borders",
              component: () => import("@/app/profile/BordersView.vue"),
            },
            {
              path: "cards",
              name: "cards",
              component: () => import("@/app/profile/CardsView.vue"),
            },
            {
              path: "albumes",
              name: "albumes",
              component: () => import("@/app/profile/AlbumesView.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
