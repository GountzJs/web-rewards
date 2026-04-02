import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "icon-svg",
        },
      },
    }),
    vueDevTools(),
    sitemap({
      hostname: "https://coleccionables.embeejayz.com",
      dynamicRoutes: [
        "/",
        "/clasificatoria",
        "/contacto",
        "/recompensas/bordes",
        "/recompensas/cartas",
      ],
      readable: true,
      generateRobotsTxt: false,
      exclude: ["/404"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
