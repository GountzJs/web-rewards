import { icons } from "@/modules/shared/consts/icons";
import { registry } from "@gountzjs/icon-svg";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

async function enableMocking() {
  const isDevMode = import.meta.env.VITE_PUBLIC_NODE_ENV === "development";

  if (!isDevMode) return;

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

const pinia = createPinia();

const app = createApp(App);

registry.addIcons(icons);

enableMocking()
  .then(() => {
    app.use(router);
    app.use(pinia);
    app.mount("#app");
  })
  .catch((error) => {
    throw new Error("Failed to enable mocking: " + error);
  });
