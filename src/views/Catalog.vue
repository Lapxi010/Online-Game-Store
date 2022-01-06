<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <div class="catalog">
    <div class="limit">
      <div class="catalog__wrapper">
        <div class="catalog__title">
          <h1 class="catalog__title__head">каталог игр <span class="catalog__title__count">{{data.length}}</span></h1>
        </div>
        <div class="catalog__cards">
          <cardmini v-for="(item, id) of data" :key="id" :item="item"></cardmini>
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
import cardmini from "../components/cards/cardmini"
import {f} from "../store/data"

export default {
  name: "Catalog",
  components:{TheBreadcrumbs,cardmini},
  setup(){

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Каталог игр',path:'#'}
    ]

    return{
      data,
      breads
    }
  }
}
</script>

<style scoped>

</style>
