<script lang="ts" setup>
import { cdnUrl } from "@/core/settings";
import { rankS7, type TRankS7 } from "@/modules/shared/models/consts/rank-s7.entity";
import { RouterLink } from "vue-router";

interface Props {
  username: string;
  total: number;
  rank: TRankS7;
}

const { username, total, rank } = defineProps<Props>();

const isUnranked = rankS7.unranked === rank;

const sizes = {
  width: isUnranked ? 90 : 80,
  height: isUnranked ? 71 : 80,
};
</script>

<template>
  <RouterLink
    :to="`/perfil/${username.toLowerCase()}`"
    class="preview-ranking"
    :class="`ranking-${rank.toLowerCase()}`"
  >
    <div class="preview-data">
      <img
        :src="cdnUrl + `/images/rank/icon/${rank.toLowerCase()}.webp`"
        :width="sizes.width"
        :height="sizes.height"
        loading="lazy"
        decoding="sync"
      />
      <span class="separator" :class="`separator-${rank.toLowerCase()}`"></span>
      <p class="preview-username">
        {{ username }}
      </p>
      <div class="preview-total">
        <p class="preview-total-points">{{ total }}</p>
        <p class="preview-total-text">Total</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.preview-ranking {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

a {
  align-items: center;
  border-radius: 14px;
  text-decoration: none;
  color: var(--color-white);
  display: flex;
  gap: 10px;
  padding: 6px;
  width: 100%;
  will-change: transform;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.02);
  }
}

.ranking-challenger {
  background: linear-gradient(to right, #fff77f 0%, #9a5c16 50%, #1ba4e3 100%);
}

.ranking-master {
  background: linear-gradient(to right, #4e5b54 0%, #e9b766 50%, #0bbba9 100%);
}

.ranking-diamond {
  background: linear-gradient(to right, #5579cf 0%, #e4cda5 50%, #2d7050 100%);
}

.ranking-platinum {
  background: linear-gradient(to right, #016062 0%, #ede0a3 50%, #665e2e 100%);
}

.ranking-gold {
  background: linear-gradient(to right, #f4efaa 0%, #cc893b 50%, #8a4d1d 100%);
}

.ranking-silver {
  background: linear-gradient(to right, #60736c 0%, #769487 50%, #ccdccd 100%);
}

.ranking-bronze {
  background: linear-gradient(to right, #f5cc91 0%, #956133 50%, #281102 100%);
}

.ranking-unranked {
  background: #bcbcbc;
}

.preview-data {
  align-items: center;
  background-color: var(--color-bg);
  border-radius: 8px;
  display: flex;
  padding: 8px 24px;
  gap: 10px;
  width: 100%;
}

.separator {
  border-radius: 50px;
  height: 70px;
  width: 6px;
}

.separator-challenger {
  background-color: #e7be5c;
}

.separator-master {
  background-color: #74857f;
}

.separator-diamond {
  background-color: #5579cf;
}

.separator-platinum {
  background-color: #016062;
}

.separator-gold {
  background-color: #77070a;
}

.separator-silver {
  background-color: #594b24;
}

.separator-bronze {
  background-color: #e7be5c;
}

.separator-unranked {
  background-color: #68a9a5;
}

.preview-username {
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  font-family: var(--font-nunito);
  height: 100%;
  width: 100%;
}

.preview-total {
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  width: fit-content;
}

.preview-total-points {
  text-align: center;
  font-size: 36px;
  font-weight: 900;
}

.preview-total-text {
  text-align: center;
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 400;
}
</style>
