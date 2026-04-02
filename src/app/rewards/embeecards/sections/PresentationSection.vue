<script lang="ts" setup></script>

<template>
  <section class="presentation">
    <h1>¡Las cartas de nuestra comunidad!</h1>
    <div class="presentation-info-container">
      <article class="presentation-info">
        <h2>¿Cómo funcionan las cartas?</h2>
        <p>
          Las cartas de categorías comunes se obtienen al <span>donar bits</span> en el stream, con
          excepción de las de categoría única, que se <span>regalan</span> a los presentes del
          stream durante eventos especiales.
        </p>
        <p>
          Según la <span>cantidad</span> de bits donados, se pueden canjear
          <span>distintos tamaños de sobres de cartas</span>, las cartas son aleatorias y pueden
          repetirse. <br />
          Cada una puede salirte hasta <span>5 veces</span>, mientras más repetidas, se le otorga
          una mayor exclusividad al interactuar con ella. A esta capacidad de repetirse la llamamos
          <span>Nivel de Holografía</span>.
        </p>
      </article>
      <img
        class="embeecard-preview"
        src="/imgs/avatar-shaco.png"
        loading="eager"
        decoding="sync"
        width="250"
        height="450"
        alt="Embeecards Preview"
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

.embeecard-preview {
  object-fit: contain;
  width: 250px;
}
</style>
