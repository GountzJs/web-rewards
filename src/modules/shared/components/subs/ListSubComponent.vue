<script setup lang="ts"></script>

<template>
  <div class="list-items">
    <slot></slot>
  </div>
</template>

<style scoped>
.list-items {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.list-items p {
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 4px;
}
</style>
