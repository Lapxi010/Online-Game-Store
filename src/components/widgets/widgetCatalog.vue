<template>
  <div class="widget-login">
    <div class="widget-catalog__overlay">
      <div class="widget-catalog__container">
        <div class="widget-catalog__content">
          <div class="widget-catalog__search">
            <div class="widget-catalog__title">
              результаты поиска:
              <span class="widget-catalog__title__sup">1829</span>
            </div>
            <div class="widget-catalog__modal">
              <div class="widget-catalog__cards">
                <cardmini v-for="(item, id) of description" :key="id" :num="id+1" :item="item"></cardmini>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardmini from "../cards/cardmini"

export default {
  components:{cardmini},
  name: "widgetCatalog",
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
    return{
      description
    }
  }
}
</script>

<style scoped>

</style>
