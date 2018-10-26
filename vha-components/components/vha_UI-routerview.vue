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
    >*
      position absolute
      top 0
      width 100%
      height 100%
      box-shadow 0 0 20px rgba(0,0,0,0.16)
      background-color inherit
      // transition transform 10000ms

// transition transform 300ms cubic-bezier(0,0,0,1)

    .routerViewSlide-in-enter-active //过程中保持的状态
      transition transform 400ms cubic-bezier(0,1,1,1)
    .routerViewSlide-in-enter //进场开始值
      transform translate(90vw, 0)
    .routerViewSlide-in-enter-to //进场目标值
      // box-shadow 0 0 50px rgba(0,0,0,0.3)
      transform translate(0, 0)
    .routerViewSlide-in-leave-active //过程中保持的状态
      transition transform 500ms cubic-bezier(.2,0,.6,1)
    .routerViewSlide-in-leave //退场开始值
      transform translate(0, 0)
    .routerViewSlide-in-leave-to //退场目标值
      transform translate(rpx(-300), 0)
    
    .routerViewSlide-out-enter-active //过程中保持的状态
      transition transform 200ms cubic-bezier(0,1,1,1)
    .routerViewSlide-out-enter //进场开始值
      transform translate(rpx(-300), 0)
    .routerViewSlide-out-enter-to //进场目标值
      // box-shadow 0 0 50px rgba(0,0,0,0.3)
      transform translate(0, 0)
    .routerViewSlide-out-leave-active //过程中保持的状态
      transition transform 300ms cubic-bezier(.2,0,.6,1)
      z-index 9999999
    .routerViewSlide-out-leave //退场开始值
      transform translate(0, 0)
    .routerViewSlide-out-leave-to //退场目标值
      transform translate(100vw, 0)

    // .routerViewSlide-in-enter //进场开始值
    //   transform translate(100%, 0)
    // .routerViewSlide-in-enter-to //进场目标值
    //   // box-shadow 0 0 50px rgba(0,0,0,0.3)
    // .routerViewSlide-in-leave //退场开始值
    //   // transform translate(rpx(-200), 0)
    // .routerViewSlide-in-leave-to //退场目标值
    //   transform translate(rpx(-200), 0)
    
    // .routerViewSlide-out-enter //进场开始值
    //   transform translate(-100%, 0)
    // .routerViewSlide-out-enter-to //进场目标值
    //   // box-shadow 0 0 50px rgba(0,0,0,0.3)
    // .routerViewSlide-out-leave //退场开始值
    //   // transform translate(rpx(200), 0)
    // .routerViewSlide-out-leave-to //退场目标值
    //   transform translate(rpx(200), 0)
      

</style>
--------------------------------------------------------------------------------
<template>
  <div class="vha_UI-routerview">
    <div class="ui-r-center">
      <transition :name="transitionName">
        <router-view></router-view>
        <!-- <keep-alive>
          <router-view v-if='$route.meta.keepAlive'></router-view> 
        </keep-alive>
        <router-view v-if='!$route.meta.keepAlive'></router-view> -->
      </transition>
    </div>
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
      transitionName: 'routerViewSlide-in'
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
    '$route' (to, from) {
      // console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      
      // this.transitionName = to.path.split('/')[1] != "" ? 'routerViewSlide-in' : 'routerViewSlide-out'
      this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'routerViewSlide-out' : 'routerViewSlide-in'
    }
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