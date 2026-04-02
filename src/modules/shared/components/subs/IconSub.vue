<script lang="ts" setup>
interface Props {
  name: "sub-1" | "subs-5" | "subs-10" | "subs-20";
  size: number;
}

const { name, size } = defineProps<Props>();
</script>

<template>
  <img :src="`/imgs/gifs/${name}.png`" :width="size" :height="65" alt="Icon Sub" />
</template>

<style scoped>
img {
  object-fit: contain;
}
</style>
