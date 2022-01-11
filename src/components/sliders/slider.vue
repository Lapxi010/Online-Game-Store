<template>
  <div class="model__wrapper">
    <div class="model">
      <div :class="[{'model-carousel':!corousel}, {'model-carousel2': corousel }]" :style="{'transform': 'translateY('+'-' + (100*currentPos)+'vh'+')'}">
        <slider-item v-for="(item, id) of imgs" :item="id+1" :key="id" :img="item" :cur="currentPos"></slider-item>
      </div>
    </div>
    <div class="wrapper model-promo">
      <div class="model-promo__progress">
        <div class="model-promo__progress-btn model-promo__progress-btn--up" @click="prevSlide"></div>
        <div class="model-promo__progress-bar">
          <div class="model-promo__progress-bar__value" :style="{'top':16.6 * currentPos + '%'}"></div>
        </div>
        <div class="model-promo__progress-btn model-promo__progress-btn--down" @click="nextSlide"></div>
      </div>
      <div class="model-promo__description">
        <slider-item-desk  :description="description" :current-pos="currentPos"></slider-item-desk>
      </div>
    </div>
  </div>
</template>

<script>
import sliderItem from "./sliderItem"
import sliderItemDesk from "./sliderItemDesk"

export default {
  name: "slider",
  components:{sliderItem, sliderItemDesk},
  data(){
    return {
      switchCH: false,
      currentPos:0,
      imgs:['days-gone.jpg','deatch-stranding.png','elderRing.jpg','god-of-war.jpg','insurgency.jpg','theElderScrol.jpg'],
      description:[
        {title:'Days Gone', price:'1599 ₽', sale:'-47%'},
        {title:'Death Stranding', price:'899 ₽', sale:'-74%'},
        {title:'ELDEN RING', price:'2299 ₽', sale:'-8%'},
        {title:'God of War', price:'2849 ₽', sale:'-10%'},
        {title:'Insurgency: Sandstorm', price:'499 ₽', sale:'-50%'},
        {title:'The Elder Scrolls V: Skyrim – Special Edition', price:'499 ₽', sale:'-69%'},
      ],
      corousel: false
    }
  },
  methods:{
    prevSlide(){
      if (this.currentPos > 0){
        this.switchCH = true
        this.currentPos--
        this.switchCH = false
      }
    },
    nextSlide(){
      this.corousel=false
      if(this.currentPos > this.imgs.length-2){
        this.corousel = true
        this.currentPos = 0
      }else {
        this.switchCH = true
        this.currentPos++
        this.switchCH = false
      }
    }
  },
  mounted() {
    let vm = this
    setInterval(function (){
      vm.nextSlide()
    },8000)
  }
}
</script>

<style scoped>
</style>
