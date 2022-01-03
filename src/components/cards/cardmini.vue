<template>
  <div class="cardmini">
    <img class="cardmini__img" :src="require(`../../assets/img/games/game${num}.webp`)" alt="logo">
    <a href="#" class="cardmini__title">{{item.name}}</a>
    <div class="cardmini__price">
      <span class="cardmini__price-text">{{item.price}}</span>
      <span class="cardmini__price-sale">{{item.sale}}</span>
    </div>
    <div class="cardmini__love"></div>
    <button class="cardmini__btn">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "cardmini",
  props:['num', 'item']
}
</script>

<style scoped>

</style>
