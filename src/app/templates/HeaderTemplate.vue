<script lang="ts" setup>
import DropdownComponent from "@/modules/shared/components/DropdownComponent.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header-container">
    <nav class="header-nav">
      <RouterLink to="/" class="header-nav-link">INICIO</RouterLink>
      <RouterLink to="/clasificatoria" class="header-nav-link">CLASIFICATORIA</RouterLink>

      <DropdownComponent>
        <template #trigger="{ isOpen }">
          <div class="btn-rewards" :class="{ active: isOpen }">
            RECOMPENSAS
            <icon-svg
              name="chevron"
              size="12px"
              color="var(--color-white)"
              class="icon-rotate"
              :class="{ rotate: isOpen }"
            ></icon-svg>
          </div>
        </template>

        <RouterLink to="/recompensas/bordes" class="dropdown-item">Borders</RouterLink>
        <RouterLink to="/recompensas/embeecards" class="dropdown-item">Embeecards</RouterLink>
      </DropdownComponent>
    </nav>
    <slot />
  </header>
</template>

<style scoped>
.header-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px var(--spacing-xl);
}

.header-nav {
  display: flex;
  gap: 24px;
}

.header-nav-link {
  align-items: center;
  display: flex;
  gap: 6px;
  color: var(--color-white);
  opacity: 0.6;
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 150ms ease-in;
  &:hover {
    opacity: 1;
  }
}

.btn-rewards {
  color: var(--color-white);
  font-family: var(--font-nunito);
  opacity: 0.6;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 150ms ease-in;
  &:hover {
    opacity: 1;
  }
  &:not(:disabled):hover {
    transform: scale(1);
  }
  &.active {
    opacity: 1;
  }
}

.icon-rotate {
  transition: transform 200ms ease-in;
}

.rotate {
  transform: rotate(-90deg);
}

.chevron-icon {
  transition: transform 0.3s ease;
}
</style>
