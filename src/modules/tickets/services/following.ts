import { ref } from "vue";
import { getFollowing } from "../api/api";
import type { Following } from "../api/entities/following.entity";

export const useFollowing = () => {
  const data = ref<Following | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchData = async (username: string) => {
    isLoading.value = true;
    try {
      const { tickets } = await getFollowing(username);
      data.value = tickets;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error al obtener el ranking";
    }
  };

  return { data, isLoading, error, fetchData };
};
