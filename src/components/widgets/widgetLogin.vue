<template>
  <div class="widget-login">
    <div class="widget-login__last-area" @click="$emit('closeModel')"></div>
    <div class="widget-login__model">
      <div class="widget-login__overlay">
        <div class="widget-login__buttons">
          <button :class="['widget-login__buttons-btn', {'widget-login__buttons-btn__active': login}]" @click="login = true">Вход</button>
          <button :class="['widget-login__buttons-btn', {'widget-login__buttons-btn__active': !login}]" @click="login = false">Регистрация</button>
        </div>
        <login v-if="login" @closeModel="$emit('onchangeNavbar')"></login>
        <register v-else @closeModel="$emit('onchangeNavbar')"></register>
      </div>
    </div>
  </div>
</template>

<script>
import login from "../forms/login"
import register from "../forms/register"
import {ref} from "vue"

export default {
  emits:['closeModel'],
  name: "widgetLogin",
  setup(){
    const login = ref(true)

    return {
      login
    }
  },
  components:{login, register}
}
</script>

<style scoped>

</style>
