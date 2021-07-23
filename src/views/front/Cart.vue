<template>
  <div class="container">
    <progressBar :tab-index="progress"></progressBar>
    <table class="table" v-if="progress===0">
      <thead>
        <tr class="text-center">
          <!-- <th scope="col">
            <input type="checkbox" id="" name="" value=""
            @click="chooseAllItems" v-indeterminate="indeterStatus">
          </th> -->
          <th scope="col">圖片</th>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col">折扣價</th>
          <th scope="col">小計</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartData" :key="item.id"  class="text-center">
          <!-- <th scope="row" class="col-1">
             <input type="checkbox" id="" name="" value=""
             @click="chooseItem(index)">
          </th> -->
          <td class="col-2">
            <img :src="item.product.imageUrl" alt="">
          </td>
          <td calss="col-2">{{item.product.title}}</td>
          <td class="col-3">
             <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="minusNum(item)">
                -
              </button>
              <input
                type="text"
                class="form-control text-center"
                :value="item.qty"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addNum(item)">
                +
              </button>
            </div>
          </td>
          <td class="col-1">{{item.product.price}}</td>
          <td class="col-1">{{item.qty*item.product.price}}</td>
          <td class="col-2">
            <button type="button" class="btn btn-info" @click="deleteCart(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <orderForm></orderForm>

  <div class="d-flex" :class="{'justify-content-end':progress === 0, 'justify-content-between':progress>0}">
    <button type="button" class="col-2 btn btn-secondary" v-if="progress===0" @click="changePage(0)">下一頁</button>
    <button type="button" class="col-2 btn btn-secondary" v-if="progress>0" @click="changePage(1)">上一頁</button>
    <button type="submit" class="col-2 btn btn-danger" v-if="progress>0">結帳</button>
  </div>

  </div>
</template>

<script>
import emitter from '../../assets/js/emitter'
import progressBar from '../../components/cart/ProgressBar.vue'
import orderForm from '../../components/cart/form.vue'
export default {
  data () {
    return {
      cartData: '',
      // checked: false,
      indeterStatus: false,
      checkedItem: [],
      progress: 0
    }
  },
  components: { progressBar, orderForm },
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
          console.log(res.data)
          this.cartData = res.data.data.carts
          console.log(this.cartData)
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
    },
    changePage (i) {
      if (i === 0) {
        this.progress = 1
      } else {
        this.progress = 0
      }
    },
    minusNum (item) {
      if (item.qty > 1) {
        item.qty -= 1
        this.updateCart(item)
      } else {
        item.qty = 1
        this.updateCart(item)
      }
    },
    addNum (item) {
      item.qty += 1
      this.updateCart(item)
    },
    updateCart (item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
        { data: data })
        .then(res => {
          console.log(res)
          alert(res.data.message)
        })
        .catch(err => {
          console.log(err)
          alert(err.message)
        })
    },
    deleteCart (item) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          console.log(res)
          alert(res.data.message)
          this.getCartData()
        })
        .catch(err => {
          console.log(err)
          alert(err.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  min-height: 500px;
}

.form-control {
  border: 1px solid #2b6d7e;
}

@media (max-width: 576px) {

}

</style>
