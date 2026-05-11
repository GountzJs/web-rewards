<script lang="ts" setup>
import { useBorders } from "../services/borders.service";
import BorderRank from "./BorderRank.vue";

interface Props {
  id: string;
  avatar: string;
  username: string;
}

const { id, avatar, username } = defineProps<Props>();

const { data, fetchData, error, isLoading } = useBorders();

fetchData(id, 1);
</script>

<template>
  <p v-if="isLoading">Buscando bordes...</p>
  <p v-else-if="error"></p>
  <div v-else-if="data.length" class="container">
    <BorderRank
      v-for="border in data"
      :cover="border.cover"
      :avatar="avatar"
      :username="username"
      :rank="border.getLower()"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  height: fit-content;
  width: 100%;
}
</style>
