<template>
  <div class="wrap pt-5">
    <loading v-if="loading"></loading>
    <div class="container d-flex flex-wrap justify-content-center">
      <aside class="col-12 col-sm-2 col-md-2 col-lg-2">
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
        class="productList col-12 col-sm-10 d-flex flex-wrap justify-content-between px-3"
      >
     <div class="col-12 col-sm-6 col-md-6 col-lg-4 px-2" v-for="item in products" :key="item.id">
        <div class="card-wrap mb-4" >
          <router-link class="productWrap" :to="`/dashboardF/product/${item.id}`">
            <div class="img-wrap">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div class="text-wrap text-center p-3">
              <div class="name">{{ item.title }}</div>
              <div class="price">特價 {{ item.price }}</div>
              <div class="origin_price">原價 {{ item.origin_price }}</div>
            </div>
          </router-link>
          <hr class="m-0 px-2">
          <div class="buy text-center p-3">
             <button type="button" class="btn buy-btn w-100">立即選購</button>
          </div>
        </div>
     </div>
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

.card-wrap{
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  word-wrap: break-word;
  background-color: #fff;
  overflow: hidden;
  transition: .5s;
}
.img-wrap{
  overflow: hidden;
}

.img-wrap img{
  transition: 1s;
  height: 15vw;
}

.card-wrap:hover {
  box-shadow: 1px 1px 10px 1px #9c9c97;
  filter: brightness(1.1);
  transition: .5s;
  overflow: hidden;

  img{
  transition: 1s;
  transform: scale(1.1);
  }
}
.productWrap{
  text-decoration: none;
  color: black;
}

.productWrap:hover{
  color:rgb(59, 59, 59)
}

.buy-btn{
  background-color: $mainColor;
  color: white
}

@media (max-width: 576px) {
  aside {
    padding-right: 2rem;
    padding-left: 2rem
  }
  .productList{
    margin-top: 30px
  }
  .img-wrap img{
    height: 40vw;
  }
}

</style>
