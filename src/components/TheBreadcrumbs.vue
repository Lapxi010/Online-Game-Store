<template>
  <div class="breadcrumbs">
    <div class="limit">
      <div class="breadcrumbs-wrapper">
        <div class="breadcrumbs-main">
          <router-link v-for="(item, id) of breads" :key='id' class="breadcrumbs-main__item" :to="item.path">{{item.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBreadcrumbs",
  props:['breads']
}
</script>

<style scoped>

</style>
