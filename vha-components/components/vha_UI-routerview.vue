<style lang="stylus">
@import "../assets/stylus/method.styl"
// UI组件-路由视图
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
.aaaa
  position absolute !important
  top 0 !important
  left 0 !important
  width 30px !important
  height 40px !important
  z-index 999999999999 !important
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="vha_UI-routerview">
    <div class="ui-r-center">
      <!-- <div class="ui-r-c-mask" :style="maskStyle"></div> -->
      <div class="ui-r-c-mask" v-if="maskShow"></div>
      <div @click="savePosition" class="aaaa">11111</div>
      
      <transition 
        :name="this.transitionName === 'none' ? '' : 'vhaRouterviewAnimate-' + this.transitionName" 
        @enter="enter" 
        @leave="leave" 
      >
        <keep-alive 
          :include="this.include || this.$vhaComponents.routerview.include" 
          :exclude="this.exclude || this.$vhaComponents.routerview.exclude"
          :max="this.max"
        >
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIrouterview',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
    include: {
      type: String,
      default: ''
    },
    exclude: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 0
    }
  },
  data() {
    //动态数据
    return {
      transitionName: 'in',
      enterEnd: false,
      leaveEnd: false,
      maskShow: false,
      nextAnimate: ''
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
    savePosition: function (fromRoute) {
      // 如果当前路由设置了缓存, 就将下面每个vha_UI-scrollview的position记录到路由内
      let temp_meta = fromRoute.meta
      if (typeof temp_meta.keepAlive != 'undefined') {
        if (temp_meta.keepAlive) {
          let temp_scrollview = this.$el.querySelectorAll('.vha_UI-scrollview')
          let temp_els = []
          
          temp_scrollview.forEach((element, index) => {
            if (element.scrollLeft + element.scrollTop > 0) {
              temp_els.push({id:index , x: element.scrollLeft, y: element.scrollTop})
            }
          })
          temp_meta.keepAlivePosition = temp_els
          console.log(temp_meta.keepAlivePosition)
        }
      }
      
    },
    enter: function (el) {
      if (this.nextAnimate != 'none') {
        this.maskShow = true
      }
      // this.maskStyle = {opacity: 1, transition: 'opacity 0s'}
      // setTimeout(() => {
      //   this.maskStyle = {opacity: 0, transition: 'opacity 30000ms'}
      // }, 10)
      
      // 偶尔失效BUG, 可能与元素被删除有关
      // el.addEventListener("transitionend", () => {})
      
      let temp_timeid = setInterval(() => {
        let temp_class = el.getAttribute('class')
        if (temp_class.indexOf('-enter-active') === -1) {
          this.enterEnd = true
          this.animateEnd()
          clearTimeout(temp_timeid)
        }
      }, 20)
    },
    leave: function (el) {
      let temp_timeid = setInterval(() => {
        let temp_class = el.getAttribute('class')
        if (temp_class.indexOf('-leave-active') === -1) {
          this.leaveEnd = true
          this.animateEnd()
          clearTimeout(temp_timeid)
        }
      }, 20)
    },
    // 没耐心了addEventListener transitionend 怎么都有偶尔不触发的bug, 改为timeout检测
    animateEnd: function () {
      if (this.enterEnd && this.leaveEnd) {
        this.nextAnimate = ''
        this.maskShow = false
        
        this.enterEnd = false
        this.leaveEnd = false
        // 广播动画结束事件
        window.dispatchEvent(new CustomEvent('vhaRouterviewAnimateEnd'))
      }
    }
  },
  watch: {
    //观察 - 数据或方法
    '$route': function (to, from) {
      // this.savePosition(from)
      
      // setTimeout(() => {
      // console.log(this.$el.querySelectorAll('.vha_UI-scrollview'))
      // }, 500)
      
      // console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      // this.transitionName = to.path.split('/')[1] != "" ? 'in' : 'out'
      // this.transitionName = toDepth === fromDepth ? '' : toDepth < fromDepth ? 'navbarSlide-out' : 'navbarSlide-in'
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
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    // vhaRouterviewEvent事件 处理路由转跳动画
    window.addEventListener('vhaRouterviewEvent', (event) => {
      // console.log('vhaRouterviewEvent：', event.detail)
      this.nextAnimate = event.detail.animate
      if (this.nextAnimate === 'none') {
        // 如果设置为空, 10毫秒后清空避免影响下次动画, 否则设置了动画或自动判断动画则在动画结束后清空
        setTimeout(() => {
          this.nextAnimate = ''
        }, 10)
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