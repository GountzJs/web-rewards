<script lang="ts" setup>
import { RouterLink } from "vue-router";

interface Props {
  isActive: boolean;
  to: string;
}

const { isActive, to } = defineProps<Props>();
</script>

<template>
  <RouterLink :to="to" class="item-nav" :class="{ active: isActive }">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.item-nav {
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white-60);
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: color 200ms ease-in;
  &:hover {
    color: var(--color-primary);
  }
}

.item-nav.active {
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}
</style>
