<template>
  <!-- <div id="nav"> -->
  <nav class="navbar navbar-expand-md navbar-light bg-light px-3 mb-3">
    <!-- <a class="navbar-brand" href="#">首頁</a> -->
    <router-link to="/indexfront" class="nav-link">首頁</router-link>

    <!-- 購物車跟登入icon -->
    <ul class="navbar-nav navbar-icons flex-row">
      <li class="me-3" @click="addActive(6)">
        <span class="material-icons">
          <router-link to="/dashboardF/login" class="nav-link member_login"
            >perm_identity</router-link
          >
        </span>
      </li>
      <li class="me-3 position-relative shoppingCartWrap" v-if="cartShow" @click="addActive(0)">
        <span class="material-icons">
          <a class="nav-link">
            shopping_cart
          </a>
          <span class="badge bg-danger position-absolute" v-if="cartItem > 0">{{
            cartItem
          }}</span>
        </span>
        <!-- 購物車hover顯示小卡 -->
        <div class="shopCartCard position-absolute p-3 text-center d-flex flex-column justify-content-between">
          <h5>購物車項目</h5>
          <div class="shopCartList p-3">
            <div v-for="i in cart" :key="i.index" class="d-flex align-content-center">
              <img :src="i.product.imageUrl" class="col-4 me-2 pb-2" alt="">
              <p>{{i.product.title}}</p>
            </div>
          </div>
          <button class="btn btn-secondary mt-3" type="button">
            <router-link to="/dashboardF/cart" class="text-decoration-none">前往購物車列表</router-link>
          </button>
        </div>
      </li>
      <li class="me-3">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </li>
    </ul>

    <!-- 收闔列表 -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav w-100 justify-content-around">
        <li class="nav-item">
          <router-link
            to="/dashboardF/about"
            class="nav-link"
            :class="{ active: activeItem === 1 }"
            @click="addActive(1)"
            >經營理念</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/dashboardF/newin"
            class="nav-link"
            :class="{ active: activeItem === 2 }"
            @click="addActive(2)"
            >本季新品</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/dashboardF/ProductsList"
            class="nav-link"
            :class="{ active: activeItem === 3 }"
            @click="addActive(3)"
            >系列產品</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/dashboardF/onsale"
            class="nav-link"
            :class="{ active: activeItem === 4 }"
            @click="addActive(4)"
            >限時特價</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/dashboardF/decorateIdea"
            class="nav-link"
            :class="{ active: activeItem === 5 }"
            @click="addActive(5)"
            >居家佈置靈感</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            各式問題
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <!-- </div> -->
</template>

<script>
import emitter from '../assets/js/emitter'

export default {
  data () {
    return {
      cart: '',
      cartItem: 0,
      activeItem: 0,
      cartShow: true
    }
  },
  mounted () {
    this.getCartData()
    // emitter 發起監聽，調整購物車商品數量，有聽到變化再調整
    emitter.on('update-cart', () => {
      this.getCartData()
    })
    // 隱藏或顯示cart
    emitter.on('cart-hide', () => {
      this.cartShow = false
    })
  },
  methods: {
    getCartData () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          // console.log(res)
          // console.log(res.data.data.carts.length)
          this.cart = this.cartItem = res.data.data.carts
          this.cartItem = res.data.data.carts.length
          console.log(this.cart)
        })
        .catch((err) => {
          alert(err)
        })
    },
    addActive (i) {
      this.activeItem = i
      if (i > 0) {
        this.cartShow = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $mainColor !important;
  /* #214c6f; */
  a:not(.dropdown-item) {
    color: white !important;
  }
}

.nav-link.active {
  font-weight: bold;
}

.material-icons .badge {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  top: -5px;
  right: -10px;
  font-size: 12px;
}

.shoppingCartWrap:hover{
  cursor: pointer;
  .shopCartCard{
    display: flex !important;
  }
}

.shopCartCard{
  display: none !important;
  top: 40px;
  right: 0;
  background-color: white;
  border: 2px solid $mainColor;
  border-radius: .5rem;
  width: 300px;
  height: 300px;
  z-index: 3;
}

.shopCartCard h5{
  color: $mainColor;
  font-weight: bold;
}

.shopCartList{
  overflow-y: scroll;
  background-color: rgba(43,109,126,0.1);
}

@media (max-width: 576px) {
  .shopCartCard{
    width: 260px;
    top: 30px;
    right: -80px;
  }
}

@media (min-width: 768px) {
  .navbar-icons {
    order: 2;
  }
}
</style>
