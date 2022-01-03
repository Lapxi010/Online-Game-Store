<template>
  <div class="model-promo__description-title">{{description[currentPos].title}}</div>
  <div class="model-promo__description-navigate">
    <button class="stand-btn">В корзину</button>
    <span class="model-promo__description-navigate__price">{{description[currentPos].price}}</span>
    <span class="model-promo__description-navigate__sale">{{description[currentPos].sale}}</span>
  </div>
</template>

<script>
export default {
  name: "sliderItemDesk",
  props:['description', 'currentPos']
}
</script>

<style scoped>

</style>
