module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Sweet_Home_Vue3_Project/' // test20200915 為 repo 名稱
  : '/',
  // publicPath: '/dist/',
  filenameHashing: false, //不要雜湊
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/css/common.scss";
        `
      }
    }
  }
}
