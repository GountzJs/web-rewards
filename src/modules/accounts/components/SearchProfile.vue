<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  username.value = target.value;
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  router.push(`/perfil/${username.value}`);
  username.value = "";
};
</script>

<template>
  <form class="search-profile-form" @submit.prevent="handleSubmit">
    <label class="label-container" for="username">
      <icon-svg
        class="icon-container"
        name="lens"
        color="var(--color-white-60)"
        size="14px"
      ></icon-svg>
      <input
        id="username"
        type="text"
        name="username"
        v-model="username"
        placeholder="Ingrese nombre de usuario"
        class="input"
        minlength="3"
        maxlength="50"
        @input="handleInput"
      />
    </label>
    <button type="submit" class="btn btn-primary">Buscar</button>
  </form>
</template>

<style scoped>
.search-profile-form {
  align-items: center;
  display: flex;
  gap: 12px;
  width: fit-content;
}

.label-container {
  position: relative;
}

.icon-container {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 16px;
}

.input {
  width: 300px;
  padding-left: 40px;
}
</style>
