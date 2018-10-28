<style lang="stylus">
@import "../assets/stylus/method.styl"
// UI组件-内容
.vha_UI-routerview
  height 100%
  background-color #fcfcfc
  .ui-r-center
    position relative
    margin 0 auto
    width 100%
    height 100%
    min-width 320px
    max-width 540px
    box-sizing border-box
    background-color #fff
    overflow hidden
    box-shadow 0 0 34px rgba(0,0,0,0.1)
    .ui-r-c-mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-color transparent
      z-index 1000001
    >*
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      box-shadow 0 0 20px rgba(0,0,0,0.16)
      background-color inherit
      // transition transform 30000ms
      // z-index 1000002

    .vhaRouterviewAnimate-in-enter-active //进入路由-上层-进场 过程中保持的状态
      transition transform 400ms cubic-bezier(0,1,1,1)
      // z-index 1000002
    .vhaRouterviewAnimate-in-enter //进场开始值
      transform translate(90vw, 0)
    .vhaRouterviewAnimate-in-enter-to //进场目标值
      // box-shadow 0 0 50px rgba(0,0,0,0.3)
      transform translate(0, 0)
    .vhaRouterviewAnimate-in-leave-active //进入路由-下层-退场 过程中保持的状态
      transition transform 500ms cubic-bezier(.2,0,.6,1)
      // z-index 1000000
    .vhaRouterviewAnimate-in-leave //退场开始值
      transform translate(0, 0)
    .vhaRouterviewAnimate-in-leave-to //退场目标值
      transform translate(rpx(-300), 0)
    
    .vhaRouterviewAnimate-out-enter-active //返回路由-上层-进场 过程中保持的状态
      transition transform 200ms cubic-bezier(0,1,1,1)
      // z-index 1000000
    .vhaRouterviewAnimate-out-enter //进场开始值
      transform translate(rpx(-300), 0)
    .vhaRouterviewAnimate-out-enter-to //进场目标值
      // box-shadow 0 0 50px rgba(0,0,0,0.3)
      transform translate(0, 0)
    .vhaRouterviewAnimate-out-leave-active //返回路由-下层-退场 过程中保持的状态
      transition transform 300ms cubic-bezier(.2,0,.6,1)
      // z-index 1000002
      z-index 1000000
    .vhaRouterviewAnimate-out-leave //退场开始值
      transform translate(0, 0)
    .vhaRouterviewAnimate-out-leave-to //退场目标值
      transform translate(100vw, 0)


// 过渡效果 - 平滑 - ios - 向后

</style>
--------------------------------------------------------------------------------
<template>
  <div class="vha_UI-routerview">
    <slot>
    <div class="ui-r-center">
      <!-- <div class="ui-r-c-mask" :style="maskStyle"></div> -->
      <div class="ui-r-c-mask" v-if="maskShow"></div>
      <transition 
        :name="this.transitionName === 'none' ? '' : 'vhaRouterviewAnimate-' + this.transitionName" 
        @before-enter="beforeEnter"
      >
        <router-view></router-view>
        <!-- <keep-alive>
          <router-view v-if='$route.meta.keepAlive'></router-view> 
        </keep-alive>
        <router-view v-if='!$route.meta.keepAlive'></router-view> -->
      </transition>
    </div>
    </slot>
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'vha_UI-routerview',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      transitionName: 'in',
      maskShow: false,
      animate: ''
      // maskStyle: {opacity: 0, transition: 'opacity 0s'},
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
    transitionEnd: function () {
      // this.maskStyle = {opacity: 0, transition: 'opacity 0s'}
    },
    beforeEnter: function (el) {
      this.maskShow = true
      setTimeout(() => {
        this.maskShow = false
      }, 500)
      // this.maskStyle = {opacity: 1, transition: 'opacity 0s'}
      // setTimeout(() => {
      //   this.maskStyle = {opacity: 0, transition: 'opacity 30000ms'}
      // }, 10)
      
      // if (this.transitionName === 'in') {
      //   this.showMaskTime = 3000
      // } else {
      //   this.showMaskTime = 3000
      // }
      
      // el.addEventListener("transitionend", () => {
      //   this.transitionEnd()
      // })
    }
  },
  watch: {
    //观察 - 数据或方法
    '$route' (to, from) {
      // console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      
      // this.transitionName = to.path.split('/')[1] != "" ? 'in' : 'out'
      // this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'navbarSlide-out' : 'navbarSlide-in'
      // 如果转跳有设置路由动画方式就选择, 否则自行判断
      if (this.animate) {
        this.transitionName = this.animate
      } else {
        this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'out' : 'in'
      }
      setTimeout(() => {
        this.animate = ''
      }, 500)
    }
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    // vhaRouterviewEvent事件 处理路由转跳动画
    window.addEventListener('vhaRouterviewEvent', (event) => {
      // console.log('vhaRouterviewEvent：', event.detail)
      // 如果路由没有转跳(bug) 将接收的值保存
      if (this.$route.path != event.detail.routerValue) {
        this.animate = event.detail.animate
      }
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