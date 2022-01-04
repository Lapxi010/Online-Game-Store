<template>
  <div class="cardmini">
    <img class="cardmini__img" :src="require(`../../assets/img/games/game${num}.webp`)" alt="logo">
    <a href="#" class="cardmini__title">{{item.name}}</a>
    <div class="cardmini__price">
      <span class="cardmini__price-text">{{item.price}}</span>
      <span class="cardmini__price-sale">{{item.sale}}</span>
    </div>
    <div class="cardmini__love" @click="showLove"></div>
    <button @click="goToBasket" class="cardmini__btn">В корзину</button>
  </div>
</template>

<script>
import {useRouter} from "vue-router"
import {useStore} from "vuex"

export default {
  name: "cardmini",
  props:['num', 'item'],
  setup(){
    const router = useRouter()
    const store = useStore()

    const goToBasket = () => {
      router.push('/basket')
    }
    const showLove = () => {
      if(store.getters['auth/isAuntificated']){
        router.push('/favorite')
      }else{
        activeModel.value = true
      }
    }
    return {
      goToBasket,
      showLove
    }
  }
}
</script>

<style scoped>

</style>
