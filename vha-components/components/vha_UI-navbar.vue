<style scoped lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 导航栏
// .vha_UI-navbar



  // border-1px-bottom(#ddd)
  // display flex
  // height rpx(90)
  // font-size rpx(28)
  // background-color #fff
  // z-index 1
  // .ui-n-title
  //   flex 1
  //   span
  //     transition opacity 200ms
  //   .fade-enter, .fade-leave-to
  //     opacity 0
  
  // .ui-n-lefttext, .ui-n-righttext
  //   cursor pointer
  //   width rpx(140)
  //   div
  //     width 100%
  //     height 100%
  //     font-size rpx(24)
  // .ui-n-lefttext
  //   i
  //     margin-top -1px
  //     margin-right rpx(12)
  //     font-size rpx(46)
  //   div
  //     color #38f

</style>
--------------------------------------------------------------------------------
<template>
  <div class="vha_UI-navbar">
    
    
    
    
    
    
    
    <div class="ui-n-lefttext">
      <div class="" @click="goBack()" v-show="this.$route.path != '/'">
        <i class="ion-ios-arrow-back"></i>{{leftText}}
      </div>
    </div>
      <div class="ui-n-title">
        <transition name="fade">
          <span v-if="showTitle">{{$route.meta.navBarTitle || $route.name}}</span>
        </transition>
      </div>
    <div class="ui-n-righttext">
      <div class="">
        <slot></slot>
      </div>
    </div>
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
    leftText: {
      type: String,
      default: "返回"
    },
    title: {
      type: String,
      default: "标题"
    }
  },
  data() {
    //动态数据
    return {
      showTitle: true
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
    goBack(){
      this.$router.go(-1)
    }
  },
  watch: {
    //观察 - 数据或方法
    '$route' (to, from) {
      this.showTitle = false
      setTimeout(() => {
        this.showTitle = true
      }, 200)
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