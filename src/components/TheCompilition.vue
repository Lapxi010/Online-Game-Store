<template>
  <div class="compilition">
    <div class="compilition-wrapper wrapper">
      <div class="compilition-wrapper__title">
        <button class="compilition-wrapper__title-btn">Новинки</button>
      </div>
      <div class="compilition-wrapper__cards">
        <cardmini v-for="(item, id) of description" :key="id" :num="id+1" :item="item"></cardmini>
      </div>
      <div class="compilition-wrapper wrapper">
        <button class="stand-btn">Смотреть все</button>
      </div>
    </div>
  </div>
</template>

<script>
import cardmini from "./cards/cardmini"

export default {
  name: "TheCompilition",
  components:{cardmini},
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
