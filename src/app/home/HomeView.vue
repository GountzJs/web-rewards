<script setup lang="ts">
import CarouselComponent from "@/modules/shared/components/CarouselComponent.vue";
import BordersSection from "./sections/BordersSection.vue";
import EmbeeecardsSection from "./sections/EmbeeecardsSection.vue";
import PresentationSection from "./sections/PresentationSection.vue";

const sections = [PresentationSection, EmbeeecardsSection, BordersSection];
</script>

<template>
  <main class="main-container">
    <CarouselComponent :sections="sections" />
  </main>
</template>

<style scoped>
.main-container {
  padding-inline: var(--spacing-xl);
  height: 100%;
  width: 100%;
}
</style>
