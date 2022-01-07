<template>
  <div class="cardminibasket">
    <img @click='goToGame' :src="data.titleImg" alt="da" class="cardminibasket__img">
    <div class="cardminibasket__content">
      <div class="cardminibasket__content__title">
        <div class="cardminibasket__content__title__head">{{data.title}}</div>
        <div class="cardminibasket__content__title__sub">
          <a @click="$emit('removeGame')" class="cardminibasket__content__title__sub__remove"></a>
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
          <div class="cardminibasket__content__price__item__discount">{{data.sale}} %</div>
        </div>
      </div>
      <hr class="cardminibasket__hr">
      <div class="cardminibasket__content__price__detail">
        <div class="cardminibasket__content__price__detail__item">
          Регион активации:
          <span class="cardminibasket__content__price__detail__item__sp">{{data.activationRegion}}</span>
        </div>
        <div class="cardminibasket__content__price__detail__item">
          Сервис активации:
          <span class="cardminibasket__content__price__detail__item__sp">{{data.activationService}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {ref} from "vue"

export default {
  name: "cardminibasket",
  props:['data'],
  emits:['removeGame'],
  setup(props){
    const store = useStore()
    const router = useRouter()

    const goToGame = ()=>{
      store.commit('basket/changeCurrentGame', props.data)
      router.push('game')
    }



    return {
      goToGame,
    }
  }
}
</script>

<style scoped>

</style>
