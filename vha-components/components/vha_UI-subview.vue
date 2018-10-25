<style scoped lang="stylus">
.vha_UI-subview
  overflow hidden
// ------------------------------------------------------------------
// UI组件 - 子视图-撑满视图
.vhaView_fullView-height
  max-height 100%
  flex 1
.vhaView_fullView-width
  max-width 100%
  flex 1
// ------------------------------------------------------------------
// UI组件 - 滚动条-开启&关闭
.vhaView_scroll-Yon
  overflow-y auto
.vhaView_scroll-Xon
  overflow-x auto
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div 
    class="vha_UI-subview" 
    :class="[
      this.fullView ? 'vhaView_fullView-' + this.fullView : '',
      this.scroll && this.fullView ? ('vhaView_scroll-' + (this.fullView === 'height' ? 'Yon' : 'Xon')) : '',
    ]"
  >
    <slot></slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
// fullView撑满视图: height(高度), width(宽度)
// scroll滚动条: false(不开启), true(开启)
export default {
  name: 'vhaUIsubview',
  props: {
    //父组件参数
    fullView: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'height',
          'width'
        ].indexOf(value) > -1;
      }
    },
    scroll: {
      type: Boolean,
      default: false
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