<script lang="ts" setup></script>

<template>
  <section class="presentation">
    <h1>¡Los bordes de nuestra comunidad!</h1>
    <div class="presentation-info-container">
      <article class="presentation-info">
        <h2>¿Cómo funcionan los bordes?</h2>
        <p>
          Con un marco clasificatorio basado en la cantidad de bordes repetidos,
          <span>se adapta a tu avatar y usuario de Twitch</span>, además de incluir hechizos
          <span>personalizables</span>.
        </p>
        <p>
          Son coleccionables con los distintos proplayers que han dejado su huella en la escena
          competitiva, destacando sus mejores momentos en diversas competencias internacionales y
          locales.
        </p>
        <p>
          Los marcos poseen la clasificación de la temporada 7: Challenger, Maestro, Diamante,
          Platino, Oro, Plata y Bronce.
        </p>
      </article>
      <img
        class="border-preview"
        src="/imgs/borders/challenger.png"
        loading="eager"
        decoding="sync"
        width="250"
        height="450"
        alt="Borders Preview"
      />
    </div>
  </section>
</template>

<style scoped>
.presentation {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100dvh - 170px);
  width: 100%;
}

.presentation h1 {
  font-family: var(--font-nunito);
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  width: 100%;
}

.presentation-info-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.presentation-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 800px;
}

.presentation-info h2 {
  font-family: var(--font-nunito);
  font-size: 24px;
  font-weight: 700;
}

.presentation-info p {
  font-family: var(--font-nunito);
  color: var(--color-white-80);
  font-size: 20px;
  font-weight: 500;
}

.presentation-info p span {
  color: var(--color-white);
  font-weight: 600;
}

.border-preview {
  object-fit: contain;
  width: 250px;
}
</style>
