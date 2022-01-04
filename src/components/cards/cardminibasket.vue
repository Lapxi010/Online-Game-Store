<template>
  <div class="cardminibasket">
    <img :src="require(`../../assets/img/games/${data.img}`)" alt="da" class="cardminibasket__img">
    <div class="cardminibasket__content">
      <div class="cardminibasket__content__title">
        <div class="cardminibasket__content__title__head">{{data.name}}</div>
        <div class="cardminibasket__content__title__sub">
          <a class="cardminibasket__content__title__sub__remove"></a>
        </div>
      </div>
      <div class="cardminibasket__content__price">
        <div class="cardminibasket__content__price__item">
          <div class="cardminibasket__content__price__item__current">{{data.currentPrice}} ₽</div>
        </div>
        <div class="cardminibasket__content__price__item">
          <div class="cardminibasket__content__price__item__old">{{data.oldPrice}} ₽</div>
        </div>
        <div class="cardminibasket__content__price__item">
          <div class="cardminibasket__content__price__item__discount">{{data.sale}}</div>
        </div>
      </div>
      <hr class="cardminibasket__hr">
      <div class="cardminibasket__content__price__detail">
        <div class="cardminibasket__content__price__detail__item">
          Регион активации:
          <span class="cardminibasket__content__price__detail__item__sp">{{data.detailGe}}</span>
        </div>
        <div class="cardminibasket__content__price__detail__item">
          Сервис активации:
          <span class="cardminibasket__content__price__detail__item__sp">{{data.detailAct}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardminibasket",
  props:['data']
}
</script>

<style scoped>

</style>
