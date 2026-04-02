<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="section-container">
    <article class="article-container">
      <hgroup>
        <h1>EmbeeCards</h1>
        <p>
          Convertimos nuestra pasión por T1, la escena competitiva y League of Legends® en algo más
          que simples recuerdos o clips.
        </p>
      </hgroup>

      <div class="info-container">
        <p>
          Ahora pueden disfrutar canjeando y descubriendo, a través de estos packs de cartas, tanto
          la historia de League of Legends® como la de nuestra comunidad.
        </p>
        <RouterLink to="/recompensas/embeecards" class="btn btn-white">Saber más</RouterLink>
      </div>
    </article>
    <img
      class="img-cards"
      src="/imgs/cards.png"
      loading="lazy"
      decoding="async"
      alt="Borders"
      width="800"
      height="525"
    />
  </section>
</template>

<style scoped>
.section-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;
  width: 100%;
  height: 100%;
}

.article-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

hgroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

hgroup h1 {
  text-align: center;
  color: var(--color-white);
  font-size: 36px;
  font-weight: 800;
  font-family: var(--font-nunito);
  text-wrap: balance;
}

hgroup p {
  text-align: center;
  color: var(--color-white-60);
  font-size: 24px;
  font-weight: 400;
  font-family: var(--font-nunito);
  text-wrap: pretty;
}

hgroup strong {
  color: var(--color-primary);
  font-weight: 500;
}

.img-cards {
  height: fit-content;
  width: 600px;
  max-width: 50%;
}

.info-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-container p {
  text-align: center;
  color: var(--color-white-60);
  font-size: 24px;
  font-weight: 400;
  font-family: var(--font-nunito);
}

.btn-white {
  text-decoration: none;
}
</style>
