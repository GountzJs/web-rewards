<script lang="ts" setup></script>

<template>
  <section class="detail">
    <h1>EmbeeCards</h1>
    <div class="detail-container">
      <img
        src="/imgs/cards-detail.png"
        class="img-detail"
        width="600"
        height="818"
        alt="Cards Detail"
      />
      <article>
        <p>Categorías</p>
        <ul class="list-detail">
          <li class="t1">T1</li>
          <li class="embee">Embee</li>
          <li class="troll">Troll</li>
          <li class="lolesports">Lolesports</li>
          <li class="unique">
            Únicas
            <img class="arrow-detail" src="/svgs/detail.svg" alt="Arrow Detail" />
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.detail {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 100%;
  min-height: calc(100dvh - 80px);
  width: 100%;
}

.detail h1 {
  font-family: var(--font-nunito);
  font-size: 36px;
  font-weight: 800;
}

.detail-container {
  justify-content: center;
  display: flex;
  gap: 60px;
  height: 100%;
  width: 100%;
}

.img-detail {
  object-fit: contain;
}

article {
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 100%;
  width: 100%;
}

article p {
  font-family: var(--font-nunito);
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  width: 100%;
}

.list-detail {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 14px;
  width: 100%;
}

.list-detail li {
  border-radius: 4px;
  padding: 10px 20px;
  gap: 4px;
}

.t1 {
  outline: 2px solid var(--color-embeecard-t1);
}

.embee {
  outline: 2px solid var(--color-embeecard-embee);
}

.troll {
  outline: 2px solid var(--color-embeecard-troll);
}

.lolesports {
  outline: 2px solid var(--color-embeecard-lolesports);
}

.unique {
  outline: 2px solid var(--color-embeecard-special);
  position: relative;
}

.arrow-detail {
  position: absolute;
  top: 100%;
  left: 100%;
}
</style>
