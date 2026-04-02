<script lang="ts" setup>
import { useProfileStore } from "@/modules/accounts/store/profile.store.ts";
import { useFollowingStore } from "@/modules/tickets/store/following.store.ts";
import ListTickets from "@/modules/tickets/components/ListTickets.vue";
import { getFollowing } from "@/modules/tickets/api/api.ts";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";

const profile = useProfileStore();
const followingStore = useFollowingStore();
const { setIsLoading, setData, reset } = followingStore;

const { data } = storeToRefs(profile);

const username = computed(() => data?.value?.username);

const loadFollowing = (username: string) => {
  setIsLoading(true);
  getFollowing(username)
    .then((res) => setData(res))
    .finally(() => setIsLoading(false));
};

watch(
  () => username.value,
  (newUsername) => {
    if (!newUsername) return;
    reset();
    loadFollowing(newUsername);
  },
  { immediate: true },
);
</script>

<template>
  <ListTickets
    v-if="data"
    :id="data.id"
    :username="data.username"
    :avatar="data.avatar"
    :team="data.team"
  />
</template>

<style scoped></style>
