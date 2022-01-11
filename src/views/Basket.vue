<template>
  <transition name="fade">
    <alert__success v-if="alert">Успешно удалено из корзины!</alert__success>
  </transition>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
      <div class="basket">
        <div class="limit">
        <div class="basket__wrapper" v-if="basket.length !== 0">
          <div class="basket__wrapper__left__side">
            <h1 class="basket__wrapper__left__side__title">
              Мой заказ
              <span class="basket__wrapper__left__side__title__count">{{basket.length}}</span>
            </h1>
            <div class="basket__wrapper__list">
              <cardminibasket @removeGame="removeGame(id)" v-for="(item, id) of basket" :key="id" :data="item"></cardminibasket>
            </div>
            <div class="basket__wrapper__left__side__payment">
              <h2 class="basket__wrapper__left__side__payment__title">оплата заказа</h2>
              <div class="basket__wrapper__left__side__payment__body">
                <div class="basket__wrapper__left__side__payment__body__dop">
                  <div class="basket__wrapper__left__side__payment__body__wrapper">
                    <div class="basket__wrapper__left__side__payment__text">
                      Вы будете перенаправлены на сайт платежной системы для
                      завершения
                      процедуры оплаты.
                    </div>
                    <button class="stand-btn btn-in-payment" :disabled="!checkbox">оплатить {{sum()}} ₽</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="basket__wrapper__right__side" style="top: 149px">
            <form action="#" class="basket__wrapper__right__side__block__form">
              <div class="basket__wrapper__right__side__block__form__title">
                <div class="basket__wrapper__right__side__block__form__title__title">Итого</div>
                <div class="basket__wrapper__right__side__block__form__title__price">{{sum()}} ₽</div>
              </div>
              <div class="agreement">
                <div class="agreement__block">
                  <div class="agreement__block__cart">
                    <div class="agreement__block__cart__dop">
                      <div class="widget-login__agree--plus agreement__block__cart__dop__and">
                        <div class="widget-login__agree">
                          <span :class="['widget-login__agree-checkbox', {'widget-login__agree-checkbox__active': checkbox}]" @click="checkbox = !checkbox"></span>
                          <div class="widget-login__agree-text agreement__block__cart__dop__and__text">
                            Я ознакомился с условиями
                            <a href="#" class="widget-login__agree-text-link">договора</a>
                            и согласен с ним
                          </div>
                        </div>
                        <p class="widget-login__agree-error-message agreement__error" v-if="!checkbox">Для продолжения покупки необходимо согласиться с договором оферты</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
          <div class="basket__wrapper__two" v-else>
            <div class="basket__wrapper__title">В вашей корзине еще ничего нет :(</div>
            <button class="stand-btn" @click="$router.push('/catalog')">Перейти в каталог</button>
          </div>
      </div>
  </div>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"
import {ref} from "vue";
import cardminibasket from "../components/cards/cardminibasket"
import {useStore} from "vuex"
import alert__success from "../components/alerts/alert__success"

export default {
  name: "Basket",
  components:{TheBreadcrumbs, cardminibasket, alert__success},
  setup(){
    const alert = ref(false)
    const checkbox = ref(true)
    const store = useStore()

    const basket = store.getters['basket/getBasket']

    const removeGame = (data) => {
      store.commit('basket/removeGood', data)
      showAlert()
    }

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Ваша корзина',path:'#'}
    ]

    const showAlert = ()=> {
      alert.value = true
      setTimeout(()=>{alert.value = false}, 1000)
    }

    const sum = () => {
      let summa = 0
      for(let i of basket){
        summa += i.currentPrice
      }

      return summa
    }

    return{
      checkbox,
      basket,
      sum,
      breads,
      removeGame,
      alert,
      showAlert
    }
  }
}
</script>

<style scoped>

</style>
