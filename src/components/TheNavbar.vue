<template>
  <div class="navbar-wrapper">
    <div class="wrapper">
      <div class="navbar">
        <div class="navbar-logo" @click="$router.push('/')">
          <img class="navbar-logo__img" src="../assets/img/icons/method-draw-image.svg" alt="das">
        </div>
        <div class="navbar-search">
          <input type="text" class="navbar-search__input">
          <button class="navbar-search__btn"></button>
        </div>
        <div class="navbar-navigate">
          <button v-if="!loginNavbar" :class="['navbar-navigate__btn', {'navbar-navigate__btn__active': activeModel}]" @click="closeAm">Войти</button>
          <svg v-else class="navbar-navigate__img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
          </svg>
          <svg @click="showLove" class="navbar-navigate__img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
          </svg>
          <svg @click="goToBasket" class="navbar-navigate__img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
      </div>
      <widget-login v-if="activeModel" @closeModel="closeAm" @onchangeNavbar="changeNavbar"></widget-login>
<!--      <widget-catalog></widget-catalog>-->
    </div>
  </div>
</template>

<script>
import widgetLogin from "./widgets/widgetLogin"
import widgetCatalog from "./widgets/widgetCatalog"
import {onMounted, reactive, ref} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"

export default {
  name: "TheNavbar",
  emits:['closeModel', 'onchangeNavbar'],
  setup(){
    const store = useStore()
    const router = useRouter()

    const activeModel = ref(store.getters['auth/getActiveModel'])
    const loginNavbar = ref(store.getters['auth/isAuntificated'])

    const changeNavbar = ()=>{
      store.commit('auth/changeActiveModel')
      activeModel.value = store.getters['auth/getActiveModel']
      loginNavbar.value = true
    }

    const showLove = () => {
      if(store.getters['auth/isAuntificated']){
        router.push('/favorite')
      }else{
        store.commit('auth/activeModelTrue')
        activeModel.value = store.getters['auth/getActiveModel']
      }
    }

    const goToBasket = () => {
      router.push('/basket')
    }

    const closeAm = () => {
      store.commit('auth/changeActiveModel')
      activeModel.value = store.getters['auth/getActiveModel']
    }

    return {
      activeModel,
      changeNavbar,
      loginNavbar,
      showLove,
      goToBasket,
      closeAm
    }
  },
  components:{widgetLogin,widgetCatalog}
}
</script>

<style scoped>

</style>
