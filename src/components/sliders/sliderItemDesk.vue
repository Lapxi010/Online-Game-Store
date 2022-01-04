<template>
  <div class="model-promo__description-title">{{description[currentPos].title}}</div>
  <div class="model-promo__description-navigate">
    <button class="stand-btn" @click="goToBasket">В корзину</button>
    <span class="model-promo__description-navigate__price">{{description[currentPos].price}}</span>
    <span class="model-promo__description-navigate__sale">{{description[currentPos].sale}}</span>
  </div>
</template>

<script>
import {useRouter} from "vue-router"

export default {
  name: "sliderItemDesk",
  props:['description', 'currentPos'],
  setup(){
    const router = useRouter()

    const goToBasket = () => {
      router.push('/basket')
    }

    return {
      goToBasket
    }
  }
}
</script>

<style scoped>

</style>
