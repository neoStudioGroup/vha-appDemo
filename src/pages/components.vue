<style lang="stylus">
._PG-components
  // UI组件-LOGO
  .p_UI-logo
    padding-top rpx(50)
    padding-bottom rpx(80)
    top 0
    width 100%
    height rpx(250)
    background-color #fff
    img
      margin 0 auto
      height rpx(250)
    p
      margin 0 auto
      color #888
      
  // UI组件-标题
  .p_UI-title
    position sticky
    top -1px
    padding rpx(20) rpx(14)
    font-size rpx(24)
    font-weight bold
    border-left 2px solid #919191
    color #919191
    background-color #f2f2f2
    z-index 99
    
  // UI组件-列表
  .p_UI-list
    li
      display flex
      align-items center
      height rpx(100)
      padding 0 rpx(40)
      border-1px-bottom(#ddd)
      font-size rpx(30)
      color #444
      span 
        margin-left rpx(10)
        font-size rpx(26)
        color #aaa
      i
        position absolute
        right rpx(30)
        width rpx(60)
        font-size rpx(60)
        color #444
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_PG-components">
    <vha-scrollview :keep-scroll="true">
      <!-- UI组件-LOGO -->
      <div class="p_UI-logo _df">
        <img src="../assets/images/logo.png">
      </div>

      <p class="p_UI-title" style="">基础 Base</p>
      <ul class="p_UI-list">
        <li @click.once="goto('Button/')">按钮<span>Button</span><i class="ion-md-phone-portrait"></i></li>
      </ul>
      
      <p class="p_UI-title">其它 Other</p>
      <ul class="p_UI-list">
        <li @click.once="goto('AppLogin/')">QQ 微信登陆<span>App Login</span><i class="ion-ios-chatbubbles"></i></li>
        <li @click.once="goto('SQLite/')">本地数据库<span>SQLite</span><i class="ion-ios-stats"></i></li>
      </ul>
      
    </vha-scrollview>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'PGcomponents',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    goto: function (page) {
      this.$router.push(page)
      this.$store.state.navbarTitle = page.replace("/","")
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>