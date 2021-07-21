<template>
  <div class="wrap">
    <loading v-if="loading"></loading>
    <div class="container mt-4" v-else>
      <breadCrumb
        class="breadcrumbWrap mb-5"
        :productTitle="product.title"
      ></breadCrumb>
      <div class="product-Info mb-5 d-flex flex-wrap justify-content-center">
        <div class="col-10 col-sm-6">
          <div class="showProductImg">
            <img :src="previewImage" alt="" />
            <!-- swiper -->
            <swiper
              class="pt-2 pb-4"
              :slides-per-view="3"
              :space-between="10"
              :mousewheel="mousewheel"
              navigation
              :pagination="{ clickable: true }"
            >
              <swiper-slide
                v-for="(i, index) in product.imagesUrl"
                :key="i.index"
              >
                <img
                  :class="{ imgBorder: previewImage === i }"
                  :src="i"
                  alt=""
                  @click="showImage(i, index)"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <div
          class="
            col-10 col-sm-6
            px-3
            d-flex
            flex-column
            justify-content-between
          "
        >
          <div class="info">
            <h4>{{ product.title }}</h4>
            <p>NT$ {{ product.price }}</p>
            <p>商品數量 {{ product.num }}</p>
          </div>
          <div>
            <p>{{ warning }}</p>
            <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="minus"
              >
                -
              </button>
              <input
                type="text"
                class="form-control text-center"
                :value="number"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="add"
              >
                +
              </button>
            </div>
            <button
              class="btn btn-secondary w-100"
              type="button"
              @click="addToCart"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <!-- 商品描述tab -->
      <div class="tabWrap">
        <ul class="nav nav-tabs text-center">
          <li class="nav-item col-6" v-for="(i, index) in tabs" :key="i.index">
            <p
              class="tab"
              :class="{ active: tabIndex === index }"
              @click="showtab(index)"
            >
              {{ i }} {{ index }}
            </p>
          </li>
        </ul>
        <div class="tabContent p-3">
          <div v-if="tabIndex === 0">
            <p>{{ product.description }}</p>
          </div>
          <div v-else>退換貨 購物</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/Loading.vue'
import breadCrumb from '@/components/BreadCrumb.vue'

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
  components: { loading, Swiper, SwiperSlide, breadCrumb },
  data () {
    return {
      product: '',
      loading: true,
      mousewheel: true,
      previewImage: '',
      imgBorder: false,
      number: 1,
      warning: '',
      tabs: ['產品描述', '購買須知'],
      tabIndex: 0
    }
  },
  mounted () {
    // console.log(this.$route) // 路由屬性
    // console.log(this.$router) // 路由方法

    console.log(this.$route.params.id) // 取得id
    // axios方法連api取資料
    const productId = this.$route.params.id
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`
    this.$http.get(`${url}/product/${productId}`).then((res) => {
      // console.log(res)
      if (res.data.success) {
        this.product = res.data.product
        // console.log(this.product)
        this.loading = false

        // 圖庫塞入首圖
        this.product.imagesUrl.unshift(res.data.product.imageUrl)
        this.previewImage = res.data.product.imageUrl
      } else {
        alert(res.data.message)
      }
    })
  },
  methods: {
    showImage (imgUrl, index) {
      this.previewImage = imgUrl
    },
    add () {
      if (this.number < this.product.num) {
        this.number += 1
      } else {
        this.number = this.product.num
        this.warning = '庫存不足'
      }
    },
    minus () {
      this.warning = ''
      if (this.number > 1) {
        this.number -= 1
      } else {
        this.number = 1
      }
    },
    addToCart () {
      // ${process.env.VUE_APP_API}
      // /api/:api_path/cart
      const product = {
        product_id: this.product.id,
        qty: this.number
      }
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data: product }
        )
        .then((res) => {
          console.log(res)
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err)
        })
    },
    showtab (index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 500px;
}
.breadcrumbWrap {
  background-color: #f8f9fa;
}
.showProductImg img {
  height: 25vw;
}
.swiper-slide img {
  height: 10vw;
  cursor: pointer;
}

// 輪播點點
.swiper-container:deep(.swiper-button-prev),
.swiper-container:deep(.swiper-button-next) {
  display: none;
}

:deep(.swiper-pagination) {
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

:deep(.swiper-pagination-bullet-active) {
  background: #2b6d7e;
  opacity: 1;
}

//
.imgBorder {
  border: 4px solid #2b6d7e;
}

.form-control {
  border: 1px solid #2b6d7e;
}

// Tabs
.tabWrap {
  cursor: pointer;
}

.tab {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.tab:hover {
  border: 1px solid rgba(43, 109, 126, 0.2);
  // background-color: rgba(43,109,126,0.2);
  color: black;
}

.tab.active {
  border-bottom: 4px solid #2b6d7e;
  // background-color: #2b6d7e;
  color: #2b6d7e;
  font-weight: bold;
}

.tabContent {
  height: 400px;
  background-color: rgba(43, 109, 126, 0.1);
}

@media (max-width: 576px) {
  .showProductImg img {
    height: 50vw;
  }
  .swiper-slide img {
    height: 20vw;
    cursor: pointer;
  }
}
</style>
