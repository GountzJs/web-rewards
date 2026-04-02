<script setup lang="ts"></script>

<template>
  <div class="item-bit">
    <slot></slot>
  </div>
</template>

<style scoped>
.item-bit {
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}
</style>
