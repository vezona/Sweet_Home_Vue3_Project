<template>
    <!-- <div id="nav"> -->
    <nav class="navbar navbar-expand-md navbar-light bg-light px-3 mb-3">
      <!-- <a class="navbar-brand" href="#">首頁</a> -->
      <router-link to="/indexfront" class="nav-link">首頁</router-link>

        <!-- 購物車跟登入icon -->
      <ul class="navbar-nav navbar-icons flex-row">
          <li class="me-3">
            <span class="material-icons">
                <router-link to="/dashboardF/login" class="nav-link member_login">perm_identity</router-link>
            </span>
          </li>
          <li class="me-3 position-relative">
            <span class="material-icons">
                <router-link to="/dashboardF/cart" class="nav-link">
                shopping_cart
                </router-link>
                <span class="badge bg-danger position-absolute"
                v-if="cartItem > 0">{{cartItem}}</span>
            </span>
          </li>
          <li class="me-3">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </li>
      </ul>

      <!-- 收闔列表 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 justify-content-around">
          <li class="nav-item">
            <router-link to="/dashboardF/about" class="nav-link"
            :class="{'active': activeItem === 1}" @click="addActive(1)">經營理念</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboardF/newin" class="nav-link"
            :class="{'active': activeItem === 2}" @click="addActive(2)">本季新品</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/dashboardF/ProductsList" class="nav-link"
            :class="{'active': activeItem === 3}" @click="addActive(3)">系列產品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboardF/onsale" class="nav-link"
            :class="{'active': activeItem === 4}" @click="addActive(4)">限時特價</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboardF/decorateIdea" class="nav-link"
            :class="{'active': activeItem === 5}" @click="addActive(5)">居家佈置靈感</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              各式問題
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </nav>
  <!-- </div> -->
</template>

<script>
export default {
  data () {
    return {
      cartItem: 1,
      activeItem: 1
    }
  },
  methods: {
    addActive (i) {
      this.activeItem = i
    }
  }

}
</script>

<style lang="scss" scoped>
.navbar{
  background-color: $mainColor !important;
   /* #214c6f; */
  a:not(.dropdown-item) {
    color:white !important
  }
}

.nav-link.active{
  font-weight: bold;
}

.material-icons .badge{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  top: -5px;
  right: -10px;
  font-size:12px
}

@media (min-width: 768px) {
  .navbar-icons{
    order:2
  }

}

</style>
