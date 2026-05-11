import { ref } from "vue";
import { getBorders } from "../api/api";
import type { BorderEntity } from "../api/entities/border.entity";
import { BorderMapperFrom } from "../mappers/border.mapper-from";

const borderMapperFrom = new BorderMapperFrom();

export const useBorders = () => {
  const data = ref<BorderEntity[]>([]);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchData = async (id: string, page: number) => {
    isLoading.value = true;
    try {
      const res = await getBorders({ id, page });
      data.value = res.items.map((item: any) => borderMapperFrom.transform(item));
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error al obtener las cartas";
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, error, fetchData };
};
