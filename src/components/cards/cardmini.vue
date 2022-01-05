<template>
  <div class="cardmini">
    <img @click="goToGame" class="cardmini__img" :src="require(`../../assets/img/games/${item.img}/Title.webp`)" alt="logo">
    <a href="#" class="cardmini__title">{{item.title}}</a>
    <div class="cardmini__price">
      <span class="cardmini__price-text">{{item.currentPrice}} ₽</span>
      <span class="cardmini__price-sale">{{item.sale}} %</span>
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
  props:['item'],
  setup(props){
    const router = useRouter()
    const store = useStore()

    const goToGame = () => {
      store.commit('basket/changeCurrentGame', props.item)
      router.push('game')
    }

    const goToBasket = () => {
      store.commit('basket/addGood',props.item)
    }
    const showLove = () => {
      if(store.getters['auth/isAuntificated']){
        store.commit('favorite/addFavorite', props.item)
      }else{
        activeModel.value = true
      }
    }
    return {
      goToBasket,
      showLove,
      goToGame
    }
  }
}
</script>

<style scoped>

</style>
