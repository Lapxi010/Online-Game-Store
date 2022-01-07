<template>
  <div class="compilition">
    <div class="compilition-wrapper wrapper">
      <div class="compilition-wrapper__title">
        <button class="compilition-wrapper__title-btn">Новинки</button>
      </div>
      <div class="compilition-wrapper__cards">
        <cardmini v-for="(item, id) of  data.slice(0,10)" :key="id" :item="item"></cardmini>
      </div>
      <div class="compilition-wrapper wrapper">
        <button class="stand-btn" @click="$router.push('/catalog')">Смотреть все</button>
      </div>
    </div>
  </div>
</template>

<script>
import cardmini from "./cards/cardmini"
import {useStore} from "vuex"
import {computed, onMounted, ref} from "vue";

export default {
  name: "TheCompilition",
  components:{cardmini},
  setup(){
    const store = useStore()
    onMounted(async () => {
      await store.dispatch("data/getAll")
    })

    const data = computed(()=> store.getters['data/getData'])
    console.log(data.value.target)

    return {
      data
    }
  }
}
</script>

<style scoped>

</style>
