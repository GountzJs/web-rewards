<script lang="ts" setup></script>

<template>
  <article class="disclaimer-alert">
    <p class="disclaimer-alert-title">Aviso importante:</p>
    <p class="disclaimer-alert-text">
      Las recompensas obtenidas en esta plataforma son recompensas coleccionables y no tienen
      <span>valor monetario real</span>. No pueden ser comprados, vendidos, intercambiados ni
      canjeados por dinero, bienes o servicios, ni dentro de esta aplicación ni fuera de ella. Esta
      plataforma <span>no está afiliada, respaldada ni operada por Riot Games</span>. League of
      legends ® y todos sus activos son propiedad de Riot Games, Inc.
    </p>
  </article>
</template>

<style scoped>
.disclaimer-alert {
  display: flex;
  flex-direction: column;
  gap: 10px;
  outline: 4px solid var(--color-primary);
  padding: 12px 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
}

.disclaimer-alert-title {
  color: var(--color-primary);
  font-family: var(--font-nunito);
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  width: 100%;
}

.disclaimer-alert-text {
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  width: 100%;
}

.disclaimer-alert-text span {
  font-weight: 700;
}
</style>
