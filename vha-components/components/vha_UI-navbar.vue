<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 导航栏
.vha_UI-navbar
  .ui-n-leftBox
    .vha_UI-button
      padding-left rpx(18)
      font-size rpx(26)
      color inherit
  .ui-n-middleBox
    position relative
    >.ui-n-m-box
      position absolute
      width 100%
      height 100%
      pointer-events none
      span
        font-weight 700

    // 原标题
    .vhaNavbarAnimate-in-leave-active //退场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-in-leave //退场开始值
      transform translate(0, 0)
      opacity 1
    .vhaNavbarAnimate-in-leave-to //退场目标值
      transform translate(rpx(-300), 0)
      opacity 0
    .vhaNavbarAnimate-out-enter-active //进场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-out-enter //进场开始值
      transform translate(rpx(-300), 0)
      opacity 0
    .vhaNavbarAnimate-out-enter-to //进场目标值
      transform translate(0, 0)
      opacity 1
    
    // 新标题
    .vhaNavbarAnimate-in-enter-active //进场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-in-enter //进场开始值
      transform translate(rpx(300), 0)
      opacity 0
    .vhaNavbarAnimate-in-enter-to //进场目标值
      transform translate(0, 0)
      opacity 1
    .vhaNavbarAnimate-out-leave-active //退场过程中保持的状态
      transition all 400ms
    .vhaNavbarAnimate-out-leave //退场开始值
      transform translate(0, 0)
      opacity 1
    .vhaNavbarAnimate-out-leave-to //退场目标值
      transform translate(rpx(300), 0)
      opacity 0
      
  .ui-n-rightBox
    .vha_UI-button
      padding-right rpx(18)
      font-size rpx(26)
// ------------------------------
vhaNavbar_type()
  height rpx(90)
  font-size rpx(28)
  .vha_UI-subview
    &:first-child, &:last-child
      width rpx(80)

// UI组件 - 导航栏-类型-无
// .vha_UI-navbar.type-none
  // background-color transparent

// UI组件 - 导航栏-类型-基本
.vha_UI-navbar.type-base
  vhaNavbar_type()
  border-1px-bottom(rgba(0,0,0,0.2))
  z-index 10000000

// UI组件 - 导航栏-类型-正常
.vha_UI-navbar.type-normal
  vhaNavbar_type()
  position relative
  box-shadow rgba(0, 0, 0, 0.15) 0px 0px 10px
  z-index 10000000
// ------------------------------
vhaNavbar_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor

// UI组件 - 导航栏-颜色
.vha_UI-navbar.color-success
  vhaNavbar_color(white_, Success_, Success_Focus)
.vha_UI-navbar.color-info
  vhaNavbar_color(white_, Info_, Info_Focus)
.vha_UI-navbar.color-warning
  vhaNavbar_color(white_, Warning_, Warning_Focus)
.vha_UI-navbar.color-error
  vhaNavbar_color(white_, Error_, Error_Focus)
.vha_UI-navbar.color-dark
  vhaNavbar_color(white_, Dark_, Dark_Focus)
.vha_UI-navbar.color-royal
  vhaNavbar_color(white_, Royal_, Royal_Focus)
.vha_UI-navbar.color-stable
  vhaNavbar_color(black_, Stable_, Stable_Focus)
