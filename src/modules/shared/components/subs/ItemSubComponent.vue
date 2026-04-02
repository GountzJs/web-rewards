<script setup lang="ts"></script>

<template>
  <div class="item-sub">
    <slot></slot>
  </div>
</template>

<style scoped>
.item-sub {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}
</style>
