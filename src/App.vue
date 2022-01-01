<template>
    <div class="wrapper">
      <TheNavbar></TheNavbar>
    </div>
  <router-view/>
</template>

<script>
import TheNavbar from "./components/TheNavbar"

  export default {
    components:{TheNavbar}
  }
</script>

<style lang="scss">

</style>
