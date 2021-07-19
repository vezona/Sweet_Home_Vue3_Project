<template>
<div class="container my-5">
      <div class="style">
      <h3 class="title fw-bold pb-5">產品風格</h3>

      <div class="d-flex flex-wrap">
        <div class="style-wrap col-6">
          <router-link to="/dashboardF/ProductsList" class="hover-cover align-items-center justify-content-center">
          <span class="">日式</span>
          </router-link>
        </div>
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

.style-wrap{
  height: 200px;
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626678367997.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DJnSTWxwFqcaTkM4x1xhERqdU6ACMXQE6JCPQkJ4Aebg5GSUvCv3Tcd80jFZiJhJa6f%2Fz19kr1dbhVcjmIVBH15uXrb9%2B5BNNpKxCDbTVH5dgPjyiFVunHu9Lc8f%2F0eEbWWrb%2B3iu7or2FgoAkHC201yfiEDqNvdBTCrD7Pu2xaXOoioqDx10uAB0iRPoxpowR6W9ee8I3G7tbiY9uUKcWHFIDAJXrTo10WnSck3SGQKDJ9l%2BkO9wOpF%2B0ddUlw98QZQ2sgx%2FKT0GwxkFEb6ZZBFG6zPPv%2FVzjo2PjM5nMn2k4T9q1%2BehyMidBkDRXR94hoOLA1zSDmMNpqPahtoNg%3D%3D') center no-repeat;
  background-size: cover;
  cursor: pointer;
  padding: .25rem;
}

.hover-cover{
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color:transparent;
  border:1.5px solid hsla(0,0%,100%,.5);
}

.hover-cover:hover{
  background-color: rgba(0,0,0,0.5);
  transition: 1s;
  color:white;
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
