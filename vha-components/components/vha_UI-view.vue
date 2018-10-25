<style lang="stylus">
.vha_UI-view
  width 100%
  height 100%
// ------------------------------------------------------------------
// UI组件 - 视图区域-方向
.vhaView_direction-vertical
  flex-direction row
.vhaView_direction-horizontal
  flex-direction column
// ------------------------------------------------------------------
// UI组件 - 视图区域-形态
.vhaView_form-inline
  display inline-flex
.vhaView_form-block
  display flex
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="vha_UI-view" :class="`vhaView_direction-${this.direction} vhaView_form-${this.form}`">
    <slot></slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
// direction方向: vertical(垂直), horizontal(水平)
// form形态: block(块), inline(内联)
export default {
  name: 'vhaUIview',
  props: {
    //父组件参数
    direction: {
      type: String,
      default: 'vertical'
    },
    form: {
      type: String,
      default: 'block'
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