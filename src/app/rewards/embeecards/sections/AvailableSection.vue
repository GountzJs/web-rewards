<script lang="ts" setup>
import { cdnUrl } from "@/core/settings";
import { computed, ref } from "vue";

const sobres = ["individual.png", "chico.png", "mediano.png", "grande.png"];

const activeIndex = ref(1);

const visibleSobres = computed(() => {
  const total = sobres.length;
  const prev = (activeIndex.value - 1 + total) % total;
  const current = activeIndex.value;
  const next = (activeIndex.value + 1) % total;
  return [
    { sobre: sobres[prev]!, position: "left" as const, index: prev },
    { sobre: sobres[current]!, position: "center" as const, index: current },
    { sobre: sobres[next]!, position: "right" as const, index: next },
  ];
});

function prev() {
  activeIndex.value = (activeIndex.value - 1 + sobres.length) % sobres.length;
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % sobres.length;
}

defineExpose({ activeIndex });
</script>

<template>
  <section class="available">
    <h1>Sobres disponibles</h1>
    <div class="carousel-container">
      <button class="nav-btn" @click="prev">
        <icon-svg name="chevron" color="var(--color-primary)" size="60px" style="rotate: 90deg" />
      </button>
      <div class="carousel-track">
        <div
          v-for="item in visibleSobres"
          :key="item.index"
          class="carousel-item"
          :class="item.position"
        >
          <img
            :src="`${cdnUrl}/images/sobres/${item.sobre}`"
            :alt="`Sobre ${item.sobre.replace('.png', '')}`"
          />
        </div>
      </div>
      <button class="nav-btn" @click="next">
        <icon-svg name="chevron" color="var(--color-primary)" size="60px" style="rotate: -90deg" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.available {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 100%;
  min-height: calc(100dvh - 180px);
  width: 100%;
}

.available h1 {
  font-family: var(--font-nunito);
  font-size: 36px;
  font-weight: 800;
}

.carousel-container {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 60px;
  height: 100%;
  width: 100%;
}

.carousel-track {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 60px;
  position: relative;
}

.carousel-item {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease;
}

.carousel-item img {
  display: block;
  object-fit: contain;
}

.carousel-item.center {
  z-index: 2;
}

.carousel-item.center img {
  height: 450px;
}

.carousel-item.left,
.carousel-item.right {
  z-index: 1;
}

.carousel-item.left img,
.carousel-item.right img {
  height: 350px;
  opacity: 0.85;
}

.carousel-item.left {
  margin-right: -20px;
}

.carousel-item.right {
  margin-left: -20px;
}

.nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.nav-btn:hover {
  transform: scale(1.15);
}

.nav-btn:active {
  transform: scale(0.95);
}
</style>
