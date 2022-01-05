<template>
  <div class="catalog">
    <div class="limit">
      <div class="game__wrapper">
        <div class="game">
          <div class="game__left__side">
            <div class="game__left__side__container">
              <img class="game__left__side__container__img" :src="require(`../../assets/img/games/${data.img}/Title.webp`)" alt="logo">
            </div>
          </div>
          <div class="game__right__side">
            <div class="game__right__side__head">
              <h1 class="game__right__side__head__title">купить {{data.title.toUpperCase()}}</h1>
              <div @click="showLove" class="game__right__side__head__love"></div>
            </div>
            <div class="game__right__side__body">
              <ul class="game__right__side__body__list">
                <li class="game__right__side__body__list__item">В наличии</li>
              </ul>
              <div class="game__right__side__body__price">
                <div class="game__right__side__body__price__item">
                  <button class="stand-btn" @click="goToBasket">В корзину</button>
                </div>
                <div class="game__right__side__body__price__items">
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
              </div>
              <div class="game__right__side__body__sub__info">
                <div class="game__right__side__body__sub__info__item">
                  <div class="game__right__side__body__sub__info__item__head">Поддержка языков</div>
                  <div class="game__right__side__body__sub__info__item__body">
                    <span class="game__right__side__body__sub__info__item__body__span">{{data.languageSupport}}</span>
                  </div>
                </div>
                <div class="game__right__side__body__sub__info__item">
                  <div class="game__right__side__body__sub__info__item__head">Регион активации</div>
                  <div class="game__right__side__body__sub__info__item__body">
                    <a href="#" class="game__right__side__body__sub__info__item__body__link">{{data.activationRegion}}</a>
                  </div>
                </div>
                <div class="game__right__side__body__sub__info__item">
                  <div class="game__right__side__body__sub__info__item__head">Сервис активации</div>
                  <div class="game__right__side__body__sub__info__item__body">
                    <a href="#" class="game__right__side__body__sub__info__item__body__link">{{data.activationService}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="game__bottom">
          <div class="game__bottom__left__side">
            <div class="game__bottom__left__side__content">
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Жанр</div>
                <div class="game__bottom__left__side__content__item__value">
                  <span v-for="(item,id) of genre">
                    <a class="game__bottom__left__side__content__item__value__link" href="#">{{item}}</a><span v-if="(id+1) !== genre.length">,</span>
                  </span>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Платформа</div>
                <div class="game__bottom__left__side__content__item__value">
                  <span class="game__bottom__left__side__content__item__value__span">{{data.platform}}</span>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Дата выхода</div>
                <div class="game__bottom__left__side__content__item__value">
                  <span class="game__bottom__left__side__content__item__value__span">{{data.releaseDate}}</span>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Издатель</div>
                <div class="game__bottom__left__side__content__item__value">
                  <a class="game__bottom__left__side__content__item__value__link" href="#">{{data.publisher}}</a>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Разработчик</div>
                <div class="game__bottom__left__side__content__item__value">
                  <a class="game__bottom__left__side__content__item__value__link" href="#">{{data.developer}}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="game__bottom__right__side">
            <div class="game__bottom__right__side__container">
              <div class="game__bottom__right__side__container__buttons">
                <div class="game__bottom__right__side__container__buttons__btn">Скриншоты</div>
              </div>
              <slider-game :data="date"></slider-game>
            </div>
          </div>
        </div>
        <div class="game__description">
          <div class="game__description__left__side"></div>
          <div class="game__description__right__side">
            <div class="game__description__right__side__content">
              <div class="game__description__right__side__content__head">
                <div class="game__description__right__side__content__head__btn__active">об игре</div>
                <!--                <div class="game__description__right__side__content__head__btn">системные требования</div>-->
                <!--                <div class="game__description__right__side__content__head__btn">активация</div>-->
              </div>
              <div class="game__description__right__side__content__body">
                <div class="game__description__right__side__content__body__container">
                  <div class="game__description__right__side__content__body__container__description">
                    <div class="game__description__right__side__content__body__container__description__title">
                      <strong>{{data.titleDescription}}</strong>
                    </div>
                    <div class="game__description__right__side__content__body__container__description__text">
                       {{data.description}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sliderGame from "../../components/sliders/sliderGame"
import {useStore} from "vuex"

export default {
  name: "cardbiggame",
  components:{sliderGame},
  props:['data'],
  setup(props){
    const date = props.data
    const store = useStore()

    const genre = date.genre.split(',')

    const goToBasket = () => {
      store.commit('basket/addGood',date)
    }
    const showLove = () => {
      if(store.getters['auth/isAuntificated']){
        store.commit('favorite/addFavorite', date)
      }else{
        activeModel.value = true
      }
    }
    return {
      date,
      goToBasket,
      genre,
      showLove
    }
  }
}
</script>

<style scoped>

</style>
