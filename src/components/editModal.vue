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
                                <label for="imageUrl">主圖網址</label>
                                <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="temProduct.imageUrl">
                               <img class="img-fluid" :src="temProduct.imageUrl" alt="">
                            </div>
                            <br>
                            <!-- 這邊跑其他圖片的迴圈 -->
                            <div class="mb-1">其他圖片</div>
                            <!-- 這邊是判斷如果tempProduct中的imagesUrl是陣列的話(有多張圖片) -->
                            <div v-if="Array.isArray(tempProduct.imagesUrl)">
                                <div class="form-group" v-for="(img,index) in tempProduct.imagesUrl"
                                    :key="index">
                                    <br>
                                    <label for="imageUrl">圖片{{index+1}}</label>
                                    <input type="text" v-model="tempProduct.imagesUrl[index]"
                                        :id="`image${index}`" class="form-control" placeholder="請輸入圖片連結">
                                    <img class="img-fluid" :src="img" alt="">
                                </div>
                                <br>
                                <!-- 這邊是設定如果有多張圖片的話(編輯商品)，也需要出現新增刪除紐 -->
                                <div
                                    v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                                    <button class="btn btn-outline-primary btn-sm d-block w-100"
                                        @click="tempProduct.imagesUrl.push('')">
                                        <!-- 這邊的push是建立一個新的空物件，因為上面的input框是用tempProduct去跑回圈 -->
                                        <!-- 所以如果建立新的空物件，就會多出現一個輸入框 -->
                                        新增圖片
                                    </button>
                                </div>

                                <!-- 新增或編輯的"新增紐"需要分開，但是刪除扭只要一個，是因為一旦push進去tempProduct的陣列中，這個迴圈就會跑，就帶有刪除扭了 -->
                                <div v-else>
                                    <button class="btn btn-outline-danger btn-sm d-block w-100"
                                        @click="tempProduct.imagesUrl.pop()">
                                        刪除圖片框
                                    </button>
                                </div>
                            </div>

                            <!-- 這邊是說如果上面沒有多張圖片的話(建立新商品)，就出現新增圖片的按鈕 -->
                            <!-- 這邊的@click 多加了一個addNewImg的方法，是因為它不像上面是用迴圈跑出來的，所以要手動加入 -->
                            <div v-else>
                                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addNewImg">
                                    新增圖片
                                </button>
                            </div>
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
    // console.log(this.$refs)
    // 用refs取得Dom元素
    this.productModal = new Modal(this.$refs.productModal)
    // this.temProduct = { ...this.temp }
  },
  watch: {
    temp () {
      this.temProduct = this.temp
    }
  },
  methods: {
    openProductModal () {
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
