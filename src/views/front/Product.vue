<template>
    <div class="wrap">
      <loading v-if="loading"></loading>
      <div class="container mt-5" v-else>
        <div class="product-Info d-flex flex-wrap">
         <div class="col-6">
            <div class="showProductImg">
              <img :src="previewImage === ''? product.imageUrl: previewImage" alt="">
               <!-- swiper -->
                <swiper
                  class="pt-2 pb-4"
                  :slides-per-view="3"
                  :space-between="10" :mousewheel='mousewheel'
                  navigation :pagination="{ clickable: true }">
                  <swiper-slide v-for="(i, index) in product.imagesUrl" :key="i.index">
                     <img
                     :class="{'imgBorder': previewImage === i }"
                     :src="i" alt="" @click="showImage(i, index)">
                  </swiper-slide>
                </swiper>
          </div>
         </div>

          <div class="col-6 px-3">
            <div class="info">
             <h4> {{product.title}}</h4>
             <p>NT$ {{product.price}}</p>
            </div>
          </div>
        </div>

        <!-- swiper -->
        <div class="col-6">

        </div>

      </div>
    </div>
</template>

<script>
import loading from '@/components/Loading.vue'

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  EffectFade
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, Mousewheel, EffectFade])

export default {
  name: 'product',
  components: { loading, Swiper, SwiperSlide },
  data () {
    return {
      product: '',
      loading: true,
      mousewheel: true,
      previewImage: '',
      imgBorder: false
    }
  },
  mounted () {
    // console.log(this.$route) // 路由屬性
    // console.log(this.$router) // 路由方法

    console.log(this.$route.params.id) // 取得id
    // axios方法連api取資料
    const productId = this.$route.params.id
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`
    this.$http.get(`${url}/product/${productId}`)
      .then(res => {
        // console.log(res)
        if (res.data.success) {
          this.product = res.data.product
          // console.log(this.product)
          this.loading = false

          // 圖庫塞入首圖
          this.product.imagesUrl.unshift(res.data.product.imageUrl)
        } else {
          alert(res.data.message)
        }
      })
  },
  methods: {
    showImage (imgUrl, index) {
      this.previewImage = imgUrl
      // console.log(event.currentTarget.src)
      // if (imgUrl === event.currentTarget.src) {
      //   event.currentTarget.classList.add('imgBorder')
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.showProductImg img{
    height: 25vw;
}
.swiper-slide img{
  height: 10vw;
  cursor: pointer;
}

// 輪播點點
.swiper-container:deep(.swiper-button-prev),
.swiper-container:deep(.swiper-button-next){
  display: none;
}

:deep(.swiper-pagination){
  bottom: 0;
}

:deep(.swiper-pagination-bullet) {
    width: 20px;
    height: 3px;
    display: inline-block;
    border-radius: 0;
    background: #000;
    opacity: 0.2;
}

:deep(.swiper-pagination-bullet-active){
  background: #2b6d7e;
    opacity: 1;
}

//
.imgBorder{
  border: 2px solid #2b6d7e
}

</style>
