<script setup lang="ts">
import { cdnUrl } from "@/core/settings";
import { storeToRefs } from "pinia";
import { useSpellsStore } from "../store/spell.store";
import BorderCover from "./BorderCover.vue";

interface Props {
  cover: string;
  avatar: string;
  rank: string;
  username: string;
}

const { cover, avatar, rank, username } = defineProps<Props>();

const profile = useSpellsStore();
const { data } = storeToRefs(profile);

const backgroundUrl = `${cdnUrl}${cover}`;

const spellLeftUrl = `${cdnUrl}/images/spells/${data.value.getLeftLower()}.jpg`;
const spellRightUrl = `${cdnUrl}/images/spells/${data.value.getRightLower()}.jpg`;
</script>

<template>
  <div class="border-container">
    <img :src="backgroundUrl" class="img-pro" alt="Imagen proplayer" />
    <img :src="avatar" alt="Twitch Avatar" class="user-avatar" />
    <div class="spells-container">
      <img :src="spellLeftUrl" alt="" />
      <img :src="spellRightUrl" alt="" />
    </div>
    <BorderCover class="border-cover" :rank="rank" />
    <p class="user-username">{{ username }}</p>
  </div>
</template>

<style scoped>
.border-container {
  position: relative;
}

.img-pro {
  position: absolute;
  top: 12px;
  left: 21px;
  width: 212px;
}

.user-avatar {
  position: absolute;
  bottom: 16px;
  left: 16px;
  height: 55px;
}

.spells-container {
  display: flex;
  gap: 7px;
  position: absolute;
  bottom: 24px;
  left: 76px;
  & img {
    height: 38px;
    width: 35px;
  }
}

.border-cover {
  position: relative;
}

.user-username {
  position: absolute;
  bottom: 75px;
  left: 0;
  padding-inline: 24px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font-poppins);
  width: 100%;
}
</style>
