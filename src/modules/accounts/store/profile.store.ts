import { defineStore } from "pinia";
import { ref } from "vue";
import type { UserProfileEntity } from "../api/entities/user-profile.entity";

export const useProfileStore = defineStore("user-profile", () => {
  const data = ref<UserProfileEntity | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const setData = (profile: UserProfileEntity) => (data.value = profile);
  const setIsLoading = (value: boolean) => (isLoading.value = value);
  const setError = (value: string | null) => (error.value = value);

  const reset = () => {
    data.value = null;
    isLoading.value = false;
    error.value = null;
  };

  return { data, isLoading, error, setData, setIsLoading, setError, reset };
});
