<script lang="ts" setup>
import FooterTemplate from "@/app/templates/FooterTemplate.vue";
import HeaderTemplate from "@/app/templates/HeaderTemplate.vue";
import SearchProfile from "@/modules/accounts/components/SearchProfile.vue";
import ArrowComponent from "@/modules/shared/components/ArrowComponent.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="layout-container">
    <HeaderTemplate>
      <SearchProfile />
    </HeaderTemplate>
    <RouterView />
  </div>
  <FooterTemplate />
  <ArrowComponent />
</template>

<style scoped>
.layout-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
  height: auto;
  width: 100%;
}
</style>
