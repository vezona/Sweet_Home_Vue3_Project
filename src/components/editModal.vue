<template>
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
            aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="productModalLabel" class="modal-title">
                    <span v-if="isNew">新增產品</span>
                    <span v-else>編輯產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="mb-1">
                            <div class="form-group">
                                <label for="imageUrl">輸入圖片網址</label>
                                <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="temProduct.imageUrl">
                            </div>
                            <img class="img-fluid" :src="temProduct.imageUrl" alt="">
                        </div>
                        <div>
                            <button class="btn btn-outline-primary btn-sm d-block w-100">
                                新增圖片
                            </button>
                        </div>
                        <div>
                            <button class="btn btn-outline-danger btn-sm d-block w-100">
                                刪除圖片
                            </button>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                            <label for="title">標題</label>
                            <input id="title" type="text" class="form-control" placeholder="請輸入標題"  v-model="temProduct.title">
                        </div>

                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="category">分類</label>
                                <input id="category" type="text" class="form-control" placeholder="請輸入分類"  v-model="temProduct.category">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">單位</label>
                                <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="temProduct.unit">
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="origin_price">原價</label>
                                <input id="origin_price" type="number" min="0" class="form-control"
                                    placeholder="請輸入原價" v-model="temProduct.origin_price">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">售價</label>
                                <input id="price" type="number" min="0" class="form-control"
                                    placeholder="請輸入售價" v-model="temProduct.price">
                            </div>
                        </div>
                        <hr>

                        <div class="form-group">
                            <label for="description">產品描述</label>
                            <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述" v-model="temProduct.description">
            </textarea>
                        </div>
                        <div class="form-group">
                            <label for="content">說明內容</label>
                            <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容" v-model="temProduct.content">
            </textarea>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1"
                                    :false-value="0" v-model="temProduct.is_enabled">
                                <label class="form-check-label" for="is_enabled">是否啟用</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    取消
                </button>
                <button type="button" class="btn btn-primary">
                    確認
                </button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
// import modalMixin from '@/mixins/modalMixin'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      productModal: '',
      temProduct: {}
    }
  },
  //  mixins: [modalMixin],
  props: ['isNew', 'temp'],
  mounted () {
    // 編輯或新增的Modal
    console.log(this.$refs)
    // 用refs取得Dom元素
    this.productModal = new Modal(this.$refs.productModal)
    // this.temProduct = { ...this.temp }
  },
  watch: {
    temProduct () {
      this.temProduct = this.temp
    }
  },
  methods: {
    openProductModal () {
      console.log(this.temp)
      this.productModal.show()
    },
    closeProductModal () {
      this.modal.hide()
    }
  }
}
</script>

<style>

</style>
