<template>
  <TheNavbar></TheNavbar>
  <router-view/>
  <TheFooter></TheFooter>
</template>

<script>
import TheNavbar from "./components/TheNavbar"
import TheFooter from "./components/TheFooter"

export default {
  components:{TheNavbar, TheFooter}
}
</script>

<style lang="scss">

</style>
