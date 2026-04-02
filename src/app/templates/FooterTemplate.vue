<script lang="ts" setup>
import { cdnUrl } from "@/core/settings";

const staff = [
  {
    name: "Gountzjs",
    url: "https://github.com/GountzJs",
    image: cdnUrl + "/images/avatars/gountz.avif",
  },
  {
    name: "Su1zide",
    url: "https://www.instagram.com/su1zide/",
    image: cdnUrl + "/images/avatars/su1zide.avif",
  },
  {
    name: "Mari_yusi",
    url: "https://www.instagram.com/mari7_yg13",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/a4c4a605-4488-4f07-8b50-57d514879cba-profile_image-70x70.jpeg",
  },
];
</script>

<template>
  <footer class="footer-container">
    <section class="footer-info">
      <p>
        Inspirado en
        <a href="https://manz.dev/manzcards" target="_blank" rel="noopener noreferrer"> ManzDev </a>
        y
        <a href="https://cards.uxanarangel.com/" target="_blank" rel="noopener noreferrer">
          AnaRangel </a
        >.
      </p>
      <p>
        Mención honorífica a
        <a href="https://uxcorprangel.github.io/" target="_blank" rel="noopener noreferrer">
          UX Corp Rangel
        </a>
        con su increíble trabajo e inspiración dentro de la comunidad dentro de la comunidad.
      </p>
      <p>¡Síguenos en las redes y estén atentos a futuros proyectos! ¡Muchas gracias!</p>
    </section>
    <section class="footer-staff">
      <a href="https://links.embeejayz.com" target="_blank" rel="opener referrer">
        <img
          :src="cdnUrl + '/images/avatars/embeejayz.avif'"
          width="40"
          height="40"
          alt="Avatar de Embeejayz"
        />
      </a>
      <p>El Enjambre:</p>
      <ul>
        <li v-for="(member, index) in staff" :key="index">
          <a :href="member.url" target="_blank" rel="noopener noreferrer">
            <img :src="member.image" width="30" height="30" :alt="`Avatar de ${member.name}`" />
          </a>
        </li>
      </ul>
    </section>
    <p class="footer-disclaimer">
      Embee Recompensas no cuenta con el respaldo de Riot games y no refleja las opiniones ni los
      puntos de vista de Riot games ni de ninguna persona involucrada oficialmente en la producción
      o administración de propiedades de Riot games. Riot games y todas las propiedades asociadas
      son marcas comerciales o marcas comerciales registradas de Riot games, Inc.
    </p>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: var(--color-footer);
  padding: 24px var(--spacing-xl);
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.footer-info p {
  color: var(--color-white);
  font-family: var(--font-nunito);
  font-weight: 400;
  font-size: 16px;
}

.footer-info a {
  text-decoration: none;
  color: var(--color-primary);
  font-family: var(--font-nunito);
  font-weight: 600;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
  }
}

.footer-staff {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.footer-staff p {
  color: var(--color-white);
  font-family: var(--font-nunito);
  font-weight: 600;
  font-size: 14px;
}

.footer-staff ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-staff a {
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
  padding: 2px;
  border-radius: 50%;
  transition: all 200ms ease-in-out;
  & > img {
    border-radius: 50px;
  }
  &:hover {
    box-shadow: 0px 0px 8px var(--color-gen);
    transform: scale(1.05);
  }
}

p {
  text-align: center;
}

.footer-disclaimer {
  color: var(--color-white-80);
  font-family: var(--font-nunito);
  font-weight: 400;
  font-size: 12px;
}
</style>
