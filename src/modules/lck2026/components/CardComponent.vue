<script lang="ts" setup>
import { cdnUrl } from "@/core/settings";
import FlipedElement from "@/modules/shared/components/FlippedElement.vue";

interface Props {
  background: string;
  cover: string;
}

const { cover, background } = defineProps<Props>();
</script>

<template>
  <FlipedElement width="300px" height="450px" perspective="800px">
    <template v-slot:front>
      <div
        class="front-container"
        :style="{ background: `url('${cdnUrl}${cover}')`, width: '100%', height: '100%' }"
      ></div>
    </template>
    <template v-slot:back>
      <div
        :style="{
          background: `url('${cdnUrl}${background}') center/cover no-repeat`,
          width: '100%',
          height: '100%',
        }"
      ></div>
    </template>
  </FlipedElement>
</template>

<style scoped>
.front-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 18px;
}
</style>
