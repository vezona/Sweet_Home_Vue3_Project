<template>
  <div class="container mt-5">
    <div>
      <input
        type="file"
        id="file"
        class="form-control"
        placeholder="請輸入圖片連結"
        @change="uploadImg"
      />
    </div>
    <br />
    <div>上傳成功圖片網址</div>
    <div id="imgUrl"></div>

    <div class="mt-5">目前已有圖片</div>
    <div class="img-lists d-flex justify-content-between">
      <div
        class="cardWrap col-3 me-3"
        v-for="(img, index) in existImgUrl"
        :key="index"
      >
        <img :src="img" />
        <input class="w-100 mt-3" type="text" v-model="existImgUrl[index]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      existImgUrl: [
        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626579839301.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LTBAfan2lQZpFG7ly%2Bbjm%2BC7MppftMd%2F64ig%2F%2BhGMjoo2cvmiaomMtJLXWwwOlx4anqXuYGEF2%2FkzYgOEo9hdP6vzyqQy6U2LXw6HvdP5zM4C%2FAC3E1lmllvEbRs%2B%2BhOOtIHACiO%2BEuVFiWWKSz2EuN%2FifL5DlkSKBoZ7Ya5s4%2FRZQj2dF1X91IeLlR6pXTZ5iTkD3NiY0L2BcdyU54X%2FOzv6VQCwiJs%2BzQp8FX2FkJeABlhGOst6EP8h4GMXMCk619c4Z5Yae0pnWW7aWU%2Bo8blrsxSgkmrULXAz1MHCjEO83nMLJSQIzkTjpdPCtQrgKL2RdYFFoePhnYDlgfpgg%3D%3D',

        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1625818741231.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nU5dkewmajuIqoQDnsCGSZYclzax36DwHjZ4dqvq6MZ6%2FnWQgTfOxWdDsKofkL3bneGlh4cuW%2BMJHlPOIvInDngYKyz0meTStOVyHNWCBJUBbbfcwMny97s8X7PW%2FqDWE2JsoApL4oTbubcXP9tViU6lUeX6Mkgr%2BJ2pOGFwxaOt3gCBsPS8tLQpCP0Ys4PVOK%2BbpkXd%2BM6AcYTSmzb6hwaN%2BGhPO8JgDXhOq7ngBVk4L3NlqTcBK54vZtUsJDPgKo28BuIkY7vPfAdA6BbKRAdGCXXtwhLx%2FktlkurLeGIGqGv6ZBSVx2JHcvyElsbw%2FJnJSc82SIpLZh0caIzBTQ%3D%3D',

        'https://storage.googleapis.com/vue-course-api.appspot.com/ffjjgogogo/1626579585721.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pjt%2BVrnK6JVZhDmzVo%2BRifmABnwPGLDOH1rGa5KhyE3gV258%2BvFYtpUjahZ52vNakVx4Z3I6Ju1em0pm1Ph%2F7f05iwcQT2URKmcNjF12aJDE39qRAmlV1dRTRNPCRhkX8zhfuAj5duOzQT7f3C%2FqAIgD57TjZI%2FVchc4BySN5s3D77iIc%2BE0AS5nVKr4tofhzq6VRvmG1Aj8ZNONoq4k6XIKBvCbkKuQU79Jtm%2BNcoUIeOZnUe7UcTmh6SEGZtmE8U64eiKHgCpAEIoGimK6pzNjPOAcmzTRs3ackG3bOLofYC2KgNuf1CUfkzkj8UCH6476%2FuIi2vQ4dLHQStDuhA%3D%3D'
      ]
    }
  },
  methods: {
    uploadImg () {
      console.log('change')
      const fileInput = document.querySelector('#file')
      // 處理圖片
      console.dir(fileInput.files[0])
      const file = fileInput.files[0]
      // 用formdata的JS建構函式來上傳圖片
      const formdata = new FormData()
      formdata.append('file-to-upload', file)

      // 先加入驗證才能上傳
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = token

      // 上傳圖片
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`,
          formdata
        )
        .then((res) => {
          console.log(res)
          console.log(res.data.imageUrl)
          const showImgUrl = document.querySelector('#imgUrl')
          showImgUrl.innerHTML = res.data.imageUrl
        })
    }
  }
}
</script>

<style scoped>
#imgUrl {
  word-wrap: break-word;
  font-size: 12px;
}
img {
  width: 100%;
  height: 80%;
}

.url {
  word-wrap: break-word;
  font-size: 12px;
}
</style>
