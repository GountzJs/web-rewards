<script lang="ts" setup>
import ListRanking from "@/modules/accounts/components/ListRanking.vue";
import ListRankingSkeleton from "@/modules/accounts/components/ListRankingSkeleton.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense } from "vue";
</script>

<template>
  <main class="main-container">
    <hgroup class="group-container">
      <h1>Los pilares de nuestra comunidad</h1>
      <p>¡Gracias por formar parte de este proyecto!</p>
    </hgroup>
    <Suspense>
      <ListRanking />
      <template #fallback>
        <ListRankingSkeleton />
      </template>
    </Suspense>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 var(--spacing-xl);
  padding-bottom: 40px;
  height: 100%;
  width: 100%;
}

.group-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.group-container h1 {
  font-family: var(--font-nunito);
  font-size: 36px;
  font-weight: 800;
}

.group-container p {
  font-family: var(--font-nunito);
  font-size: 24px;
  font-weight: 500;
  color: var(--color-white-80);
}
</style>
