<script lang="ts" setup>
import { useTickets } from "../services/tickets";
import TicketComponent from "./TicketComponent.vue";
import { useFollowingStore } from "../store/following.store";
import { storeToRefs } from "pinia";

interface Props {
  id: string;
  username: string;
  avatar: string;
  team: string | null;
}

const { id, username, avatar, team } = defineProps<Props>();

const { data, fetchData, error, isLoading } = useTickets();

const followingStore = useFollowingStore();

const { data: following } = storeToRefs(followingStore);

fetchData(id);
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <p v-else-if="isLoading">Buscando tickets...</p>
  <article v-else class="tickets-container">
    <div v-for="(ticket, index) in data" :key="index">
      <TicketComponent
        :cover="ticket.cover"
        :name="ticket.name"
        :hourMx="ticket.hourMx"
        :hourArg="ticket.hourArg"
        :date="ticket.date"
        :url="ticket.url"
        :username="username"
        :avatar="avatar"
        :team="team"
        :followingAt="following?.followedAt || null"
      />
    </div>
    <p v-if="!data.length">No tienes tickets aún</p>
  </article>
</template>

<style scoped>
.tickets-container {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  & > div {
    height: fit-content;
    width: fit-content;
  }
}
</style>
