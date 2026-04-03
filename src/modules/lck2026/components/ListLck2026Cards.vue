<script lang="ts" setup>
import { useCards } from "../services/cards.service";
import CardComponent from "./CardComponent.vue";

interface Props {
  id: string;
}

const { id } = defineProps<Props>();

const { data, fetchData, error, isLoading } = useCards();

fetchData(id);
</script>

<template>
  <p v-if="error"></p>
  <p v-else-if="isLoading">Buscando cartas...</p>
  <article v-else class="cards-container">
    <div v-for="(card, index) in data" :key="index">
      <CardComponent :cover="card.cover" :background="card.background" />
    </div>
    <p v-if="!data?.length">No tienes cartas canjeadas aún</p>
  </article>
</template>

<style scoped>
.cards-container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  & > div {
    height: fit-content;
    width: fit-content;
  }
}
</style>
