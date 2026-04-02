<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="dropdown-wrapper" ref="dropdownRef">
    <div class="dropdown-trigger" @click="toggleDropdown">
      <slot name="trigger" :isOpen="isOpen" />
    </div>

    <transition name="dropdown-fade">
      <button v-if="isOpen" type="button" class="dropdown-menu" @click="closeDropdown">
        <slot />
      </button>
    </transition>
  </div>
</template>

<style scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  cursor: pointer;
}

.dropdown-menu {
  background: var(--color-footer);
  border: none;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 12px);
  min-width: 160px;
  text-align: left;
  padding: 4px;
  z-index: 1;
}

:deep(.dropdown-item) {
  border-radius: 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 200ms ease;
  display: block;
  padding: 10px 6px;
  color: #ffffff;
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 600;
  width: 100%;
}

:deep(.dropdown-item:hover) {
  background: rgba(255, 255, 255, 0.05);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
