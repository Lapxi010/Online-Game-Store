<template>
  <div class="news">
    <div class="compilition-wrapper wrapper">
      <div class="news__title">
        <h2 class="news__title-head">Свежее в блоге</h2>
      </div>
      <div class="news__cards">
        <cardmininews v-for="(item, id) of description" :num="id+1" :item="item"></cardmininews>
      </div>
      <div class="news__btn">
        <button class="stand-btn" @click="$router.push('/articles')">Все публикации</button>
      </div>
    </div>
  </div>
</template>

<script>
import cardmininews from "./cards/cardmininews"

export default {
  name: "TheNews",
  components:{cardmininews},
  setup(){
    const description = [
      {title:'Во что мы играли в 2021 году', date:'28.12.2021', type:'О нас', desc:'Фавориты команды GabeStore для ПК и консолей', views:854,comments:39},
      {title:'Рекомендованные игры с временной петлёй', date:'25.12.2021', type:'Подборки', desc:'Пройди, откатись, пройди ещё раз', views:709,comments:14},
      {title:'Угадай игру по валюте', date:'18.12.2021', type:'Неформат', desc:'Готовимся к инфляции', views:2719,comments:54}
    ]

    return {
      description
    }
  }
}
</script>

<style scoped>

</style>
