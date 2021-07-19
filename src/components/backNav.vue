<template>
  <div id="nav">
    <nav class="navbar navbar-expand-md navbar-light bg-light px-3">
      <!-- <a class="navbar-brand" href="#">首頁</a> -->
      <router-link to="/indexfront" class="nav-link">首頁</router-link>
      <router-link to="/dashboard/indexback" class="nav-link"
        >後台首頁</router-link
      >
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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/dashboard/productslist" class="nav-link"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link"
              >訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link"
              >優惠券列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/analysize" class="nav-link"
              >報表分析</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/UploadImg" class="nav-link"
              >上傳圖片</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar {
  background-color: $mainColor !important;
  /* #214c6f; */
  a {
    color: white !important;
  }
}
</style>
