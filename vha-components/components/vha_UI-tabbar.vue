<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 标签栏
.vha_UI-tabbar
  // a
  //   margin-right 10px
// ------------------------------------------------------------------
// UI组件 - 标签栏-类型-无
vhaTabbar_type()
  height rpx(100)
  font-size rpx(28)
// .vha_UI-tabbar.type-none
  // transition all .1s

// UI组件 - 标签栏-类型-基本
.vha_UI-tabbar.type-base
  vhaTabbar_type()
  border-1px-top(rgba(0,0,0,0.2))
  z-index 10000000

// UI组件 - 标签栏-类型-正常
.vha_UI-tabbar.type-normal
  vhaTabbar_type()
  position relative
  box-shadow rgba(0, 0, 0, 0.15) 0px 0px 10px
  z-index 10000000

// ------------------------------------------------------------------
// UI组件 - 标签栏-颜色
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
    v-if="this.temp_show"
  >
    <!--
        组件 API 实例(特效 效果) 关于
        处理显示隐藏
    -->
    
    <vha-view>
      <slot></slot>
      
      <!--       
      <vha-button type="none" size="full" v-vhaRouter="{push: '/components', animate:'none'}">
        <vha-view class="_jcc" direction="vertical">
          <i class="fa fa-th fa-2x"></i>
          <span>主页</span>
        </vha-view>
      </vha-button>
      
      <vha-button type="none" size="full" v-vhaRouter="{push: '/native', animate:'none'}">
        <vha-view class="_jcc" direction="vertical">
          <i class="fa fa-mobile-phone fa-2x"></i>
          <span>设备</span>
        </vha-view>
      </vha-button>
      
      
      <vha-button type="none" size="full" v-vhaRouter="{push: '/about', animate:'none'}">
        <vha-view class="_jcc" direction="vertical">
          <i class="fa fa-info-circle fa-2x"></i>
          <span>关于</span>
        </vha-view>
      </vha-button>
      -->
      
      <!-- 
      实例(特效 效果)
      <a v-vhaRouter="{go: -1, animate:'none'}">返回</a>
      <a v-vhaRouter="{go: 1, animate:'none'}">前进</a>
      <a v-vhaRouter="{push: '/components', animate:'none'}">组件</a>
      <a v-vhaRouter="{push: '/native', animate:'in'}">设备</a>
      <a v-vhaRouter="{push: {path: '/about', query: { plan: 'private' }}, animate:'none'}">关于</a>
      -->
    </vha-view>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'vhaUItabbar',
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
      temp_show: true
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
    getRouteProps: function (source) {
      try {
        if (typeof source.meta.vhaTabbar != 'undefined') {
          if (typeof source.meta.vhaTabbar.show != 'undefined') {
            this.temp_show = source.meta.vhaTabbar.show
          } else {
            this.temp_show = true
          }
        } else {
          throw 0
        }
      } catch (error) {
        this.temp_show = true
      }
    }
  },
  watch: {
    //观察 - 数据或方法
    //观察 - 数据或方法
    '$route': function (to, from) {
      this.getRouteProps(to)
    }
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
    this.getRouteProps(this.$route)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>