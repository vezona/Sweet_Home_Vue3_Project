<template>
  <div class="container">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <router-link to="/indexfront" class="breadcrumb-item">首頁</router-link>
            <router-link to="/dashboardF/ProductsList" class="breadcrumb-item">系列產品</router-link>
            <li class="breadcrumb-item active" aria-current="page">{{productTitle}}</li>
        </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['productTitle'],
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>

.breadcrumb-item {
    color: $mainColor;
    text-decoration: none;
}

.breadcrumb-item:hover {
    color: $mainColor;
    font-weight: bold;
}

.breadcrumb-item.active:hover{
    color: $gray-600;
    font-weight: normal;
}

</style>
