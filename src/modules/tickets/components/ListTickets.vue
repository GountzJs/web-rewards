<script lang="ts" setup>
import { useTickets } from "../services/tickets";
import TicketComponent from "./TicketComponent.vue";

interface Props {
  id: string;
  username: string;
  avatar: string;
}

const { id, username, avatar } = defineProps<Props>();

const { data, fetchData, error, isLoading } = useTickets();

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
      />
    </div>
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
