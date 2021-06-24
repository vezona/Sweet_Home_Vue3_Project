<template>
  <div class="container">
      <div class="container">
            <div class="text-end mt-4">
                <button class="btn btn-primary" @click="showModal('new')">
                    建立新的產品
                </button>
            </div>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th width="120">
                            分類
                        </th>
                        <th>產品名稱</th>
                        <th width="120">
                            原價
                        </th>
                        <th width="120">
                            售價
                        </th>
                        <th width="100">
                            是否啟用
                        </th>
                        <th width="120">
                            編輯
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                        <td>{{item.category}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.origin_price}}</td>
                        <td>{{item.price}}</td>
                        <td>
                            <span class="text-success" v-if="item.is_enabled">啟用</span>
                            <span v-else>未啟用</span>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="showModal('edit',item)">
                                    編輯
                                </button>
                                <button type="button" class="btn btn-outline-danger btn-sm"
                                    @click="showModal('delete',item)">
                                    刪除
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
   <!-- <showmodal ref="productModal" :temp="tempProduct" :is-new="isNew"></showmodal> -->
</template>

<script>
import showmodal from '../../components/editModal.vue'
export default {
  data () {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io',
      apiPath: 'ffjjgogogo',
      products: [],
      page: 0,
      isNew: true,
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  components: {
    // delmodal,
    showmodal
    // pagination
  },
  methods: {
    getData () {
      this.$http.get(`${this.apiUrl}/api/${this.apiPath}/admin/products?page=1`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            // console.log(res.data.products)
            // console.log(res.data.pagination)
            this.products = res.data.products
            this.page = res.data.pagination
          } else {
            alert(res.data.message)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 跳出modal，這邊是用refs的方式，由外層去觸發內層方法
    showModal (detect, item) {
      if (detect === 'delete') {
        this.tempProduct = {}
        this.tempProduct = {
          ...item
        }
        this.$refs.deleteModal.openDelModal()
      } else if (detect === 'edit') {
        this.isNew = false
        this.tempProduct = {}
        this.tempProduct = {
          ...item
        }
        console.log(this.$refs.productModal)
        this.$refs.productModal.openProductModal()
      } else if (detect === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.$refs.productModal.openProductModal()
      }
    }
  },
  created () {
    // 先把登入頁取到token保留下來
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (!token) {
      window.location = './w4_mainHW_login.html'
    }

    // 接著要把token帶入api header 進行驗證，否則會取不到資料，也無法編輯刪除
    this.$http.defaults.headers.common.Authorization = token

    // 接著接產品的API資料
    this.getData()
  },
  mounted () {}

}
</script>

<style>

</style>
