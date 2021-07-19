<template>
  <div class="wrap pt-5">
    <div class="container d-flex">
      <aside class="col-3">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                餐盤
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>111</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                毛巾
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>222</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                碗筷
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>ccc</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        class="productList col-9 d-flex flex-wrap justify-content-between px-3"
      >
        <div class="card-wrap col-5 mb-4" v-for="i in 5" :key="i">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626579585721.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pjt%2BVrnK6JVZhDmzVo%2BRifmABnwPGLDOH1rGa5KhyE3gV258%2BvFYtpUjahZ52vNakVx4Z3I6Ju1em0pm1Ph%2F7f05iwcQT2URKmcNjF12aJDE39qRAmlV1dRTRNPCRhkX8zhfuAj5duOzQT7f3C%2FqAIgD57TjZI%2FVchc4BySN5s3D77iIc%2BE0AS5nVKr4tofhzq6VRvmG1Aj8ZNONoq4k6XIKBvCbkKuQU79Jtm%2BNcoUIeOZnUe7UcTmh6SEGZtmE8U64eiKHgCpAEIoGimK6pzNjPOAcmzTRs3ackG3bOLofYC2KgNuf1CUfkzkj8UCH6476%2FuIi2vQ4dLHQStDuhA%3D%3D"
            alt=""
          />
          <div class="text-wrap text-center">
            <div class="name">商品名稱</div>
            <div>價格</div>
            <button type="button" class="btn">查看更多</button>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loading"></loading>
    <div class="container">
      <div class="mt-4">
        <!-- 商品列表 -->
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>{{ item.title }}</td>
              <td>
                <div class="price">{{ item.price }}</div>
                <div class="origin_price">原價{{ item.origin_price }}</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <router-link
                    :to="`/dashboardF/product/${item.id}`"
                    class="btn btn-outline-secondary"
                    >查看更多</router-link
                  >
                  <button type="button" class="btn btn-outline-danger">
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 這邊是區域註冊，改用全域註冊的loading
// import loading from '@/components/Loading.vue'

export default {
  name: 'ProductsList',
  // components: { loading }, 改用全域註冊的loading這邊就不用加了，直接用
  data () {
    return {
      user: {},
      products: '',
      loading: true
    }
  },
  created () {
    this.$http
      .get(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      )
      .then((res) => {
        console.log(res)
        this.products = res.data.products
        this.loading = false
      })
    console.log(process.env.VUE_APP_API)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.card-wrap {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
