<template>
<div class="container my-5">
      <div class="newIn">
      <h3 class="title fw-bold pb-5">新進單品</h3>

      <div class="d-flex">
        <div class="tex">
           <p>2021 夏季新主流</p>
           <p>夏日來臨，該如何迎接熱情洋溢的季節？
        防疫期間無法走出戶外沐浴陽光，那就邀請夏天進家門吧！
        挑選色彩繽紛傢俱，打造屬於自己的夏季氛圍。</p>
          </div>
          <img class="decoration col-4" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/UejXkVTo79C3PFOi9JQi1jWXnmn7pY5J8lCTspNKduzdXZ5LC3FYZB8gvWvUxkxfspdOuvVU95s0C22uXcFQWUB6KyT18NG6YW8UzW66CdSCwnNUrHMiQ7L0FkkE7yZf.png" alt="">
      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {}
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

.decoration{
  transform: scaleX(-1);
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
