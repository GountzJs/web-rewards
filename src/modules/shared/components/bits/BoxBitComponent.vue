<script setup lang="ts">
import ListBitComponent from "./ListBitComponent.vue";
</script>

<template>
  <div class="detail-redeem">
    <p class="title">Donando bits</p>
    <ListBitComponent>
      <slot></slot>
    </ListBitComponent>
  </div>
</template>

<style scoped>
.detail-redeem {
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.detail-redeem .title {
  font-weight: 700;
  font-family: var(--font-nunito);
  font-size: 16px;
  width: 100%;
}
</style>
