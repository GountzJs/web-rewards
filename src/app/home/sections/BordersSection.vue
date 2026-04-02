<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="section-container">
    <article class="article-container">
      <hgroup>
        <h1>Bordes clasificatorios</h1>
        <p>
          Coleccionables con los distintos proplayers que han dejado su huella en la escena
          competitiva, destacando sus mejores momentos en diversas competencias internacionales y
          regionales.
        </p>
      </hgroup>

      <div class="info-container">
        <p>
          Ven al stream durante las retransmisiones del competitivo, <br />
          <span>✨</span> ¡entregamos bordes únicos en vivo! <span>✨</span>
        </p>
        <RouterLink to="/recompensas/bordes" class="btn btn-white">Saber más</RouterLink>
      </div>
    </article>
    <img
      class="img-borders"
      src="/imgs/borders.png"
      loading="lazy"
      decoding="async"
      alt="Borders"
      width="400"
      height="387"
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

.img-borders {
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

.info-container span {
  color: var(--color-white);
}

.btn-white {
  text-decoration: none;
}
</style>
