<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <cardbiggame :data="data[0]"></cardbiggame>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"
import cardbiggame from "../components/cards/cardbiggame"

export default {
  name: "Game",
  components:{TheBreadcrumbs,cardbiggame},
  setup(){

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Каталог игр',path:'#'},
      {name:'SCARF',path:'#'}
    ]

    const data = [
      {
        img: 'game1.webp',
        name: 'SCARF',
        currentPrice:529,
        oldPrice:629,
        sale:'-16%'
      }
    ]

    return {
      breads,
      data
    }
  }
}
</script>

<style scoped>

</style>
