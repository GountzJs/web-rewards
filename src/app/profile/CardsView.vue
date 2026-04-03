<script lang="ts" setup>
import { useProfileStore } from "@/modules/accounts/store/profile.store";
import ListLck2026Cards from "@/modules/lck2026/components/ListLck2026Cards.vue";
import { storeToRefs } from "pinia";

const profile = useProfileStore();

const { data } = storeToRefs(profile);
</script>

<template>
  <ListLck2026Cards v-if="data" :id="data.id" />
</template>

<style scoped></style>
