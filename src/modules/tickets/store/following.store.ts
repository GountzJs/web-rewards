import { defineStore } from "pinia";
import { ref } from "vue";
import type { Following } from "../api/entities/following.entity";

export const useFollowingStore = defineStore("twitch-following", () => {
  const data = ref<Following | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const setData = (profile: Following) => (data.value = profile);
  const setIsLoading = (value: boolean) => (isLoading.value = value);
  const setError = (value: string | null) => (error.value = value);

  const reset = () => {
    data.value = null;
    isLoading.value = false;
    error.value = null;
  };

  return { data, isLoading, error, setData, setIsLoading, setError, reset };
});
