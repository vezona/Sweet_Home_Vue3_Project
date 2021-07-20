<template>
  <div>
    <frontNav :class="{changeColor:scrollHeight>200}"></frontNav>
    <div class="carousel"></div>
    <swiper id="headSwiper" class="mt-5"
     :autoplay="autoplay" :loop="loop" effect="fade">
      <div class="headTextWrap">
        <div class="headText">
          <h3 class="fw-bold">滿足你對家的渴望</h3>
          <p>家的樣子，隨你所欲</p>
          <router-link to="/dashboardF/ProductsList" class="btn btn-light">看產品</router-link>
        </div>
      </div>
      <swiper-slide v-for="img in swiperImg" :key="img">
        <div class="headSwiper img-wrap">
          <img :src="img" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="container my-3">
      <div class="category">這邊要放分類</div>
    </div>
    <newIn></newIn>
    <productStyle></productStyle>
    <hotSale></hotSale>
  </div>
</template>

<script>
import frontNav from '../../components/frontNav.vue'
import newIn from '../../components/NewIn.vue'
import productStyle from '../../components/ProductStyle.vue'
import hotSale from '../../components/HotSale.vue'

import SwiperCore, {
  EffectCube,
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([EffectCube, Pagination, Autoplay, EffectFade])
export default {
  data () {
    return {
      navBgColor: 'white',
      scrollHeight: 0,
      swiperImg: [
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626678252421.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lkMBuhOfZcv3kX%2BXTuB%2BC88zC%2FK%2B1fBNfqngt%2FwWkDLmsgA4ueAGsUNgVKVcyX4s6ioFhswAoC0e02lLnBaQue%2FFJjMEpg3KP5TAszM7jbgLNFJWYN5v3b10KwiVMLUoeZ4XefYr0v%2ByxhX3dPk%2BWw3DjmAbQfReKsyIMByV32%2BZdyqfhFT0he42STxXNsMLVsIy3hAvD89mFZJZrbWHfX5hB%2B4cCnLMuJWLpMQuvZg5fUK4a4A2xgEdSGZ86D%2BiUk1e%2B%2BAIICc76P162FTj8FfxilNbTeESEDG2kK0JoJqcyMFIW16TlOBEV2Dx7StGL%2BmXf%2BoZ3jSd4mqZHFDvsg%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626678367997.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DJnSTWxwFqcaTkM4x1xhERqdU6ACMXQE6JCPQkJ4Aebg5GSUvCv3Tcd80jFZiJhJa6f%2Fz19kr1dbhVcjmIVBH15uXrb9%2B5BNNpKxCDbTVH5dgPjyiFVunHu9Lc8f%2F0eEbWWrb%2B3iu7or2FgoAkHC201yfiEDqNvdBTCrD7Pu2xaXOoioqDx10uAB0iRPoxpowR6W9ee8I3G7tbiY9uUKcWHFIDAJXrTo10WnSck3SGQKDJ9l%2BkO9wOpF%2B0ddUlw98QZQ2sgx%2FKT0GwxkFEb6ZZBFG6zPPv%2FVzjo2PjM5nMn2k4T9q1%2BehyMidBkDRXR94hoOLA1zSDmMNpqPahtoNg%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626678733003.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=by3ZPgD%2F055JLbWgRnp6DjCy8XEDUJ8kDweCEk1HplmXvegCYllS%2FGxRSxNnn09zA5TY%2Frfs5tGWMmpS%2BWqszbpOji8RFg2VcA1mKw0RfTec6o38HseYG2fXLlQf76D2rGPxJE3XaBn0hq%2Bf3Vc1Lo7LQaK8rGVQ6s20gX%2FVmOM92ogFlVcP1UcC5ghGaNgf8yD0eORAVzHvhej%2Fmyhp%2By99F3ScpQEabZkrMVYjz%2BIRwpnD5XqQho%2BOXMe0GgTul0vH5GIquAk1g6Gxu7ywGayrYK0pKBZO00ZoLKLyd0mxY2h4IAkXD91xbPrrBdnmUjmoipBWf7pKgmMscLdvrQ%3D%3D'
      ],
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      loop: true
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: { frontNav, Swiper, SwiperSlide, newIn, productStyle, hotSale },
  methods: {
    handleScroll () {
      // console.log(window.scrollY) // 垂直位移量，隨滾輪變動
      this.scrollHeight = window.scrollY
      // console.log('可見螢幕高度', window.screen.height) // 可見螢幕高度，固定的
      // console.log('網頁內文高度', document.body.scrollHeight) // 網頁內文高度，固定的
      // window.scrollY > 200 ? console.log('大於200') : console.log('小於200')
    }
  }
}
</script>

<style lang="scss" scoped>
.changeColor{
   background-color: $mainColor !important;
   transition: 1.5s;
  //  color: black !important;
}

:deep(.navbar) {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  transition: 1s;
  a {
    color: black !important;
  }
}

#headSwiper {
  position: relative;
}

.headTextWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55vw;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 2;
}

.headText{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  // background-color: rgba(43, 109, 126, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  line-height: 3;
  letter-spacing: 5px;
}

.headSwiper img {
  width: 100%;
  height: 50vw;
  object-fit: cover;
  object-position: 80% 100%;
}

.btn-light{
  font-weight: bold;
  color: $mainColor;
}

@media (max-width: 576px) {
  .headSwiper img {
    width: 100%;
    height: 70vw;
    object-fit: cover;
    object-position: 80% 100%;
  }
  .headText{
    line-height: 1;
    top: 80%;
  }
}

@media (min-width: 768px) {
  .headText{
   width: 50vw;
  }
}

</style>
