<style scoped lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// vhaUI组件 - 按钮
.vha_UI-button
  i
    &:first-child
      margin-right rpx(8)
    &:last-child
      margin-left rpx(8)
// ------------------------------------------------------------------
// vhaUI组件 - 按钮-类型-无
.vhaButton_type-none
  cursor pointer
  margin 0
  padding 0
  border none
  font-size rpx(24)
  background-color transparent
  display inline-flex
  align-items center
  // transition all .1s

// vhaUI组件 - 按钮-类型-基本
.vhaButton_type-base
  @extend .vhaButton_type-none
  color black_
  background-color transparent
  &:active
    color white_

// vhaUI组件 - 按钮-类型-正常
.vhaButton_type-normal
  @extend .vhaButton_type-none
  padding rpx(28) rpx(32)
  border-radius rpx(8)

// vhaUI组件 - 按钮-类型-线框
.vhaButton_type-outline
  @extend .vhaButton_type-none
  // background-color transparent !important
  border 2px solid red
  padding rpx(28) rpx(32)
  border-radius rpx(8)
  &:active
    background-color Success_Focus
// ------------------------------------------------------------------
// vhaUI组件 - 按钮-尺寸-小
.vhaButton_size-small
  padding rpx(2) rpx(6)
  font-size rpx(16)
.vhaButton_size-normal
  font-size rpx(24)
.vhaButton_size-large
  padding rpx(38) rpx(80)
  font-size: rpx(32)
.vhaButton_size-fullWidth
  display flex
  width 100%
  border-radius 0
.vhaButton_size-full
  display flex
  padding 0
  width 100%
  height 100%
  border-radius 0
// ------------------------------------------------------------------
// vhaUI组件 - 按钮-状态-禁止
.vhaButton_status-disabled
  cursor not-allowed
  color #aaa !important
  background-color #f5f5f5 !important
  &:active
    background-color #f5f5f5 !important
// ------------------------------------------------------------------
// vhaUI组件 - 按钮-颜色-信息
vhaButton_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor
  &:active
    background-color $backgroundActiveColor
vhaButton_outlineColor($color, $activeColor, $backgroundActiveColor)
  color $color
  border 1px solid $color
  background-color transparent
  &:active
    color $activeColor
    background-color $backgroundActiveColor
.vhaButton_color-Success
  vhaButton_color(white_, Success_, Success_Focus)
.vhaButton_type-outline.vhaButton_color-Success
  vhaButton_outlineColor(Success_, white_, Success_Focus)

.vhaButton_color-Info
  vhaButton_color(white_, Info_, Info_Focus)
.vhaButton_type-outline.vhaButton_color-Info
  vhaButton_outlineColor(Info_, white_, Info_Focus)

.vhaButton_color-Warning
  vhaButton_color(white_, Warning_, Warning_Focus)
.vhaButton_type-outline.vhaButton_color-Warning
  vhaButton_outlineColor(Warning_, white_, Warning_Focus)

.vhaButton_color-Error
  vhaButton_color(white_, Error_, Error_Focus)
.vhaButton_type-outline.vhaButton_color-Error
  vhaButton_outlineColor(Error_, white_, Error_Focus)
// .vhaButton_color-Assertive
//   vhaButton_color(white_, Assertive_, Assertive_Focus)
// .vhaButton_color-Positive
//   vhaButton_color(white_, Positive_, Positive_Focus)
// .vhaButton_color-Balanced
//   vhaButton_color(white_, Balanced_, Balanced_Focus)
// .vhaButton_color-Energized
//   vhaButton_color(white_, Energized_, Energized_Focus)
// .vhaButton_color-Calm
//   vhaButton_color(white_, Calm_, Calm_Focus)

// vhaUI组件 - 按钮-颜色-基本
.vhaButton_color-Dark
  vhaButton_color(white_, Dark_, Dark_Focus)
.vhaButton_type-outline.vhaButton_color-Dark
  vhaButton_outlineColor(Dark_, white_, Dark_Focus)

.vhaButton_color-Royal
  vhaButton_color(white_, Royal_, Royal_Focus)
.vhaButton_type-outline.vhaButton_color-Royal
  vhaButton_outlineColor(Royal_, white_, Royal_Focus)

.vhaButton_color-Stable
  vhaButton_color(black_, Stable_, Stable_Focus)
.vhaButton_type-outline.vhaButton_color-Stable
  vhaButton_outlineColor(Stable_, black_, Stable_Focus)

.vhaButton_color-Light
  vhaButton_color(black_, Light_, Light_Focus)
.vhaButton_type-outline.vhaButton_color-Light
  vhaButton_outlineColor(Light_, black_, Light_Focus)
// ------------------------------------------------------------------
// vhaUI组件 - 按钮-效果-扩散
vhaButton_effectColor($backgroundColor)
  position relative
  &:after
    content ""
    display block
    position absolute
    top rpx(-12)
    left rpx(-12)
    right rpx(-12)
    bottom rpx(-12)
    pointer-events none
    border-radius inherit
    background-color $backgroundColor
    opacity 0
    transition all .2s
  &:active
    &:after
      opacity .6
      top 0
      left 0
      right 0
      bottom 0
      transition 0s
.vhaButton_effect-boom.vhaButton_color-Success
  vhaButton_effectColor(Success_Focus)
.vhaButton_effect-boom.vhaButton_color-Info
  vhaButton_effectColor(Info_Focus)
.vhaButton_effect-boom.vhaButton_color-Warning
  vhaButton_effectColor(Warning_Focus)
.vhaButton_effect-boom.vhaButton_color-Error
  vhaButton_effectColor(Error_Focus)
.vhaButton_effect-boom.vhaButton_color-Dark
  vhaButton_effectColor(Dark_)
.vhaButton_effect-boom.vhaButton_color-Royal
  vhaButton_effectColor(Royal_)
.vhaButton_effect-boom.vhaButton_color-Stable
  vhaButton_effectColor(#dbdbdb)
.vhaButton_effect-boom.vhaButton_color-Light
  vhaButton_effectColor(Light_Focus)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <button :class="props" @click="handleClick($event)">
    <i class="_df" :class="icon" v-if="icon"></i>
    <slot></slot>
    <i class="_df" :class="iconRight" v-if="iconRight"></i>
  </button>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIbutton',
  props: {
    //父组件参数
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    }
  },
  data() {
    //动态数据
    return {
      props: ''
    }
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 进入页面创建
    handleClick(event) {
      this.$emit('click', event);
    },
    procProps: function () {
      let temp_type = `vhaButton_type-${this.type}${!this.size ? '' : ' vhaButton_size-' + this.size}`
      
      switch (this.type) {
        case 'none': {
          break
        }
        case 'base': {
          break
        }
        case 'normal': {
          temp_type += `${!this.effect ? '' : ' vhaButton_effect-' + this.effect} vhaButton_color-${!this.color ? 'Stable' : this.color}`
          break
        }
        case 'outline': {
          temp_type += `${!this.effect ? '' : ' vhaButton_effect-' + this.effect}  vhaButton_color-${!this.color ? 'Royal' : this.color}`
          break
        }
      }
      
      this.props = `vha_UI-button ${temp_type}`
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    this.procProps()
    
    if (this.$el.disabled) {
      console.log(this.props)
      this.props += ' vhaButton_status-disabled'
    }
  }
}
</script>