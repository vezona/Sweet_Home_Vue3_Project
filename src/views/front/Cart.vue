<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr class="text-center">
          <th scope="col">
            <input type="checkbox" id="" name="" value=""
            @click="chooseAllItems" v-indeterminate="indeterStatus">
          </th>
          <!-- <button @click="indeterStatus = !indeterStatus">Click</button> -->
          <th scope="col">圖片</th>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col">折扣價</th>
          <th scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartData" :key="item.id"  class="text-center">
          <th scope="row" class="col-1">
             <input type="checkbox" id="" name="" value=""
             @click="chooseItem(index)">
          </th>
          <td class="col-2">
            <img :src="item.product.imageUrl" alt="">
          </td>
          <td calss="col-2">{{item.product.title}}</td>
          <td class="col-2">{{item.qty}}</td>
          <td class="col-2">{{item.product.price}}</td>
          <td class="col-2">{{item.qty*item.product.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import emitter from '../../assets/js/emitter'
export default {
  data () {
    return {
      cartData: '',
      // checked: false,
      indeterStatus: false,
      checkedItem: []
    }
  },
  mounted () {
    this.getCartData()
    emitter.emit('cart-hide')
  },
  // 自訂v-事件，有點複雜請見官網
  // https://v3.vuejs.org/guide/migration/custom-directives.html#_3-x-syntax
  directives: {
    indeterminate (el, binding) {
      el.indeterminate = Boolean(binding.value)
    }
  },
  methods: {
    getCartData () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          // console.log(res.data)
          this.cartData = res.data.data.carts
          // 塞入狀態
          this.cartData.map(i => {
            i.checkedStatus = false
            this.checkedItem.push(i.checkedStatus)
            // console.log(this.checkedItem)
          })
        })
    },
    chooseAllItems () {
      console.log(this.checkedItem)
      const test = this.checkedItem.map(i => {
        i.value = true
        console.log(i)
      })
      console.log(test)
      // console.log(this.checkedItem.every(Boolean))
    },
    chooseItem (index) {
      this.checkedItem[index] = !this.checkedItem[index]
      // this.indeterStatus = !this.indeterStatus
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  min-height: 500px;
}

</style>
