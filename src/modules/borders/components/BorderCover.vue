<script lang="ts" setup>
import { cdnUrl } from "@/core/settings";

interface Props {
  rank: string;
}

const { rank } = defineProps<Props>();

const url = `${cdnUrl}/images/rank/borders/${rank}.webp`;
</script>

<template>
  <img :src="url" alt="Border" class="img-cover" />
</template>

<style scoped>
.img-cover {
  aspect-ratio: 415/744;
  height: 450px;
}
</style>
