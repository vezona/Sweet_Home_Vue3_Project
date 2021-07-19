<template>
    <div id="nav">
    <nav class="navbar navbar-expand-md navbar-light bg-light px-3">
      <!-- <a class="navbar-brand" href="#">首頁</a> -->
      <router-link to="/indexfront" class="nav-link">首頁</router-link>

        <!-- 購物車跟登入icon -->
      <ul class="navbar-nav flex-row">
          <li class="me-3">
            <span class="material-icons">
                <router-link to="/dashboardF/login" class="nav-link member_login">perm_identity</router-link>
            </span>
          </li>
          <li class="me-3">
            <span class="material-icons">
                <router-link to="/dashboardF/cart" class="nav-link">
                shopping_cart</router-link>
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
            <router-link to="/dashboardF/about" class="nav-link">經營理念</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="#" class="nav-link">本季新品</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/dashboardF/ProductsList" class="nav-link">系列產品</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">限時特價</a>
          </li>
          <li class="nav-item active">
            <router-link to="#" class="nav-link">居家佈置靈感</router-link>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar{
  background-color: $mainColor !important;
   /* #214c6f; */
  a {
    color:white !important
  }
}
</style>
