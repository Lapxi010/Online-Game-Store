<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <cardbiggame :data="data"></cardbiggame>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"
import cardbiggame from "../components/cards/cardbiggame"
import {useStore} from "vuex"

export default {
  name: "Game",
  components:{TheBreadcrumbs,cardbiggame},

  setup(){
    const store = useStore()

    const data = store.getters['basket/getCurrentGame']

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Каталог игр',path:'#'},
      {name:data.title,path:'#'}
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
