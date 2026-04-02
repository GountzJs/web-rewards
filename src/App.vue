<script setup lang="ts">
import "modern-normalize";
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style global>
@import url("/css/design-tokens/colors.css");
@import url("/css/design-tokens/fonts.css");
@import url("/css/buttons.css");
@import url("/css/inputs.css");

:root {
  --spacing-xl: 190px;
  --spacing-lg: 40px;
  --spacing-xs: 20px;
}

html,
body {
  color-scheme: dark;
  background-color: var(--color-bg);
  margin: 0;
  scroll-behavior: smooth;
  scrollbar-color: var(--color-primary) transparent;
  scrollbar-width: thin;
  height: 100%;
  width: 100%;
}

body {
  font-family: var(--font-nunito);
}

#app {
  height: 100%;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 1024px) {
  :root {
    --spacing-xl: 40px;
  }
}

@media screen and(max-width: 768px) {
  :root {
    --spacing-xl: 20px;
  }
}
</style>
