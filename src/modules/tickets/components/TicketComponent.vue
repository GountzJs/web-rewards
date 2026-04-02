<script lang="ts" setup>
import type { TicketEntity } from "@/modules/tickets/api/entities/ticket.entity";
import FlipedElement from "@/modules/shared/components/FlippedElement.vue";
import { cdnUrl } from "@/core/settings";

interface Props extends TicketEntity {
  username: string;
  avatar: string;
  team: string | null;
  followingAt: string | null;
}

const { cover, hourMx, hourArg, date, url, username, avatar, team, followingAt } =
  defineProps<Props>();

const formatDay = () => {
  if (!followingAt) return "?";
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(followingAt));
};
</script>

<template>
  <FlipedElement width="250px" height="350px" perspective="800px">
    <template v-slot:front>
      <div
        class="front-container"
        :style="{ background: `url('${cdnUrl}${cover}')`, width: '100%', height: '100%' }"
      >
        <p class="ticket-date">{{ date }}</p>
        <div class="ticket-hours">
          <p>{{ hourMx }} <img src="/imgs/countries/mexico.png" width="22px" height="14px" /></p>
          <p>{{ hourArg }} <img src="/imgs/countries/arg.png" width="22px" height="14px" /></p>
        </div>
        <div class="user-data">
          <p class="user-username">{{ username }}</p>
          <div class="user-box">
            <img
              class="user-box-avatar"
              :src="avatar"
              width="30px"
              height="30px"
              alt="Avatar User"
            />
            <div class="user-box-following">
              <p>
                Siguiendo: <b>{{ formatDay() }}</b>
              </p>
              <p>
                Equipo: <b>{{ team || "?" }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:back>
      <div
        :style="{
          background: `url('${cdnUrl}${url}') center/cover no-repeat`,
          width: '100%',
          height: '100%',
        }"
      ></div>
    </template>
  </FlipedElement>
</template>

<style scoped>
.front-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 18px;
}

.ticket-date {
  text-shadow: 0px 2px 24px #000;
  font-family: var(--font-bebas);
  font-size: 14px;
}

.ticket-hours {
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 6px;
  margin-top: 4px;
  width: 100%;
  & > p {
    gap: 4px;
    display: flex;
    text-shadow: 0px 2px 24px #000;
    font-family: var(--font-bebas);
    font-size: 16px;
  }
}

.user-data {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 190px;

  & > .user-username {
    background-color: #0c0532;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    font-family: var(--font-nunito);
    font-weight: 900;
    font-size: 12px;
    width: 100%;
  }
}

.user-box {
  align-items: center;
  background-color: var(--color-white);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 8px;
}

.user-box-avatar {
  border-radius: 50%;
}

.user-box-following {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  height: 100%;
  width: 100%;
  & > p {
    font-family: var(--font-nunito);
    color: rgb(from var(--color-black) r g b / 0.9);
    width: 100%;
    text-align: left;
    font-size: 10px;
  }
}
</style>
