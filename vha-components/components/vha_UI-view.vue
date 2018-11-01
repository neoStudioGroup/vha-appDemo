<style lang="stylus">
// UI组件 - 视图区域
.vha_UI-view
  background-color transparent
// ------------------------------
// UI组件 - 视图区域-显示方式
// .vha_UI-view.display-flex
//   display flex
// .vha_UI-view.display-inline-flex
//   display inline-flex
// ------------------------------
// UI组件 - 视图区域-方向 (默认flex-direction row)
// .vha_UI-view.direction-horizontal
//   flex-direction row
// .vha_UI-view.direction-vertical
//   flex-direction column
// ------------------------------
// UI组件 - 视图区域-尺寸
// .vha_UI-view.size-none
//   display flex
.vha_UI-view.size-full
  width 100%
  height 100%
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <!-- :class="[
    'display-' + this.display,
    this.direction ? 'direction-' + this.direction : ''
  ]" 废弃 -->
  <div 
    class="vha_UI-view" 
    :class="[
      this.display === 'flex' ? '_df' : '_dif',
      this.direction === '' ? '' : (this.direction === 'horizontal' ? '_fdr' : '_fdc'),
      this.size === 'none' ? '' : 'size-' + this.size
    ]"
  >
    <slot></slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
// direction方向: horizontal(水平), vertical(垂直)
// display显示方式: flex(块), inline-flex(内联)
export default {
  name: 'vhaUIview',
  props: {
    //父组件参数
    display: {
      type: String,
      default: 'flex',
      validator(value) {
        return [
          'flex',
          'inline-flex'
        ].indexOf(value) > -1;
      }
    },
    direction: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'horizontal',
          'vertical'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'full',
      validator(value) {
        return [
          'none',
          'full'
        ].indexOf(value) > -1;
      }
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