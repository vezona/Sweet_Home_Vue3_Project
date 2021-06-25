<template>
  <backNav></backNav>
  <router-view></router-view>
</template>

<script>
import backNav from '../../components/backNav.vue'
export default {
  components: { backNav },
  // 做後臺登入驗證的阻擋
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(api)
      .then((response) => {
        // this.$httpMessageState(response, '登入')
        if (!response.data.success) {
          alert('請先登入')
          this.$router.push('/loginBack')
        }
      })
  }

}
</script>

<style>

</style>
