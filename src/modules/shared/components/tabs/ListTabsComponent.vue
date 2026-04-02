<script lang="ts" setup></script>

<template>
  <div class="list-tabs">
    <slot />
  </div>
</template>

<style scoped>
.list-tabs {
  border-bottom: 2px solid var(--color-white-20);
  display: flex;
  gap: 14px;
  width: 100%;
}
</style>
