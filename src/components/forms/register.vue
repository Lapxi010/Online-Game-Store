<template>
  <form class="widget-login__form" @submit.prevent="logoutSubmit">
    <p class="widget-login__error" v-if="errorMain">Неверное имя пользователя или пароль</p>
    <div class="widget-login__form-model">
      <input id="email2" :class="['widget-login__form-model__input', {'widget-login__error-input': eLOError}]" type="text" v-model="emailLO">
      <label for="email2" :class="['widget-login__form-model__label', {'widget-login__form-model__label__active': emailLO}]">e-mail</label>
      <p class="widget-login__error-message" v-if="eLOError">{{eLOError}}</p>
    </div>
    <div class="widget-login__form-model">
      <input id='password2' :class="['widget-login__form-model__input', {'widget-login__error-input': pLOError}]" type='password' v-model="passwordLO">
      <label for="password2" :class="['widget-login__form-model__label', {'widget-login__form-model__label__active': passwordLO}]">пароль</label>
      <p class="widget-login__error-message" v-if="pLOError">{{pLOError}}</p>
    </div>
    <div class="widget-login__agree--plus">
      <div class="widget-login__agree">
        <span :class="['widget-login__agree-checkbox', {'widget-login__agree-checkbox__active': checkbox}]" @click="checkbox = !checkbox"></span>
        <div class="widget-login__agree-text">
          Я даю согласие на обработку моих
          <a href="#" class="widget-login__agree-text-link">персональных данных</a>
        </div>
      </div>
      <p class="widget-login__agree-error-message" v-if="!checkbox">Для завершения регистрации необходимо согласиться с обработкой персональных данных</p>
    </div>
    <button class="widget-login__form-btn" type="submit" :disabled="isSubmitting">Зарегистрироваться</button>
  </form>
</template>

<script>
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {ref} from "vue"
import {useStore} from 'vuex'

export default {
  name: "register",
  setup(props, {emit}){
    const store = useStore()
    const checkbox = ref(true)
    const errorMain = ref(false)

    const  {handleSubmit, isSubmitting} = useForm()

    const {errorMessage: eLOError, value: emailLO} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Заполните поле')
            .email('Некорректная информация')
    )

    const {errorMessage: pLOError, value: passwordLO} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Заполните поле')
            .min(6, 'Введите не менее 6 символов')
    )

    const logoutSubmit = handleSubmit(async values => {
      if (checkbox.value === true){
        try{
          await store.dispatch('auth/register', values)
          emit('closeModel')
        }catch (e) {
          errorMain.value = true
          console.log(e)
        }
      }else {
        errorMain.value = true
        console.log(1)
      }
    })

    return {
      checkbox,
      emailLO,
      eLOError,
      pLOError,
      passwordLO,
      isSubmitting,
      logoutSubmit,
      errorMain
    }
  }
}
</script>

<style scoped>

</style>
