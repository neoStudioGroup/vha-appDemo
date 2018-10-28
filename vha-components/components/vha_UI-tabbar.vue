<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"

// UI组件-内容
// .vha_UI-tabbar
//   border-1px-bottom-top(#ddd)
//   height rpx(90)
//   background-color #fff
//   display flex
//   justify-content: space-between
//   .ui-t-tab
//     flex 1
// ------------------------------------------------------------------
// UI组件 - 标题栏-类型-无
vhaTabbar_type()
  height rpx(100)
  font-size rpx(28)
  // .vha_UI-subview
  //   &:first-child, &:last-child
  //     width rpx(80)
// .vha_UI-tabbar.type-none
  // transition all .1s

// UI组件 - 标题栏-类型-基本
.vha_UI-tabbar.type-base
  vhaTabbar_type()
  border-1px-top(rgba(0,0,0,0.2))
  z-index 10000000

// UI组件 - 标题栏-类型-正常
.vha_UI-tabbar.type-normal
  vhaTabbar_type()
  position relative
  box-shadow rgba(0, 0, 0, 0.15) 0px 0px 10px
  z-index 10000000

// ------------------------------------------------------------------
// UI组件 - 标题栏-颜色
vhaTabbar_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor
.vha_UI-tabbar.color-success
  vhaTabbar_color(white_, Success_, Success_Focus)
.vha_UI-tabbar.color-info
  vhaTabbar_color(white_, Info_, Info_Focus)
.vha_UI-tabbar.color-warning
  vhaTabbar_color(white_, Warning_, Warning_Focus)
.vha_UI-tabbar.color-error
  vhaTabbar_color(white_, Error_, Error_Focus)
.vha_UI-tabbar.color-dark
  vhaTabbar_color(white_, Dark_, Dark_Focus)
.vha_UI-tabbar.color-royal
  vhaTabbar_color(white_, Royal_, Royal_Focus)
.vha_UI-tabbar.color-stable
  vhaTabbar_color(black_, Stable_, Stable_Focus)
.vha_UI-tabbar.color-light
  vhaTabbar_color(black_, Light_, Light_Focus)

</style>
--------------------------------------------------------------------------------
<template>
  <div 
    class="vha_UI-tabbar"
    :class="[
      'type-' + this.type,
      'color-' + this.color
    ]"
  >
<!--     组件 API 实例(特效 效果) 关于 -->
    <!-- <vha-view>
      
      <vha-button type="none" size="full" v-vhaRouter="{to:'/components', animate:'none'}">
        <vha-view class="_jcc" direction="vertical">
          <i class="fa fa-th fa-2x"></i>
          <span>主页</span>
        </vha-view>
      </vha-button>
      
      <vha-button type="none" size="full">
        <vha-view class="_jcc" direction="vertical">
          <i class="fa fa-mobile-phone fa-2x"></i>
          <span>功能</span>
        </vha-view>
      </vha-button>
      
      <vha-button type="none" size="full">
        <vha-view class="_jcc" direction="vertical">
          <i class="fa fa-info-circle fa-2x"></i>
          <span>关于</span>
        </vha-view>
      </vha-button>
      
    </vha-view> -->
    
    <div class="ui-t-tab">
      <router-link to="/components">
        <a>组件</a>
      </router-link>
    </div>
    <div class="ui-t-tab">
      <router-link tag="li" to="/native">
        <a>功能</a>
      </router-link>
    </div>
    <div class="ui-t-tab">
      <router-link tag="li" to="/about">
        <a>关于</a>
      </router-link>
    </div>
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'vha_UI-tabbar',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'base',
          'normal'
        ].indexOf(value) > -1;
      }
    },
    color: {
      type: String,
      default: 'light',
      validator(value) {
        return [
          'none',
          'success',
          'info',
          'warning',
          'error',
          'dark',
          'royal',
          'stable',
          'light'
        ].indexOf(value) > -1;
      }
    }
  },
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>