<script lang="ts" setup>
import { useProfileStore } from "@/modules/accounts/store/profile.store.ts";
import ListTickets from "@/modules/tickets/components/ListTickets.vue";
import { storeToRefs } from "pinia";

const profile = useProfileStore();

const { data } = storeToRefs(profile);
</script>

<template>
  <ListTickets v-if="data" :id="data.id" :username="data.username" :avatar="data.avatar" />
</template>

<style scoped></style>
