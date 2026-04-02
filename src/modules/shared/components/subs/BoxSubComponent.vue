<script setup lang="ts">
import ListSubComponent from "./ListSubComponent.vue";

interface Props {
  detail: string;
}

const { detail } = defineProps<Props>();
</script>

<template>
  <div class="detail-redeem">
    <p class="title">{{ detail }}</p>
    <ListSubComponent>
      <slot></slot>
    </ListSubComponent>
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
  font-weight: 600;
  font-family: var(--font-nunito);
  font-size: 16px;
  width: 100%;
}
</style>
