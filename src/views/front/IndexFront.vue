<template>
  <div>
    <frontNav></frontNav>
    <div class="carousel"></div>
    <swiper id="headSwiper" :autoplay="autoplay">
      <div class="headTextWrap">前台首頁</div>
      <swiper-slide v-for="img in swiperImg" :key="img">
        <div class="img-wrap">
          <img :src="img" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import frontNav from '../../components/frontNav.vue'
import SwiperCore, {
  EffectCube,
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

SwiperCore.use([EffectCube, Pagination, Autoplay, EffectFade])
export default {
  data () {
    return {
      swiperImg: [
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626579839301.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LTBAfan2lQZpFG7ly%2Bbjm%2BC7MppftMd%2F64ig%2F%2BhGMjoo2cvmiaomMtJLXWwwOlx4anqXuYGEF2%2FkzYgOEo9hdP6vzyqQy6U2LXw6HvdP5zM4C%2FAC3E1lmllvEbRs%2B%2BhOOtIHACiO%2BEuVFiWWKSz2EuN%2FifL5DlkSKBoZ7Ya5s4%2FRZQj2dF1X91IeLlR6pXTZ5iTkD3NiY0L2BcdyU54X%2FOzv6VQCwiJs%2BzQp8FX2FkJeABlhGOst6EP8h4GMXMCk619c4Z5Yae0pnWW7aWU%2Bo8blrsxSgkmrULXAz1MHCjEO83nMLJSQIzkTjpdPCtQrgKL2RdYFFoePhnYDlgfpgg%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1625818741231.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nU5dkewmajuIqoQDnsCGSZYclzax36DwHjZ4dqvq6MZ6%2FnWQgTfOxWdDsKofkL3bneGlh4cuW%2BMJHlPOIvInDngYKyz0meTStOVyHNWCBJUBbbfcwMny97s8X7PW%2FqDWE2JsoApL4oTbubcXP9tViU6lUeX6Mkgr%2BJ2pOGFwxaOt3gCBsPS8tLQpCP0Ys4PVOK%2BbpkXd%2BM6AcYTSmzb6hwaN%2BGhPO8JgDXhOq7ngBVk4L3NlqTcBK54vZtUsJDPgKo28BuIkY7vPfAdA6BbKRAdGCXXtwhLx%2FktlkurLeGIGqGv6ZBSVx2JHcvyElsbw%2FJnJSc82SIpLZh0caIzBTQ%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626579839301.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LTBAfan2lQZpFG7ly%2Bbjm%2BC7MppftMd%2F64ig%2F%2BhGMjoo2cvmiaomMtJLXWwwOlx4anqXuYGEF2%2FkzYgOEo9hdP6vzyqQy6U2LXw6HvdP5zM4C%2FAC3E1lmllvEbRs%2B%2BhOOtIHACiO%2BEuVFiWWKSz2EuN%2FifL5DlkSKBoZ7Ya5s4%2FRZQj2dF1X91IeLlR6pXTZ5iTkD3NiY0L2BcdyU54X%2FOzv6VQCwiJs%2BzQp8FX2FkJeABlhGOst6EP8h4GMXMCk619c4Z5Yae0pnWW7aWU%2Bo8blrsxSgkmrULXAz1MHCjEO83nMLJSQIzkTjpdPCtQrgKL2RdYFFoePhnYDlgfpgg%3D%3D'
      ],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    }
  },
  created () {},
  components: { frontNav, Swiper, SwiperSlide },
  methods: {}
}
</script>

<style lang="scss" scoped>
/deep/ .navbar {
  background-color: transparent !important;
  /* #214c6f; */
  a {
    color: black !important;
  }
}

// .img-wrap{
//   max-height: 400px;
// }

#headSwiper {
  position: relative;
}

.headTextWrap {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  z-index: 2;
}

img {
  width: 100%;
  height: 50vw;
  object-fit: cover;
  object-position: 80% 100%;
}
</style>
