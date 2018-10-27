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
      transition all 400ms
      span
        font-weight 700

    // 原标题
    .navbarSlide-in-leave-active //退场过程中保持的状态
      // transition all 5000ms
    .navbarSlide-in-leave //退场开始值
      transform translate(0, 0)
      opacity 1
    .navbarSlide-in-leave-to //退场目标值
      transform translate(rpx(-200), 0)
      opacity 0
    .navbarSlide-out-enter-active //进场过程中保持的状态
      // transition all 5000ms
    .navbarSlide-out-enter //进场开始值
      transform translate(rpx(-200), 0)
      opacity 0
    .navbarSlide-out-enter-to //进场目标值
      transform translate(0, 0)
      opacity 1
    
    // 新标题
    .navbarSlide-in-enter-active //进场过程中保持的状态
      // transition all 5000ms
    .navbarSlide-in-enter //进场开始值
      transform translate(rpx(200), 0)
      opacity 0
    .navbarSlide-in-enter-to //进场目标值
      transform translate(0, 0)
      opacity 1
    .navbarSlide-out-leave-active //退场过程中保持的状态
      // transition all 5000ms
    .navbarSlide-out-leave //退场开始值
      transform translate(0, 0)
      opacity 1
    .navbarSlide-out-leave-to //退场目标值
      transform translate(rpx(200), 0)
      opacity 0
      
  .ui-n-rightBox
    .vha_UI-button
      padding-right rpx(18)
      font-size rpx(26)
// ------------------------------------------------------------------
// UI组件 - 导航栏-类型-无
vhaNavbar_type()
  height rpx(90)
  font-size rpx(28)
  z-index 1
  .vha_UI-subview
    &:first-child, &:last-child
      width rpx(80)
// .vha_UI-navbar.type-none
  // transition all .1s

// UI组件 - 导航栏-类型-基本
.vha_UI-navbar.type-base
  border-1px-bottom(#ddd)
  vhaNavbar_type()

// UI组件 - 导航栏-类型-正常
.vha_UI-navbar.type-normal
  vhaNavbar_type()
// ------------------------------------------------------------------
// UI组件 - 导航栏-颜色
vhaNavbar_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor
.vha_UI-navbar.color-Success
  vhaNavbar_color(white_, Success_, Success_Focus)
.vha_UI-navbar.color-Info
  vhaNavbar_color(white_, Info_, Info_Focus)
.vha_UI-navbar.color-Warning
  vhaNavbar_color(white_, Warning_, Warning_Focus)
.vha_UI-navbar.color-Error
  vhaNavbar_color(white_, Error_, Error_Focus)
.vha_UI-navbar.color-Dark
  vhaNavbar_color(white_, Dark_, Dark_Focus)
.vha_UI-navbar.color-Royal
  vhaNavbar_color(white_, Royal_, Royal_Focus)
.vha_UI-navbar.color-Stable
  vhaNavbar_color(black_, Stable_, Stable_Focus)
.vha_UI-navbar.color-Light
  vhaNavbar_color(black_, Light_, Light_Focus)
  .vha_UI-button
    color Info_
  
</style>
--------------------------------------------------------------------------------
<template>
  <div 
    class="vha_UI-navbar" 
    :class="[
      'type-' + this.type,
      'color-' + this.color
    ]"
  >
    <slot>
      <vha-view>
        <vha-subview class="ui-n-leftBox" v-if="this.sideButton != 'none'">
          <slot name="leftBox">
            <vha-button
              type="base" 
              size="full" 
              icon="fa fa-angle-left fa-2x" 
              v-if="this.sideButton === 'left' || this.sideButton === 'both'"
              @click="$router.go(-1)"
            >
            </vha-button>
          </slot>
        </vha-subview>
        <vha-subview class="ui-n-middleBox" full-view="width">
          <slot name="titleBox">
            <transition :name="transitionName">
              <div class="ui-n-m-box" v-if="routeAction" key="oldTitle">
                <vha-view class="_jcc _aic">
                  <span class="_ownRowHide">{{oldTitle}}</span>
                </vha-view>
              </div>
              <span class="ui-n-m-box" v-else key="newTitle">
                <vha-view class="_jcc _aic">
                  <span class="_ownRowHide">{{newTitle}}</span>
                </vha-view>
              </span>
            </transition>
          </slot>
        </vha-subview>
        <vha-subview class="ui-n-rightBox" v-if="this.sideButton != 'none'">
          <slot name="rightBox">
            <vha-button 
              type="base" 
              size="full" 
              icon="fa fa-bars fa-2x" 
              v-if="this.sideButton === 'right' || this.sideButton === 'both'"
            >
            </vha-button>
          </slot>
        </vha-subview>
      </vha-view>
    </slot>
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
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
      default: 'Light',
      validator(value) {
        return [
          'none',
          'Success',
          'Info',
          'Warning',
          'Error',
          'Dark',
          'Royal',
          'Stable',
          'Light'
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
      transitionName: 'navbarSlide-in',
      routeAction: true,
      oldTitle: '',
      newTitle: ''
    }
  },
  components: {
    //组件 - 引入或定义
    vhaButton
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
  },
  watch: {
    //观察 - 数据或方法
    '$route' (to, from) {
      this.oldTitle = this.$route.meta.navBarTitle || from.name
      this.newTitle = this.$route.meta.navBarTitle || to.name
      this.routeAction = !this.routeAction
      
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'navbarSlide-out' : 'navbarSlide-in'
    }
  },
  created() {
    //实例创建完成后
    this.oldTitle = this.$route.meta.navBarTitle || this.$route.name
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    if (this.type === 'normal') {
      var parentNode = this.$el.parentNode
      parentNode.style.position = 'relative'
      parentNode.style.boxShadow = '0 0 10px rgba(0,0,0,0.15)'
      parentNode.style.zIndex = '1'
    }
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>