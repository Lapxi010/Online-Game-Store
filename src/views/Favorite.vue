<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <div class="catalog">
    <div class="limit">
        <div class="catalog__wrapper" v-if="favorite.length !== 0">
          <div class="catalog__wrapper">
            <div class="catalog__title">
              <h1 class="catalog__title__head">каталог понравившихся <span class="catalog__title__count">{{favorite.length}}</span></h1>
            </div>
            <div class="catalog__cards">
              <cardmini v-for="(item, id) of favorite" :key="id" :item="item"></cardmini>
            </div>
        </div>
      </div>
      <div class="basket__wrapper__two" v-else>
        <div class="basket__wrapper__title">В вашем Избранном пока пусто :(</div>
        <button class="stand-btn" @click="$router.push('/catalog')">Поискать в Каталоге</button>
      </div>
    </div>
  </div>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"
import cardmini from "../components/cards/cardmini"
import {useStore} from "vuex"

export default {
  name: "Favorite",
  components:{TheBreadcrumbs, cardmini},
  setup(){
    const store = useStore()

    const breads = [
      {name:'Главная',path:'/'},
      {name:'Избранное',path:'#'}
    ]

    const favorite = store.getters['favorite/getFavorite']

    return {
      breads,
      favorite
    }
  }
}
</script>

<style scoped>

</style>
