import { ref } from "vue";
import { getTickets } from "../api/api";
import type { TicketEntity } from "../api/entities/ticket.entity";

export const useTickets = () => {
  const data = ref<TicketEntity[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchData = async (id: string) => {
    isLoading.value = true;
    try {
      const tickets = await getTickets(id);
      data.value = tickets;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error al obtener el ranking";
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, error, fetchData };
};
