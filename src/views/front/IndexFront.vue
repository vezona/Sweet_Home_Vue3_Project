<template>
  <div>
    <frontNav></frontNav>
      <div class="carousel"></div>
      <div class="container">前台首頁</div>
  </div>
</template>

<script>
import frontNav from '../../components/frontNav.vue'
export default {
  components: { frontNav }
}
</script>

<style lang="scss" scoped>
/deep/ .navbar{
  background-color: transparent !important;
   /* #214c6f; */
  a {
    color: black !important;
  }
}
</style>
