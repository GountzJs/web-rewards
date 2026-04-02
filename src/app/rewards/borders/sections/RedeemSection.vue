<script lang="ts" setup>
import BitComponent from "@/modules/shared/components/bits/BitComponent.vue";
import BoxSubComponent from "@/modules/shared/components/subs/BoxSubComponent.vue";
import IconSub from "@/modules/shared/components/subs/IconSub.vue";
import ItemSubComponent from "@/modules/shared/components/subs/ItemSubComponent.vue";
</script>

<template>
  <section class="redeem">
    <h1>¿Cómo canjear bordes?</h1>
    <article>
      <img src="/imgs/avatar-redeem.png" width="300" height="300" alt="Reedem Avatar" />
      <ul>
        <li class="channel-points">
          <img src="/imgs/border-points.png" width="118" height="156" alt="Border Points" />
          <div class="info">
            <p class="points">Con puntos del canal</p>
            <p class="detail">20.000 puntos del canal equivale a un borde aleatorio.</p>
          </div>
        </li>
        <li class="detail-redeem">
          <p class="title">Donando bits</p>
          <BitComponent :points="100" variant="purple" />
          <p>
            bits equivale a un borde aleatorio. <br />
            Las donaciones deben hacerse en un solo envío.
          </p>
        </li>
        <li class="detail-redeem">
          <BoxSubComponent detail="Regalando suscripciones">
            <ItemSubComponent>
              <IconSub name="subs-5" :size="125" />
              <p>
                Regalando una sub o más puedes obtener uno o más bordes aleatorios. <br />
                Son personales, no se pueden obsequiar.
              </p>
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

.detail-redeem {
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.detail-redeem .title {
  font-weight: 700;
  font-family: var(--font-nunito);
  font-size: 16px;
  width: 100%;
}

.detail-redeem p {
  font-family: var(--font-nunito);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 4px;
}
</style>
