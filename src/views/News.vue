<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <div class="catalog">
    <div class="limit">
      <div class="catalog__wrapper">
        <div class="catalog__title">
          <h1 class="catalog__title__head">каталог статей <span class="catalog__title__count">{{description.length}}</span></h1>
        </div>
        <div class="catalog__cards">
          <cardmininews class="news__dop" v-for="(item, id) of description" :num="id+1" :item="item"></cardmininews>
        </div>
        <div class="catalog__btn">
          <button class="stand-btn">Показать еще</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"
import cardmininews from "../components/cards/cardmininews"

export default {
  name: "News",
  components:{TheBreadcrumbs, cardmininews},
  setup(){
    const breads = [
      {name:'Главная',path:'/'},
      {name:'Статьи об играх',path:'#'}
    ]
    const description = [
      {title:'Во что мы играли в 2021 году', date:'28.12.2021', type:'О нас', desc:'Фавориты команды GabeStore для ПК и консолей', views:854,comments:39},
      {title:'Рекомендованные игры с временной петлёй', date:'25.12.2021', type:'Подборки', desc:'Пройди, откатись, пройди ещё раз', views:709,comments:14},
      {title:'Угадай игру по валюте', date:'18.12.2021', type:'Неформат', desc:'Готовимся к инфляции', views:2719,comments:54}
    ]
    return {
      breads,
      description
    }
  }
}
</script>

<style scoped>

</style>
