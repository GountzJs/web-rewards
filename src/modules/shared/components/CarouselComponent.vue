<script setup lang="ts">
import type { Component } from "vue";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  sections: Component[];
}>();

const currentIndex = ref(0);

let intervalId: ReturnType<typeof setInterval> | null = null;

const time = 15000; // 15 segundos

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.sections.length;
  }, time);
};

const stopAutoSlide = () => {
  if (intervalId) clearInterval(intervalId);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

const goTo = (index: number) => {
  currentIndex.value = index;
  stopAutoSlide();
  startAutoSlide();
};
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-content">
      <Transition name="fade" mode="out-in">
        <component :is="sections[currentIndex]" :key="currentIndex" />
      </Transition>
    </div>

    <div class="carousel-pagination">
      <button
        v-for="(_, index) in sections"
        :key="index"
        class="pagination-dot"
        :class="{ active: currentIndex === index }"
        @click="goTo(index)"
        aria-label="Go to slide"
      />
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel-content {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-pagination {
  display: flex;
  gap: 12px;
  padding: 20px;
  position: absolute;
  bottom: 0;
}

.pagination-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-white-20, rgba(255, 255, 255, 0.2));
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.pagination-dot.active {
  background-color: var(--color-white, #ffffff);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.pagination-dot:hover:not(.active) {
  background-color: var(--color-white-40, rgba(255, 255, 255, 0.4));
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
