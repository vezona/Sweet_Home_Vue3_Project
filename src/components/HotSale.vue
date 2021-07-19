<template>
<div class="container my-5">
      <div class="newIn">
      <h3 class="title fw-bold pb-5">熱門單品</h3>

      <swiper
        :slides-per-view="3"
        :space-between="20"
        :autoplay="autoplay" :loop="loop"
        navigation
        :pagination="{ clickable: true }"
        class="pb-5"
      >
        <swiper-slide  v-for="i in 3" :key="i">
          <div class="cardWrap">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626579585721.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pjt%2BVrnK6JVZhDmzVo%2BRifmABnwPGLDOH1rGa5KhyE3gV258%2BvFYtpUjahZ52vNakVx4Z3I6Ju1em0pm1Ph%2F7f05iwcQT2URKmcNjF12aJDE39qRAmlV1dRTRNPCRhkX8zhfuAj5duOzQT7f3C%2FqAIgD57TjZI%2FVchc4BySN5s3D77iIc%2BE0AS5nVKr4tofhzq6VRvmG1Aj8ZNONoq4k6XIKBvCbkKuQU79Jtm%2BNcoUIeOZnUe7UcTmh6SEGZtmE8U64eiKHgCpAEIoGimK6pzNjPOAcmzTRs3ackG3bOLofYC2KgNuf1CUfkzkj8UCH6476%2FuIi2vQ4dLHQStDuhA%3D%3D" alt="">
            <div class="info-wrap text-center py-3">
              <div class="productName ">商品名稱</div>
              <p>價格</p>
              <p>原價</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
  </div>
</div>
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])

export default {
  data () {
    return {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }

}
</script>

<style lang="scss" scoped>
.title{
    position: relative;
}
.title:before{
    content: "";
    position: absolute;
    height: 3px;
    width: 40px;
    background: #2b6d7e;
    top: 45px;
    left: 0;
}

// 輪播點點
.swiper-container:deep(.swiper-button-prev),
.swiper-container:deep(.swiper-button-next){
  color: red;
  display: none;
}

:deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 1px;
    display: inline-block;
    border-radius: 0;
    background: #000;
    opacity: 0.2;
}

:deep(.swiper-pagination-bullet-active){
  background: #2b6d7e;
    opacity: 1;
}

.info-wrap{
  background-color:  rgba(155, 142, 142, 0.3);
}

.productName{
  color: #2b6d7e;
  font-weight: bold;
}

@media (max-width: 576px) {
    .title {
        text-align: center;
    }
    .title:before{
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>
