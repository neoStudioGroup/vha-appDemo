<style lang="stylus">
@import "./assets/stylus/ionicons.styl"
@import "./assets/stylus/global.styl"
#app
  >.vha_UI-view
    .vha_UI-tabbar
      height rpx(150) !important
      .fa-th
        font-size 1.6em
      .fa-info-circle
        font-size 1.8em
    // background url(./assets/images/HTML5.png)
    // .vha_UI-subview
    //   >.vha_UI-routerview
    //     >.ui-r-center
    //       background-color #f5f5f5
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-app>
    <vha-view direction="vertical">
      <vha-subview>
        <vha-navbar sideButton="left"></vha-navbar>
      </vha-subview>
      <vha-subview full="height">
        <vha-routerview></vha-routerview>
      </vha-subview>
      <vha-subview>
        <vha-tabbar>
          <vha-tab icon="fa fa-th fa-2x" push="/components">组件</vha-tab>
          <vha-tab icon="fa fa-mobile-phone fa-2x" push="/native">设备</vha-tab>
          <vha-tab icon="fa fa-info-circle fa-2x" push="/about">关于</vha-tab>
        </vha-tabbar>
      </vha-subview>
    </vha-view>
  </vha-app>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'PGApp',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      exit: false,
      timeid: 0
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 进入页面创建
    onBackButton: function () {
      this.$vha.toast.showShortBottom("再点击一次退出!")
        
      clearTimeout(this.timeid)
      this.timeid = setTimeout(() => {
        this.exit = false
      }, 2000)
      
      if (this.exit) {
        this.$vha.app.exitApp()
      } else {
        this.exit = true
      }
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在

    // 监听返回键
    document.addEventListener('deviceready', () => {
      document.addEventListener("backbutton", this.onBackButton, false)
    }, false)
  },
  activated() {
    //keep-alive组件激活时
  },
  deactivated() {
    //keep-alive组件停用时
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
    
    // 注销返回键的监听
    document.removeEventListener("backbutton", this.onBackButton, false)
  },
  destroyed() {
    //销毁后
  }
}
</script>
