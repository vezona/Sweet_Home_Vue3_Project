<template>
 <div class="wrap">
    <router-view></router-view>
 </div>
</template>

<style lang="scss">
// 因為要客製化BS的SCSS，已經在assets裡面調整了，所以這邊改成引入assets的scss
// @import "bootstrap";
@import "./assets/css/common.scss";

</style>

<script>
// import loading from '@/components/Loading.vue'
// export default {
//   data () {
//     return {
//       loading: true
//     }
//   },
//   components: { loading }
// }
</script>
