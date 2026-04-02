<script lang="ts" setup>
import { getRanking } from "@/modules/accounts/api/api";
import { ref } from "vue";
import { rankingAdapter } from "../api/adapters/ranking.adapter";
import type { UserRankingEntity } from "../api/entities/user-ranking.entity";
import PreviewRanking from "./PreviewRanking.vue";

const error = ref<string | null>(null);
const ranking = ref<UserRankingEntity[] | null>(null);

try {
  const data = await getRanking();
  ranking.value = rankingAdapter(data);
} catch (err) {
  error.value = err instanceof Error ? err.message : "Error al obtener el ranking";
}
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <ul v-else>
    <li v-for="{ id, username, total, rank } in ranking" :key="id">
      <PreviewRanking :username="username" :total="Number(total.borders) + Number(total.cards)" :rank="rank!" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;
  width: 100%;
}

li {
  max-width: 800px;
  width: 100%;
}
</style>
