<script lang="ts" setup>
import BitComponent from "@/modules/shared/components/bits/BitComponent.vue";
import BoxBitComponent from "@/modules/shared/components/bits/BoxBitComponent.vue";
import ItemBitComponent from "@/modules/shared/components/bits/ItemBitComponent.vue";
import BoxSubComponent from "@/modules/shared/components/subs/BoxSubComponent.vue";
import IconSub from "@/modules/shared/components/subs/IconSub.vue";
import ItemSubComponent from "@/modules/shared/components/subs/ItemSubComponent.vue";
</script>

<template>
  <section class="redeem">
    <h1>¿Cómo canjear embeecards?</h1>
    <article>
      <img src="/imgs/avatar-redeem.png" width="300" height="300" alt="Reedem Avatar" />
      <ul>
        <li class="channel-points">
          <img src="/imgs/embeecards-points.png" width="118" height="156" alt="Embeecards Points" />
          <div class="info">
            <p class="points">Con puntos del canal</p>
            <p class="detail">20.000 puntos del canal equivale a un borde aleatorio.</p>
          </div>
        </li>
        <li>
          <BoxBitComponent>
            <ItemBitComponent>
              <BitComponent variant="purple" :points="300" />
              <p>bits equivalen al sobre individual con una carta.</p>
            </ItemBitComponent>
            <ItemBitComponent>
              <BitComponent variant="purple" :points="800" />
              <p>bits equivale al sobre chico con 3 cartas.</p>
            </ItemBitComponent>
            <ItemBitComponent>
              <BitComponent variant="green" :points="1500" />
              <p>bits equivale al sobre mediano con 6 cartas.</p>
            </ItemBitComponent>
            <ItemBitComponent>
              <BitComponent variant="green" :points="2400" />
              <p>bits equivale al sobre grande con 12 cartas.</p>
            </ItemBitComponent>
          </BoxBitComponent>
        </li>
        <li>
          <BoxSubComponent detail="Regalando suscripciones">
            <ItemSubComponent>
              <IconSub name="subs-5" :size="125" />
              <p>5 subs equivalen al sobre chico con tres cartas.</p>
            </ItemSubComponent>
            <ItemSubComponent>
              <IconSub name="subs-10" :size="125" />
              <p>10 subs equivalen al sobre mediano con seis cartas.</p>
            </ItemSubComponent>
            <ItemSubComponent>
              <IconSub name="subs-20" :size="125" />
              <p>20 subs equivalen al sobre grande con doce cartas.</p>
            </ItemSubComponent>
          </BoxSubComponent>
        </li>
        <li>
          <BoxSubComponent detail="Suscribiendose">
            <ItemSubComponent>
              <IconSub name="sub-1" :size="50" />
              <p>Una suscripción mensual o prime equivale al sobre individual con una carta.</p>
            </ItemSubComponent>
          </BoxSubComponent>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.redeem {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 100%;
  width: 100%;
}

article {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 80px;
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.channel-points {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.channel-points .info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info .points {
  font-weight: 700;
  font-family: var(--font-nunito);
  font-size: 16px;
}

.info .detail {
  font-weight: 400;
  font-family: var(--font-nunito);
  font-size: 16px;
}
</style>
