<template>
  <slider></slider>
  <TheCompilition :data="data"></TheCompilition>
  <TheNews></TheNews>
</template>

<script>
import slider from "../components/sliders/slider"
import TheCompilition from "../components/TheCompilition"
import TheNews from "../components/TheNews"
import {useStore} from "vuex"

export default {
  name: 'Home',
  components:{slider, TheCompilition, TheNews},
  setup(){
    const store = useStore()

    const data = store.dispatch("data)

    return {
     data
    }
  }
}
</script>

<style scoped>
</style>
