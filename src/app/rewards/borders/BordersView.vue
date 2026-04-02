<script lang="ts" setup>
import DisclaimerComponent from "@/modules/shared/components/DisclaimerComponent.vue";
import PresentationSection from "./sections/PresentationSection.vue";
import PreviewBordersSection from "./sections/PreviewBordersSection.vue";
import RedeemSection from "./sections/RedeemSection.vue";
</script>

<template>
  <main class="main-container">
    <PresentationSection />
    <section class="section-disclaimer">
      <DisclaimerComponent />
    </section>
    <PreviewBordersSection />
    <RedeemSection />
  </main>
</template>

<style scoped>
.main-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px var(--spacing-xl);
  gap: 60px;
  height: 100%;
  width: 100%;
}

.section-disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
}
</style>
