<script lang="ts" setup>
const borders = ["challenger", "master", "diamond", "platinium", "gold", "silver", "bronze"];
</script>

<template>
  <section class="preview">
    <h1>Clasificación de los bordes</h1>
    <ul>
      <li v-for="border in borders" :key="border">
        <img
          class="img-border"
          :src="`/imgs/borders/${border}.png`"
          width="300"
          height="540"
          :alt="border"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.preview {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
}

.preview h1 {
  font-family: var(--font-nunito);
  font-size: 36px;
  font-weight: 800;
}

ul {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  height: auto;
  gap: 24px;
  width: 100%;
}

.img-border {
  width: 300px;
}
</style>
