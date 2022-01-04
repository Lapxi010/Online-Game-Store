<template>
  <div class="catalog">
    <div class="limit">
      <div class="game__wrapper">
        <div class="game">
          <div class="game__left__side">
            <div class="game__left__side__container">
              <img class="game__left__side__container__img" :src="require(`../../assets/img/games/${data.img}`)" alt="logo">
            </div>
          </div>
          <div class="game__right__side">
            <div class="game__right__side__head">
              <h1 class="game__right__side__head__title">купить {{data.name}}</h1>
              <div class="game__right__side__head__love"></div>
            </div>
            <div class="game__right__side__body">
              <ul class="game__right__side__body__list">
                <li class="game__right__side__body__list__item">В наличии</li>
              </ul>
              <div class="game__right__side__body__price">
                <div class="game__right__side__body__price__item">
                  <button class="stand-btn">В корзину</button>
                </div>
                <div class="game__right__side__body__price__items">
                  <div class="cardminibasket__content__price__item">
                    <div class="cardminibasket__content__price__item__current">{{data.currentPrice}} ₽</div>
                  </div>
                  <div class="cardminibasket__content__price__item">
                    <div class="cardminibasket__content__price__item__old">{{data.oldPrice}} ₽</div>
                  </div>
                  <div class="cardminibasket__content__price__item">
                    <div class="cardminibasket__content__price__item__discount">{{data.sale}}</div>
                  </div>
                </div>
              </div>
              <div class="game__right__side__body__sub__info">
                <div class="game__right__side__body__sub__info__item">
                  <div class="game__right__side__body__sub__info__item__head">Поддержка языков</div>
                  <div class="game__right__side__body__sub__info__item__body">
                    <span class="game__right__side__body__sub__info__item__body__span">Русский (интерфейс)</span>
                  </div>
                </div>
                <div class="game__right__side__body__sub__info__item">
                  <div class="game__right__side__body__sub__info__item__head">Регион активации</div>
                  <div class="game__right__side__body__sub__info__item__body">
                    <a href="#" class="game__right__side__body__sub__info__item__body__link">Россия и СНГ</a>
                  </div>
                </div>
                <div class="game__right__side__body__sub__info__item">
                  <div class="game__right__side__body__sub__info__item__head">Сервис активации</div>
                  <div class="game__right__side__body__sub__info__item__body">
                    <a href="#" class="game__right__side__body__sub__info__item__body__link">Steam</a>
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
                  <a class="game__bottom__left__side__content__item__value__link" href="#">Экшен</a>,
                  <a class="game__bottom__left__side__content__item__value__link" href="#">Приключения</a>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Платформа</div>
                <div class="game__bottom__left__side__content__item__value">
                  <span class="game__bottom__left__side__content__item__value__span">PC</span>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Дата выхода</div>
                <div class="game__bottom__left__side__content__item__value">
                  <span class="game__bottom__left__side__content__item__value__span">23 декабря 2021</span>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Издатель</div>
                <div class="game__bottom__left__side__content__item__value">
                  <a class="game__bottom__left__side__content__item__value__link" href="#">HandyGames</a>
                </div>
              </div>
              <div class="game__bottom__left__side__content__item">
                <div class="game__bottom__left__side__content__item__title">Разработчик</div>
                <div class="game__bottom__left__side__content__item__value">
                  <a class="game__bottom__left__side__content__item__value__link" href="#">Uprising Studios</a>
                </div>
              </div>
            </div>
          </div>
          <div class="game__bottom__right__side">
            <div class="game__bottom__right__side__container">
              <div class="game__bottom__right__side__container__buttons">
                <div class="game__bottom__right__side__container__buttons__btn">Скриншоты</div>
              </div>
              <slider-game></slider-game>
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
                      <strong>Внутри бунтарских душ</strong>
                    </div>
                    <div class="game__description__right__side__content__body__container__description__text">
                      Разработчики из Uprising Studios, вдохновлённые Journey и The Last Campfire, выпустили свой аналог немногословного путешествия по живописной вселенной. Концепция Scarf философская: происходящее заставляет игрока задуматься о том, что значит быть героем. Ваш путь лежит через миры, созданные мятежными душами. Каждый уникален и предлагает неповторимый опыт — как геймплейный, так и созерцательный.
                    </div>
                    <div class="game__description__right__side__content__body__container__description__text">
                      Главным помощником в приключении станет верный шарф. Он мало того что выглядит стильно, так ещё и несёт в себе душу дракона! В нужные моменты аксессуар оживает и перевоплощается в различные объекты. Крылья, планер, рогатка — с таким арсеналом можно преодолеть любые препятствия! Решение головоломок и сбор коллекционных предметов помогут найти ответ на сюжетные тайны. Если отыщете все реликвии — увидите альтернативную концовку!
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

export default {
  name: "cardbiggame",
  components:{sliderGame},
  props:['data']
}
</script>

<style scoped>

</style>
