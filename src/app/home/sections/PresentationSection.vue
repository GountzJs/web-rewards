<script lang="ts" setup>
type Social = {
  name: string;
  url: string;
  icon: string;
  size: string;
  rel: string;
};

const socials: Social[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/embeejayz",
    icon: "instagram",
    size: "20px",
    rel: "noopener noreferrer",
  },
  {
    name: "Twitter",
    url: "https://x.com/EmBeeJay_",
    icon: "twitter",
    size: "18px",
    rel: "noopener noreferrer",
  },
  {
    name: "Más redes",
    url: "https://links.embeejayz.com",
    icon: "attach",
    size: "20px",
    rel: "opener referrer",
  },
];
</script>

<template>
  <section class="section-container">
    <article class="article-container">
      <hgroup>
        <h1>¡Bienvenido a nuestra comunidad!</h1>
        <p>
          Gracias por cada aporte al canal. Creamos esta plataforma para que tu ayuda valga aún más,
          en esta web vas a encontrar coleccionables inspirados en la escena competitiva de
          <strong>League of Legends</strong> y en <strong>Embeejayz</strong>.
        </p>
      </hgroup>

      <div class="twitch-container">
        <p>¡Los esperamos en las siguientes transmisiones del competitivo!</p>
        <a
          href="https://twitch.tv/embeejayz"
          class="btn btn-twitch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <icon-svg name="twitch" color="#fff" size="19px"></icon-svg>
          Embeejayz
        </a>
      </div>

      <ul class="list-container">
        <li v-for="social in socials" :key="social.name">
          <a :href="social.url" target="_blank" :rel="social.rel">
            <icon-svg :name="social.icon" color="#fff" :size="social.size"></icon-svg>
            {{ social.name }}
          </a>
        </li>
      </ul>
    </article>
    <img
      class="img-presentation"
      src="/svgs/presentation.svg"
      loading="eager"
      decoding="async"
      width="401"
      height="400"
      alt="T1 Embeejayz Avatar"
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

.twitch-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.twitch-container p {
  text-align: center;
  color: var(--color-white-60);
  font-size: 24px;
  font-weight: 400;
  font-family: var(--font-nunito);
  text-wrap: pretty;
}

.btn-twitch {
  text-decoration: none;
}

.list-container {
  align-items: center;
  justify-content: center;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 24px;
  width: 100%;
}

.list-container li a {
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 6px;
  text-decoration: none;
  color: var(--color-white);
  opacity: 0.6;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-nunito);
  transition: opacity 150ms ease-in;
  &:hover {
    opacity: 1;
  }
}

.img-presentation {
  height: fit-content;
  width: 600px;
  max-width: 50%;
}
</style>
