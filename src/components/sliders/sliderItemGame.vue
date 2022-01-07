<template>
  <div class="slideritemGame">
    <div class="slideritemGame__container">
      <div class="slideritemGame__container__item">
        <div class="slideritemGame__container__item__img">
          <a class='slideritemGame__container__item__img__link' href="#">
            <img class='slideritemGame__container__item__img__link__img' :src="name" alt="dass">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderItemGame",
  props:['name']
}
</script>

<style scoped>

</style>
