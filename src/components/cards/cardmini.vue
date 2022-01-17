<template>
  <transition name="fade">
    <alert__error v-if="alertError">Необходимо авторизоваться!</alert__error>
  </transition>
  <transition name="fade">
    <alert__love v-if="alertLove">Успешно добавлено в избранное!</alert__love>
  </transition>
  <transition name="fade">
    <alert__success v-if="alert">Успешно добавлено в корзину!</alert__success>
  </transition>
  <div class="cardmini">
    <img @click="goToGame" class="cardmini__img" :src="item.titleImg" alt="logo">
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
import alert__love from "../alerts/alert__love"
import {ref} from "vue"
import alert__success from "../alerts/alert__success"
import alert__error from "../alerts/alert__error"

export default {
  name: "cardmini",
  components:{alert__love, alert__success, alert__error},
  props:['item'],
  setup(props){
    const alert = ref(false)
    const router = useRouter()
    const store = useStore()
    const alertLove = ref(false)
    const alertError = ref(false)

    const goToGame = () => {
      // const data = props.item.then()
      store.commit('basket/changeCurrentGame', props.item)
      router.push('game')
    }

    const showAlertLove = ()=> {
      alertLove.value = true
      setTimeout(()=>{alertLove.value = false}, 1000)
    }

    const showAlertError = ()=> {
      alertError.value = true
      setTimeout(()=>{alertError.value = false}, 1000)
    }

    const showAlert = ()=> {
      alert.value = true
      setTimeout(()=>{alert.value = false}, 1000)
    }

    const goToBasket = () => {
      store.commit('basket/addGood',props.item)
      showAlert()
    }
    const showLove = () => {
      if(store.getters['auth/isAuntificated']){
        store.commit('favorite/addFavorite', props.item)
        showAlertLove()
      }else{
        showAlertError()
      }
    }
    return {
      goToBasket,
      showLove,
      goToGame,
      alert,
      showAlert,
      alertLove,
      alertError
    }
  }
}
</script>

<style scoped>

</style>
