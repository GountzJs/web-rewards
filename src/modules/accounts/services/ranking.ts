import { ref } from "vue";
import { rankingAdapter } from "../api/adapters/ranking.adapter";
import { getRanking } from "../api/api";
import type { UserRankingEntity } from "../api/entities/user-ranking.entity";

export const useRanking = () => {
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const data = ref<UserRankingEntity[] | null>(null);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const ranking = await getRanking();
      data.value = rankingAdapter(ranking);
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error al obtener el ranking";
    } finally {
      isLoading.value = false;
    }
  };

  return { fetchData, data, error, isLoading };
};
