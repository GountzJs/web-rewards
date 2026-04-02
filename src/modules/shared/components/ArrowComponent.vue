<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const isShow = ref(false);

const handleScroll = () => {
  isShow.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <button type="button" class="btn" :class="{ active: isShow }" @click="goToTop">
    <img src="/svgs/exp-icon.svg" class="exp-icon" width="40" height="36" alt="Exp Icon" />
  </button>
</template>

<style scoped>
.btn {
  bottom: 20px;
  position: fixed;
  right: 20px;
  opacity: 0;
  transition: opacity 400ms ease-in-out;
  animation: move-arrow 2s ease-in-out infinite;
  &:hover {
    animation-play-state: paused;
  }
}

.btn.active {
  opacity: 1;
}

.exp-icon {
  filter: drop-shadow(0px 0px 24px #cb222d);
}

@keyframes move-arrow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
