<template>
  <div class="model-item" >
    <img  class="model-img" :src="require('../../assets/img/bg/'+img)" alt="bg-slider">
  </div>
</template>

<script>

export default {
  name: "sliderItem",
  props:['item', 'img','cur']
}
</script>

<style scoped>
</style>
