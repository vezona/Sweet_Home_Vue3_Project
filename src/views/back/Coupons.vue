<template>
   <loading v-if="isLoading"></loading>
   <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>timetime</td>
        <td>
          <span class="text-success">啟用</span>
          <span class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- <CouponModal :coupon="tempCoupon" :is-new="isNew" ref="couponModal"
    @update-coupon="updateCoupon"/>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      coupons: ''
    }
  },
  mounted () {
    this.getCoupons()
  },
  methods: {
    getCoupons () {
      // /api/:api_path/admin/coupons?page=:page
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            console.log(res.data.coupons)
          } else {
            alert(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}
</script>

<style>

</style>
