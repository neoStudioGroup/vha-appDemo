<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 标签
.vha_UI-tab
  width 100%
  height 100%
  .vha_UI-view
    padding rpx(6)
  i
    flex 6
    display inline-flex
  span
    flex 4
    display block
  // a
  //   margin-right 10px
// ------------------------------
// UI组件 - 标签-类型-无
// vhaTab_type()
//   height rpx(100)
//   font-size rpx(28)
// // .vha_UI-tab.type-none
//   // transition all .1s

// // UI组件 - 标签-类型-基本
// .vha_UI-tab.type-base
//   vhaTab_type()
//   border-1px-top(rgba(0,0,0,0.2))
//   z-index 10000000

// // UI组件 - 标签-类型-正常
// .vha_UI-tab.type-normal
//   vhaTab_type()
//   position relative
//   box-shadow rgba(0, 0, 0, 0.15) 0px 0px 10px
//   z-index 10000000
// ------------------------------
// UI组件 - 标签-颜色
vhaTab_color($color, $backgroundColor, $backgroundActiveColor)
  color $backgroundColor
.vha_UI-tab.color-success
  vhaTab_color(white_, Success_, Success_Focus)
.vha_UI-tab.color-info
  vhaTab_color(white_, Info_, Info_Focus)
.vha_UI-tab.color-warning
  vhaTab_color(white_, Warning_, Warning_Focus)
.vha_UI-tab.color-error
  vhaTab_color(white_, Error_, Error_Focus)
.vha_UI-tab.color-dark
  vhaTab_color(white_, Dark_, Dark_Focus)
.vha_UI-tab.color-royal
  vhaTab_color(white_, Royal_, Royal_Focus)
.vha_UI-tab.color-stable
  vhaTab_color(black_, Stable_, Stable_Focus)
.vha_UI-tab.color-light
  vhaTab_color(black_, Light_, Light_Focus)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div
    class="vha_UI-tab" 
    :class="[
      this.temp_color ? 'color-' + this.temp_color : '',
    ]" 
  >
    <vha-button type="none" size="full" v-vhaRouter="{push: this.push, animate:'none'}">
      <vha-view class="_jcc" direction="vertical">
        <i :class="icon"></i>
        <span><slot></slot></span>
      </vha-view>
    </vha-button>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUItab',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
    push: String,
    icon: String,
    color: {
      type: String,
      default: 'none',
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
      temp_color: ''
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
    procColor: function () {
      if (this.$route.path === this.push) {
        this.temp_color = 'info'
      } else {
        this.temp_color = this.color
      }
    }
  },
  watch: {
    //观察 - 数据或方法
    '$route': function (to, from) {
      this.procColor()
    }
  },
  created() {
    //实例创建完成后
    this.procColor()
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