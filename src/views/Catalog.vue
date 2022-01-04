<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <div class="catalog">
    <div class="limit">
      <div class="catalog__wrapper">
        <div class="catalog__title">
          <h1 class="catalog__title__head">каталог игр <span class="catalog__title__count">{{description.length}}</span></h1>
        </div>
        <div class="catalog__cards">
          <cardmini v-for="(item, id) of description" :key="id" :num="id+1" :item="item"></cardmini>
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

export default {
  name: "Catalog",
  components:{TheBreadcrumbs,cardmini},
  setup(){
    const description = [
      {name:'Endless Space 2 – Dark Matter',price:'65 ₽',sale:'18%'},
      {name:'SCARF',price:'529 ₽',sale:'16%'},
      {name:'Trash Sailors',price:'399 ₽',sale:'8%'},
      {name:'Dying Light - Snow Ops Bundle',price:'55 ₽',sale:'10%'},
      {name:'A Total War Saga: TROY - Rhesus & Memnon',price:'349 ₽',sale:'17%'},
      {name:'Planet Zoo: Europe Pack',price:'475 ₽',sale:'5%'},
      {name:'Kingdoms of Amalur: Re-Reckoning - Fatesworn',price:'849 ₽',sale:'15%'},
      {name:'Jurassic World Evolution 2: Early Cretaceous Pack',price:'179 ₽',sale:'8%'},
      {name:'Destiny 2: Bungie 30th Anniversary Pack',price:'949 ₽',sale:'10%'},
      {name:'Wolfstride',price:'309 ₽',sale:'14%'}
    ]

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Каталог игр',path:'#'}
    ]

    return{
      description,
      breads
    }
  }
}
</script>

<style scoped>

</style>
