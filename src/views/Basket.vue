<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
      <div class="basket">
        <div class="limit">
        <div class="basket__wrapper" v-if="desc.length !== 0">
          <div class="basket__wrapper__left__side">
            <h1 class="basket__wrapper__left__side__title">
              Мой заказ
              <span class="basket__wrapper__left__side__title__count">{{desc.length}}</span>
            </h1>
            <div class="basket__wrapper__list">
              <cardminibasket v-for="(item, id) of desc" :key="id" :data="item"></cardminibasket>
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
                    <button class="stand-btn" :disabled="!checkbox">оплатить {{sum()}} ₽</button>
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

export default {
  name: "Basket",
  components:{TheBreadcrumbs, cardminibasket},
  setup(){
    const checkbox = ref(true)

    const desc = [
      {name:'Scarf',img:'game1.webp',currentPrice:529,oldPrice:629,sale:'-16%',detailGe:'Россия и СНГ',detailAct:'Steam'},
      {name:'Scarf',img:'game1.webp',currentPrice:529,oldPrice:629,sale:'-16%',detailGe:'Россия и СНГ',detailAct:'Steam'},
    ]

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Ваша корзина',path:'#'}
    ]

    const sum = () => {
      let summa = 0
      for(let i of desc){
        summa += i.currentPrice
      }

      return summa
    }

    return{
      checkbox,
      desc,
      sum,
      breads
    }
  }
}
</script>

<style scoped>

</style>
