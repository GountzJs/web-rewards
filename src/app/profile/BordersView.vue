<script lang="ts" setup>
import { useProfileStore } from "@/modules/accounts/store/profile.store";
import LIstBorderRank from "@/modules/borders/components/LIstBorderRank.vue";
import { storeToRefs } from "pinia";

const profile = useProfileStore();
const { data } = storeToRefs(profile);
</script>

<template>
  <LIstBorderRank v-if="data" :id="data.id" :avatar="data.avatar" :username="data.username" />
</template>

<style scoped></style>
