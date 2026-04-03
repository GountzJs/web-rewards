import { ref } from "vue";
import { getCards } from "../api/api";
import type { CardEntity } from "../api/entities/card.entity";

export const useCards = () => {
  const data = ref<CardEntity[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchData = async (id: string) => {
    isLoading.value = true;
    try {
      const cards = await getCards(id);
      data.value = cards;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error al obtener las cartas";
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, error, fetchData };
};
