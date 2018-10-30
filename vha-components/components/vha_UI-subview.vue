<style lang="stylus">
// UI组件 - 子视图
// .vha_UI-subview
// ------------------------------
// UI组件 - 子视图-撑满视图
.vha_UI-subview.full-height
  max-height 100%
  flex 1
.vha_UI-subview.full-width
  max-width 100%
  flex 1
// ------------------------------
// UI组件 - 滚动条-开启&关闭
.vha_UI-subview.scroll-Yon
  overflow-x hidden
  overflow-y auto
.vha_UI-subview.scroll-Xon
  overflow-x auto
  overflow-y hidden
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div 
    class="vha_UI-subview" 
    :class="[
      this.full ? 'full-' + this.full : '',
      this.scroll && this.full ? ('scroll-' + (this.full === 'height' ? 'Yon' : 'Xon')) : '',
    ]"
  >
  <!-- 添加felx参数 -->
    <slot></slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
// full撑满视图: height(高度), width(宽度)
// scroll滚动条: false(不开启), true(开启)
export default {
  name: 'vhaUIsubview',
  props: {
    //父组件参数
    full: {
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