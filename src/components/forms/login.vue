<template>
  <form class="widget-login__form" @submit.prevent="loginSubmit">
    <p class="widget-login__error" v-if="errorMain">Неверное имя пользователя или пароль</p>
    <div class="widget-login__form-model">
      <input id='email' :class="['widget-login__form-model__input', {'widget-login__error-input': eLError }]" type="text" v-model="emailL">
      <label for="email" :class="['widget-login__form-model__label', {'widget-login__form-model__label__active': emailL}]">e-mail</label>
      <p class="widget-login__error-message" v-if="eLError">{{eLError}}</p>
    </div>
    <div class="widget-login__form-model">
      <input id='password' :class="['widget-login__form-model__input', {'widget-login__error-input': pLError}]" type='password' v-model="passwordL">
      <label for="password" :class="['widget-login__form-model__label', {'widget-login__form-model__label__active': passwordL}]">пароль</label>
      <p class="widget-login__error-message" v-if="pLError">{{pLError}}</p>
    </div>
    <button class="widget-login__form-btn widget-login__form-btn--mt10px" type="submit" :disabled="isSubmitting">Авторизоваться</button>
  </form>
</template>

<script>
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useStore} from 'vuex'
import {ref} from "vue"

export default {
  name: "login",
  setup(props, {emit}){
    const store = useStore()
    const errorMain = ref(false)

    const  {handleSubmit, isSubmitting} = useForm()

    const {errorMessage: eLError, value: emailL} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Заполните поле')
            .email('Некорректная информация')
    )

    const {errorMessage: pLError, value: passwordL} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Заполните поле')
            .min(6, 'Введите не менее 6 символов')
    )

    const loginSubmit = handleSubmit(async values => {
      try{
        await store.dispatch('auth/login', values)
        emit('closeModel')
      }catch (e) {
        errorMain.value = true
      }
    })

    return {
      emailL,
      eLError,
      pLError,
      passwordL,
      isSubmitting,
      loginSubmit,
      errorMain
    }
  }
}
</script>

<style scoped>

</style>
