<script lang="ts" setup>
import { getProfile } from "@/modules/accounts/api/api";
import UserDetail from "@/modules/accounts/components/UserDetail.vue";
import { useProfileStore } from "@/modules/accounts/store/profile.store";
import ListTabsComponent from "@/modules/shared/components/tabs/ListTabsComponent.vue";
import TabComponent from "@/modules/shared/components/tabs/TabComponent.vue";
import { storeToRefs } from "pinia";
import { onUnmounted, watch, computed } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";

const route = useRoute();
const username = computed(() => route.params.username as string);

const isActive = (path: string) => {
  return route.path === path;
};

const profileStore = useProfileStore();
const { setIsLoading, setData, setError, reset } = profileStore;
const { data } = storeToRefs(profileStore);

const router = useRouter();

if (!username.value) {
  router.push({ name: "home" });
}

const loadProfile = (username: string) => {
  setIsLoading(true);
  getProfile(username)
    .then((profile) => setData(profile))
    .catch((error) => setError(error as string))
    .finally(() => setIsLoading(false));
};

setIsLoading(true);

loadProfile(username.value);

watch(
  () => route.params.username,
  (newUsername) => {
    if (!newUsername) return router.push({ name: "home" });
    reset();
    loadProfile(newUsername as string);
  },
);

onUnmounted(() => {
  reset();
});
</script>

<template>
  <main class="main-container">
    <ListTabsComponent>
      <TabComponent :to="`/perfil/${username}`" :is-active="isActive(`/perfil/${username}`)">
        Tickets
      </TabComponent>
      <TabComponent
        :to="`/perfil/${username}/borders`"
        :is-active="isActive(`/perfil/${username}/borders`)"
      >
        Bordes
      </TabComponent>
      <TabComponent
        :to="`/perfil/${username}/cards`"
        :is-active="isActive(`/perfil/${username}/cards`)"
      >
        Cartas
      </TabComponent>
      <TabComponent
        :to="`/perfil/${username}/albumes`"
        :is-active="isActive(`/perfil/${username}/albumes`)"
      >
        Álbumes
      </TabComponent>
    </ListTabsComponent>

    <section>
      <UserDetail
        v-if="data"
        :total="data.total.borders + data.total.cards"
        :borders="data.total.borders"
        :cards="data.total.cards"
        :username="data.username"
        :avatar="data.avatar"
      />
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px var(--spacing-xl);
  height: 100%;
  width: 100%;
}

section {
  display: flex;
  gap: 40px;
  height: 100%;
  width: 100%;
}
</style>
