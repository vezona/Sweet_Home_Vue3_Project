<template>
  <div>
    <frontNav></frontNav>
      <div class="carousel"></div>
      <div class="container">前台首頁</div>
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="img in swiperImg" :key="img">
          <div class="img-wrap">
             <img :src="img">
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import frontNav from '../../components/frontNav.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
export default {
  data () {
    return {
      swiperImg: ['img/america.jpg',
        'img/america2.jpg',
        'img/america3.jpg']

    }
  },
  components: { frontNav, Swiper, SwiperSlide },
  methods: {
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
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

// .img-wrap{
//   max-height: 400px;
// }
// https://css-tricks.com/almanac/properties/o/object-position/

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center
}
</style>
