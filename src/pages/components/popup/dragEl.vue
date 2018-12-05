<style scoped lang="stylus">
._UI-dragEl
  .ui-d-bg
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  .ui-d-window
    position absolute
    // top 50%
    // left 50%
    // transform translate(-50%, -50%)
    width rpx(500)
    border-radius rpx(12)
    background-color #fff
    box-shadow 0 0 rpx(30) rgba(0,0,0,0.2)
    .ui-d-title
      border-bottom-line(1px solid #aaa)
      .ui-d-t-text, .vha_UI-button
        padding rpx(20)
    .ui-d-content
      padding rpx(20)
      height rpx(200)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_UI-dragEl">
    <div class="ui-d-bg" @click="$parent.close()"></div>
    <vha-view class="ui-d-window" axis="y" size="none" ref="window">
      <vha-view class="ui-d-title" tag="vha-subview">
        <vha-subview class="ui-d-t-text" full="width"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
        >
          按住我拖动
        </vha-subview>
        <vha-subview><vha-button size="full" type="base" icon="fa fa-close" color="calm" @click="$parent.close()"></vha-button></vha-subview>
      </vha-view>
      <vha-subview class="ui-d-content" full="height">
        我是内容区域
      </vha-subview>
    </vha-view>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'UIdragEl',
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      X: 0,
      Y: 0,
      startX: 0,
      startY: 0
    }
  },
  methods: {
    //方法 - 进入页面创建
    setPos: function (x, y) {
      this.X = x
      this.Y = y
      this.$refs.window.$el.style.transform = `translate(${x}px, ${y}px)`
    },
    touchstart: function (event) {
      this.startX = event.changedTouches[0].clientX - this.X
      this.startY = event.changedTouches[0].clientY - this.Y
      this.$refs.window.$el.style.boxShadow = `0 0 ${this.vha_rpx(30)} rgba(0,125,255,0.4)`
    },
    touchmove: function (event) {
      let temp_clientX = event.changedTouches[0].clientX
      let temp_clientY = event.changedTouches[0].clientY
      
      this.setPos(temp_clientX - this.startX, temp_clientY - this.startY)
      // this.$refs.window.$el.style.left = temp_clientX - this.startX + 'px'
      // this.$refs.window.$el.style.top = temp_clientY - this.startY + 'px'
    },
    touchend: function (event) {
      this.$refs.window.$el.style.boxShadow = `0 0 ${this.vha_rpx(30)} rgba(0,0,0,0.2)`
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    this.$nextTick(function () {
      console.log(this.$parent)
      
      setTimeout(() => {
        this.setPos(this.$parent.$el.offsetWidth / 2 - this.$refs.window.$el.offsetWidth / 2, this.$parent.$el.offsetHeight / 2 - this.$refs.window.$el.offsetHeight / 2)
      }, 1)
    })
  }
}
</script>