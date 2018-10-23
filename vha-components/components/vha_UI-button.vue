<style scoped lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// vhaUI组件 - 按钮
.vha_UI-button
  .fa
    margin-right rpx(8)

// vhaUI组件 - 按钮-模式-无
.vhaUIbutton_mode-none
  cursor pointer
  margin 0
  padding 0
  border none
  font-size rpx(24)
  display inline-block
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
  background-color transparent
  display flex
  align-items center

// vhaUI组件 - 按钮-模式-基本
.vhaUIbutton_mode-base
  @extend .vhaUIbutton_mode-none
  color black_
  &:active
    color white_

// vhaUI组件 - 按钮-模式-正常
.vhaUIbutton_mode-normal
  @extend .vhaUIbutton_mode-none
  padding rpx(32)
  border-radius rpx(8)

// vhaUI组件 - 按钮-模式-线框
.vhaUIbutton_mode-outline
  @extend .vhaUIbutton_mode-none
  // background-color transparent !important
  border 2px solid red
  padding rpx(32)
  border-radius rpx(8)
  &:active
    background-color Success_Focus
    
    

// vhaUI组件 - 按钮-颜色-信息
.vhaUIbutton_color-Success
  color white_
  background-color Success_
  &:active
    background-color Success_Focus
.vhaUIbutton_color-Info
  color white_
  background-color Info_
  &:active
    background-color Info_Focus
.vhaUIbutton_color-Warning
  color white_
  background-color Warning_
  &:active
    background-color Warning_Focus
.vhaUIbutton_color-Error
  color white_
  background-color Error_
  &:active
    background-color Error_Focus
// .vhaUIbutton_color-Assertive
//   color white_
//   background-color Assertive_
//   &:active
//     background-color Assertive_Focus
// .vhaUIbutton_color-Positive
//   color white_
//   background-color Positive_
//   &:active
//     background-color Positive_Focus
// .vhaUIbutton_color-Balanced
//   color white_
//   background-color Balanced_
//   &:active
//     background-color Balanced_Focus
// .vhaUIbutton_color-Energized
//   color white_
//   background-color Energized_
//   &:active
//     background-color Energized_Focus
// .vhaUIbutton_color-Calm
//   color white_
//   background-color Calm_
//   &:active
//     background-color Calm_Focus

// vhaUI组件 - 按钮-颜色-基本
.vhaUIbutton_color-Dark
  color white_
  background-color Dark_
  &:active
    background-color Dark_Focus
.vhaUIbutton_color-Royal
  color white_
  background-color Royal_
  &:active
    background-color Royal_Focus
.vhaUIbutton_color-Stable
  color black_
  background-color Stable_
  &:active
    background-color Stable_Focus
.vhaUIbutton_color-Light
  color black_
  background-color Light_
  &:active
    background-color Light_Focus


.vha_UI-button_type-normal
  padding rpx(18)
  min-width rpx(22)
  min-height rpx(42)
  border 1px solid #c8c8c8
  border-radius 3px
  color #333
  background-color #f8f8f8
  &:active
    color #555
    border-color #ddd
    background-color #fafafa
    box-shadow inset 0 1px 4px rgba(0, 0, 0, 0.1)


</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <button 
    class="vha_UI-button" 
    :class="
    this.mode === 'none' ? 'vhaUIbutton_mode-none' : 
    `vhaUIbutton_mode-${this.mode} vhaUIbutton_color-${this.color}`"
    >
    
    <i class="fa" :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
  <!-- <button class="vha_UI-button" :class="type === 'base' ? '' : 'vha_UI-button_type-' + type">
    <slot></slot>
  </button> -->
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIbutton',
  props: {
    //父组件参数
    icon: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: 'Stable'
    },
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
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    console.log(this.$el.disabled)
  }
}
</script>