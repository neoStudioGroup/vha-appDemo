<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 按钮
.vha_UI-buttonGroup
  >i
    &:first-child
      margin-right rpx(8)
    &:last-child
      margin-left rpx(8)
// ------------------------------
// UI组件 - 按钮-类型-无
.vha_UI-buttonGroup.type-none
  cursor pointer
  margin 0
  padding 0
  border none
  color inherit
  background-color transparent
  display inline-block
  transition all .08s

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="vha_UI-buttonGroup">

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import vhaView from "./vha_UI-view";
import vhaSubview from "./vha_UI-subview";
import vhaButton from "./vha_UI-button";
export default {
  name: 'vhaUIbuttonGroup',
  props: {
    //父组件参数
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'base',
          'normal',
          'outline'
        ].indexOf(value) > -1;
      }
    }
  },
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
    vhaView,
    vhaSubview,
    vhaButton
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