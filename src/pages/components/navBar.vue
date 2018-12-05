<style lang="stylus">
.components_PG-navBar
  .p_UI-navbar
    position sticky !important
    top 0px
    background linear-gradient(to right, rgba(81, 145, 255, .9), rgba(56, 186, 254, .9))
    .vha_UI-button
      color rgba(255,255,255,0.9) !important
      &:active
        color rgba(255,255,255,0.4) !important
    .ui-n-leftBox
      padding rpx(20) !important
      width rpx(140) !important
      span
        margin-left rpx(6)
    .ui-n-middleBox
      padding rpx(12) 0
    .ui-n-rightBox
      width rpx(110) !important
    .vha_UI-input
      padding rpx(20)
      color #fff
      border-radius rpx(100)
      background-color rgba(0,0,0,0.14)
      &::-webkit-input-placeholder
        color #fff
    .ui-b-ileft
      font-size rpx(42)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-navBar">
    <vha-scrollview>
      <vha-navbar class="p_UI-navbar" title="我是页内导航栏" color="none">
        <vha-button class="_df _aic" slot="leftBox" type="base" icon="fa fa-map-marker fa-2x" size="full">
          <span>北京</span>
        </vha-button>
        
        <vha-view slot="titleBox" align="center" justify="center">
          <vha-input class="_tc" placeholder="请输入目的地/关键字" vhaType="none" size="full"></vha-input>
        </vha-view>
        
        <vha-button slot="rightBox" type="base" icon="fa fa-search fa-2x" size="full">
        </vha-button>
      </vha-navbar>
      
      <p class="_UI-title">类型 type：无 / 基本 / 正常</p>

      <div class="_UI-showBox">
        <vha-navbar title="none" type="none"></vha-navbar>
        <div class="_ph-4x"></div>
        <vha-navbar title="base" type="base"></vha-navbar>
        <div class="_ph-4x"></div>
        <vha-navbar title="normal"></vha-navbar>
      </div>
      
      <p class="_UI-title">颜色 color：信息 & 基本</p>

      <div class="_UI-showBox">
        <vha-navbar title="success" color="success"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="info" color="info"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="warning" color="warning"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="error" color="error"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="dark" color="dark"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="calm" color="calm"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="stable" color="stable"></vha-navbar>
        <div class="_ph-2x"></div>
        <vha-navbar title="light" color="light"></vha-navbar>
      </div>
      
      <p class="_UI-title">自定义 ：</p>
      
      <div class="_UI-showBox">
        <vha-navbar>
          替换全部内容
        </vha-navbar>
        <div class="_ph-4x"></div>
        <vha-navbar>
          <span slot="leftBox">
            替换左边内容
          </span>
          <span slot="titleBox">
            替换中间内容
          </span>
          <span slot="rightBox">
            替换右边内容
          </span>
        </vha-navbar>
        <div class="_ph-4x"></div>
        <vha-navbar>
          <vha-button slot="leftBox" icon="fa fa-bars fa-2x" size="full">
          </vha-button>
          <vha-button slot="titleBox" type="base" color="dark" size="full">
            <vha-view align="center" justify="center">
              <img src="../../assets/images/logo.png" height="20" width="20">
              <span class="_oneEllipsis">自定义内容</span>
            </vha-view>
          </vha-button>
          <vha-button slot="rightBox" size="full">
            <span>Edit</span>
          </vha-button>
        </vha-navbar>
      </div>
      
      <p class="_UI-title"></p>
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGnavBar',
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