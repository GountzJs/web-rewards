<script lang="ts" setup></script>

<template>
  <ul>
    <li v-for="i in 8" :key="i"></li>
  </ul>
</template>

<style scoped>
ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;
  width: 100%;
}

li {
  background-color: var(--color-white-60);
  border-radius: 8px;
  height: 110px;
  max-width: 800px;
  width: 100%;
}
</style>
