<style scoped lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 按钮
.vha_UI-subview
  i
    &:first-child
      margin-right rpx(8)
    &:last-child
      margin-left rpx(8)
// ------------------------------------------------------------------
// UI组件 - 按钮-类型-无
.vhaSubview_type-none
  cursor pointer
  margin 0
  padding 0
  border none
  font-size rpx(24)
  background-color transparent
  display inline-flex
  align-items center
  // transition all .1s

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="vha_UI-subview">

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIsubview',
  props: {
    //父组件参数
    type: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    //动态数据
    return {
    }
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
  }
}
</script>