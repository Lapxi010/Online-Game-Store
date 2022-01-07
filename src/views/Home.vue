<template>
  <slider></slider>
  <TheCompilition ></TheCompilition>
  <TheNews></TheNews>
</template>

<script>
import slider from "../components/sliders/slider"
import TheCompilition from "../components/TheCompilition"
import TheNews from "../components/TheNews"

export default {
  name: 'Home',
  components:{slider, TheCompilition, TheNews},
}
</script>

<style scoped>
</style>