.vha_UI-navbar.color-light
  vhaNavbar_color(black_, Light_, Light_Focus)
  .vha_UI-button
    color Info_
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div 
    class="vha_UI-navbar" 
    :class="[
      'type-' + this.type,
      this.temp_color ? 'color-' + this.temp_color : '',
    ]"
  >
    <slot>
      <vha-view>
        <vha-subview class="ui-n-leftBox">
          <slot name="leftBox" v-if="this.temp_sideButton != 'none'">
            <vha-button
              type="base" 
              size="full" 
              icon="fa fa-angle-left fa-2x" 
              v-if="this.temp_sideButton === 'left' || this.temp_sideButton === 'both'"
              @click="$router.go(-1)"
            >
            </vha-button>
          </slot>
        </vha-subview>
        <vha-subview class="ui-n-middleBox" full="width">
          <slot name="titleBox">
            <transition :name="this.transitionName === 'none' ? '' : 'vhaNavbarAnimate-' + this.transitionName">
              <div class="ui-n-m-box" v-if="routeAction" key="oldTitle">
                <vha-view class="_jcc _aic">
                  <span class="_ownRowHide">{{new_Title}}</span>
                </vha-view>
              </div>
              <span class="ui-n-m-box" v-else key="new_Title">
                <vha-view class="_jcc _aic">
                  <span class="_ownRowHide">{{new_Title}}</span>
                </vha-view>
              </span>
            </transition>
          </slot>
        </vha-subview>
        <vha-subview class="ui-n-rightBox">
          <slot name="rightBox" v-if="this.temp_sideButton != 'none'">
            <vha-button 
              type="base" 
              size="full" 
              icon="fa fa-bars fa-2x" 
              v-if="this.temp_sideButton === 'right' || this.temp_sideButton === 'both'"
            >
            </vha-button>
          </slot>
        </vha-subview>
      </vha-view>
    </slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import vhaView from "./vha_UI-view";
import vhaSubview from "./vha_UI-subview";
import vhaButton from "./vha_UI-button";
export default {
  name: 'vhaUInavbar',
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
      default: '',
      validator(value) {
        return [
          '',
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
    },
    sideButton: {
      type: String,
      default: 'both',
      validator(value) {
        return [
          'none',
          'left',
          'right',
          'both'
        ].indexOf(value) > -1;
      }
    }
  },
  data() {
    //动态数据
    return {
      temp_color: '',
      transitionName: 'in',
      routeAction: true,
      new_Title: '',
      temp_sideButton: '',
      nextAnimate: ''
    }
  },
  components: {
    //组件 - 引入或定义
    vhaView,
    vhaSubview,
    vhaButton
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
    getRouteProps: function (source) {
      // 获取路由navbar的标题和信息
      try {
        if (typeof source.meta.vhaNavbar != 'undefined') {
          this.new_Title = source.meta.vhaNavbar.title
          
          if (typeof source.meta.vhaNavbar.sideButton != 'undefined') {
            this.temp_sideButton = source.meta.vhaNavbar.sideButton
          } else {
            this.temp_sideButton = this.sideButton
          }
        } else {
          throw 0
        }
      } catch (error) {
        this.new_Title = source.name
        this.temp_sideButton = this.sideButton
      }
    }
  },
  watch: {
    //观察 - 数据或方法
    '$route': function (to, from) {
      this.getRouteProps(to)
      this.routeAction = !this.routeAction
      
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      
      // 如果转跳有设置路由动画方式就选择, 否则自行判断
      if (this.nextAnimate) {
        this.transitionName = this.nextAnimate
      } else {
        this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'out' : 'in'
      }
    }
  },
  created() {
    //实例创建完成后
    switch (this.type) {
      case 'none': {
        this.temp_color = this.color || ''
        break
      }
      case 'base': {
        this.temp_color = this.color || 'light'
        break
      }
      case 'normal': {
        this.temp_color = this.color || 'light'
        break
      }
    }
    
    this.getRouteProps(this.$route)
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    // vhaRouterviewEvent事件 处理路由转跳动画
    window.addEventListener('vhaRouterviewEvent', (event) => {
      this.nextAnimate = event.detail.animate
      if (this.nextAnimate === 'none') {
        // 如果设置为空, 10毫秒后清空避免影响下次动画, 否则设置了动画或自动判断动画则在动画结束后清空
        setTimeout(() => {
          this.nextAnimate = ''
        }, 10)
      }
    })
    
    // vhaRouterviewAnimateEnd事件 路由动画结束事件
    window.addEventListener('vhaRouterviewAnimateEnd', (event) => {
      this.nextAnimate = ''
    })
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>