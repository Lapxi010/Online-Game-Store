<template>
  <div class="sliderGame__wrapper">
    <div class="sliderGame__wrapper__content">
      <div class="sliderGame__wrapper__content__slider">
        <div class="sliderGame__wrapper__content__slider__list">
          <div class="sliderGame__wrapper__content__slider__list__track" :style="`transform: translate3d(${-754 * currentPos}px,0px,0px)`">
            <slider-item-game v-for="item of data.countImg" :key="item" :name="data.img"  :num="item"></slider-item-game>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sliderGame__control">
    <button class="sliderGame__control__btn__up" :disabled="disableRight" @click="nextSlide"></button>
    <button class="sliderGame__control__btn__down" :disabled="disableLeft" @click="prevSlide"></button>
  </div>
</template>

<script>
import sliderItemGame from '../../components/sliders/sliderItemGame'

export default {
  name: "sliderGame",
  components:{sliderItemGame},
  props:['data'],
  data(){
    return {
      disableRight:false,
      disableLeft:true,
      currentPos:0,
    }
  },
  methods:{
    prevSlide(){
      if(this.currentPos < this.data.countImg){
        this.disableRight =  false
      }
      if (this.currentPos > 0){
        this.currentPos--
        this.disableLeft = false
        console.log(this.currentPos)
      }else{
        this.disableLeft= true
        console.log(this.currentPos)
      }
    },
    nextSlide(){
      if(this.currentPos ===0){
        this.disableLeft = false
      }
      if(this.currentPos > this.data.countImg-2){
        this.disableRight = true
        console.log(this.currentPos)
      }else{
        this.currentPos++
        this.disableRight = false
        console.log(this.currentPos)
      }
    }
  }
}
</script>

<style scoped>

</style>
