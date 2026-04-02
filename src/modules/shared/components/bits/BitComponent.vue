<script lang="ts" setup>
interface Props {
  points: number;
  variant: "purple" | "green";
}

const { points, variant } = defineProps<Props>();

const width = variant === "green" ? "30px" : "30px";
const height = variant === "green" ? "30px" : "30px";
</script>

<template>
  <div class="bit">
    <img :src="`/imgs/bit-${variant}.png`" :width="width" :height="height" alt="Bit" />
    <p :class="variant">{{ points }}</p>
  </div>
</template>

<style scoped>
.bit {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

img {
  object-fit: contain;
}

.purple {
  color: var(--color-purple);
  font-weight: 600;
  font-family: var(--font-nunito);
  font-size: 24px;
}

.green {
  color: #00f6da;
  font-weight: 600;
  font-family: var(--font-nunito);
  font-size: 24px;
}
</style>
