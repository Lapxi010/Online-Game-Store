<template>
  <TheBreadcrumbs :breads="breads"></TheBreadcrumbs>
  <div class="catalog">
    <div class="limit">
      <div class="payment">
        <div class="payment__block">
          <h1>Успешно проведена оплата</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs"

export default {
  name: "SuccesPay",
  components:{TheBreadcrumbs},
  setup(){
    const breads = [
      {name:'Главная',path:'/'},
      {name:'Проведения оплаты',path:'#'}
    ]
    return {
      breads
    }
  }
}
</script>

<style scoped>

</style>
