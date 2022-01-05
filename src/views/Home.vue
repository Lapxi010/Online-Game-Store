<template>
  <slider></slider>
  <TheCompilition :data="data"></TheCompilition>
  <TheNews></TheNews>
</template>

<script>
import slider from "../components/sliders/slider"
import TheCompilition from "../components/TheCompilition"
import TheNews from "../components/TheNews"
import {f} from "../store/data"

export default {
  name: 'Home',
  components:{slider, TheCompilition, TheNews},
  setup(){
    const data = f()

    return {
     data
    }
  }
}
</script>

<style scoped>
</style>
