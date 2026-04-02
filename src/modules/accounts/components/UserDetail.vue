<script setup lang="ts">
interface Props {
  total: number;
  borders: number;
  cards: number;
  username: string;
  avatar: string;
}

const { total, avatar, username } = defineProps<Props>();

const formatUsername = () => {
  if (username.length > 15) {
    return username.slice(0, 15) + "...";
  }

  return username;
};
</script>

<template>
  <aside class="profile">
    <p class="profile-total">
      <strong>Total:</strong>
      {{ total }}
    </p>
    <div class="profile-info">
      <div class="avatar-container">
        <img
          class="decorator-avatar"
          src="/imgs/profile/avatar.png"
          width="150px"
          height="141px"
          alt="Decorator Avatar"
        />
        <img :src="avatar" class="user-avatar" width="100px" height="100px" />
      </div>
      <p class="user-username">{{ formatUsername() }}</p>
      <div class="rewards-container">
        <div class="reward-detail">
          <p class="quantity">154</p>
          <p class="label">Bordes</p>
        </div>
        <div class="reward-detail">
          <p class="quantity">0</p>
          <p class="label">Cartas</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.profile {
  align-items: center;
  background-image: url("/imgs/profile/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 230/480;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  height: fit-content;
  width: 230px;
}

.profile-total {
  background-color: var(--color-black-40);
  border-radius: 4px;
  padding: 4px 8px;
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 400;
}

.profile-total strong {
  color: #94a3b8;
  font-weight: 700;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

.decorator-avatar {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  position: absolute;
  object-fit: cover;
  aspect-ratio: 139/131;
}

.avatar-container {
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  height: 140px;
  width: 100%;
}

.user-avatar {
  border-radius: 50%;
  object-fit: contain;
}

.user-username {
  text-align: center;
  font-family: var(--font-nunito);
  color: var(--color-white);
  font-weight: 700;
  font-size: 20px;
  width: 100%;
}

.rewards-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.reward-detail {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-family: var(--font-poppins);
  height: fit-content;
  width: fit-content;
  & > .quantity {
    font-size: 20px;
    font-weight: 900;
  }

  & > .label {
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
