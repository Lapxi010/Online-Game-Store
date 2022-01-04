<template>
  <div class="card-mini-news">
    <img class="card-mini-news__img" :src="require(`../../assets/img/news/news${num}.webp`)" alt="logo">
    <div class="card-mini-news__info">
      <span class="card-mini-news__info-type">{{item.type}}</span>
      <span class="card-mini-news__info-date">{{item.date}}</span>
    </div>
    <a class="card-mini-news__article-title">{{item.title}}</a>
    <a class="card-mini-news__article-description">{{item.desc}}</a>
    <div class="card-mini-news__statistic">
      <div class="card-mini-news__statistic-views">
        {{item.views}}
      </div>
      <div class="card-mini-news__statistic-comments">
        {{item.comments}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardmininews",
  props:['num', 'item']
}
</script>

<style scoped>

</style>
