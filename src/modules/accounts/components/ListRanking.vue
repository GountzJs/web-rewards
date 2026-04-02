<script lang="ts" setup>
import { useRanking } from "@/modules/accounts/services/ranking.ts";
import PreviewRanking from "./PreviewRanking.vue";

const { fetchData, error, data } = useRanking();

await fetchData();
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <ul v-else>
    <li v-for="{ id, username, total, rank } in data" :key="id">
      <PreviewRanking :username="username" :total="total.borders + total.cards" :rank="rank!" />
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
