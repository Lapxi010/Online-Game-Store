<template>
  <TheNavbar></TheNavbar>
  <router-view/>
  <TheFooter></TheFooter>
</template>

<script>
import TheNavbar from "./components/TheNavbar"
import TheFooter from "./components/TheFooter"
import alert__success from "./components/alerts/alert__success"
import {useStore} from "vuex"
import {onMounted} from "vue"

export default {
  components:{TheNavbar, TheFooter, alert__success},
  setup(){
    console.log('Получение данных из бдп')
    const store = useStore()
    onMounted(async ()=>{
      await store.dispatch('data/getAll')
    })
  }
}
</script>

<style lang="scss">
.lp{
  border:1px solid black;
  background: black;
}
</style>
