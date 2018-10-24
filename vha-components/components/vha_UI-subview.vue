fullView撑满视图: height(高度), width(宽度)

<style scoped lang="stylus">
.vha_UI-subview
  overflow hidden
// ------------------------------------------------------------------
// vhaUI组件 - 子视图-撑满视图
.vhaView_fullView-height
  max-height 100%
  overflow-y auto
  flex 1
.vhaView_fullView-width
  max-width 100%
  overflow-x auto
  flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="vha_UI-subview" :class="this.fullView ? `vhaView_fullView-${this.fullView}` : ``">
    <slot></slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIsubview',
  props: {
    //父组件参数
    fullView: {
      type: String,
      default: ''
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
    console.log(this.fullView)
  }
}
</script>