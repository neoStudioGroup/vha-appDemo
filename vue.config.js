const path = require('path')

module.exports = {
  outputDir: 'www',
  baseUrl: '',
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      stylus: {
        // 全局使用 rpx()
        import: [__dirname + '/vha-components/assets/stylus/method.styl']
        // import: ['~vha-components/assets/stylus/method.styl']
      }
    }
  }
}