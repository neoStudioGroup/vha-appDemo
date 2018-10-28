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
// ------------------------------------------------------------------
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

// UI组件 - 按钮-类型-基本
.vha_UI-buttonGroup.type-base
  @extend .vha_UI-buttonGroup.type-none
  color black_
  background-color transparent
  &:active
    color white_

// UI组件 - 按钮-类型-正常
.vha_UI-buttonGroup.type-normal
  @extend .vha_UI-buttonGroup.type-none
  padding 0 rpx(30)
  height rpx(90)
  border-radius rpx(8)

// UI组件 - 按钮-类型-线框
.vha_UI-buttonGroup.type-outline
  @extend .vha_UI-buttonGroup.type-normal
  border 2px solid red
  &:active
    background-color Success_Focus
// ------------------------------------------------------------------
// UI组件 - 按钮-尺寸-小
.vha_UI-buttonGroup.size-small
  padding rpx(4) rpx(6)
  height auto
  font-size rpx(16)
.vha_UI-buttonGroup.size-normal
  // padding 0 rpx(30)
  // height rpx(90)
  font-size rpx(24)
.vha_UI-buttonGroup.size-large
  padding 0 rpx(60)
  height rpx(120)
  font-size: rpx(32)
.vha_UI-buttonGroup.size-fullWidth
  @extend .vha_UI-buttonGroup.size-normal
  width 100%
.vha_UI-buttonGroup.size-full
  // @extend .vha_UI-buttonGroup.size-normal
  padding 0
  width 100%
  height 100%
  border-radius 0
// ------------------------------------------------------------------
// UI组件 - 按钮-状态-禁止
.vha_UI-buttonGroup.status-disabled
  cursor not-allowed
  color #aaa !important
  background-color #f5f5f5 !important
  &:active
    background-color #f5f5f5 !important
// ------------------------------------------------------------------
// UI组件 - 按钮-display-块
.vha_UI-buttonGroup.display-block
  display block
// ------------------------------------------------------------------
// UI组件 - 按钮-颜色-信息
vhaButtonGroup_color($color, $backgroundColor, $backgroundActiveColor)
  color $color
  background-color $backgroundColor
  &:active
    background-color $backgroundActiveColor
vhaButtonGroup_outlineColor($color, $activeColor, $backgroundActiveColor)
  color $color
  border 1px solid $color
  background-color transparent
  &:active
    color $activeColor
    background-color $backgroundActiveColor
.vha_UI-buttonGroup.color-Success
  vhaButtonGroup_color(white_, Success_, Success_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Success
  vhaButtonGroup_outlineColor(Success_, white_, Success_Focus)

.vha_UI-buttonGroup.color-Info
  vhaButtonGroup_color(white_, Info_, Info_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Info
  vhaButtonGroup_outlineColor(Info_, white_, Info_Focus)

.vha_UI-buttonGroup.color-Warning
  vhaButtonGroup_color(white_, Warning_, Warning_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Warning
  vhaButtonGroup_outlineColor(Warning_, white_, Warning_Focus)

.vha_UI-buttonGroup.color-Error
  vhaButtonGroup_color(white_, Error_, Error_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Error
  vhaButtonGroup_outlineColor(Error_, white_, Error_Focus)
// .vha_UI-buttonGroup.color-Assertive
//   vhaButtonGroup_color(white_, Assertive_, Assertive_Focus)
// .vha_UI-buttonGroup.color-Positive
//   vhaButtonGroup_color(white_, Positive_, Positive_Focus)
// .vha_UI-buttonGroup.color-Balanced
//   vhaButtonGroup_color(white_, Balanced_, Balanced_Focus)
// .vha_UI-buttonGroup.color-Energized
//   vhaButtonGroup_color(white_, Energized_, Energized_Focus)
// .vha_UI-buttonGroup.color-Calm
//   vhaButtonGroup_color(white_, Calm_, Calm_Focus)

// UI组件 - 按钮-颜色-基本
.vha_UI-buttonGroup.color-Dark
  vhaButtonGroup_color(white_, Dark_, Dark_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Dark
  vhaButtonGroup_outlineColor(Dark_, white_, Dark_Focus)

.vha_UI-buttonGroup.color-Royal
  vhaButtonGroup_color(white_, Royal_, Royal_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Royal
  vhaButtonGroup_outlineColor(Royal_, white_, Royal_Focus)

.vha_UI-buttonGroup.color-Stable
  vhaButtonGroup_color(black_, Stable_, Stable_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Stable
  vhaButtonGroup_outlineColor(Stable_, black_, Stable_Focus)

.vha_UI-buttonGroup.color-Light
  vhaButtonGroup_color(black_, Light_, Light_Focus)
.vha_UI-buttonGroup.type-outline.vha_UI-buttonGroup.color-Light
  vhaButtonGroup_outlineColor(Light_, black_, Light_Focus)
// ------------------------------------------------------------------
// UI组件 - 按钮-效果-扩散
vhaButtonGroup_effectColor($backgroundColor)
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
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Success
  vhaButtonGroup_effectColor(Success_Focus)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Info
  vhaButtonGroup_effectColor(Info_Focus)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Warning
  vhaButtonGroup_effectColor(Warning_Focus)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Error
  vhaButtonGroup_effectColor(Error_Focus)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Dark
  vhaButtonGroup_effectColor(Dark_)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Royal
  vhaButtonGroup_effectColor(Royal_)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Stable
  vhaButtonGroup_effectColor(#dbdbdb)
.vha_UI-buttonGroup.effect-spread.vha_UI-buttonGroup.color-Light
  vhaButtonGroup_effectColor(Light_Focus)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div 
    class="vha_UI-buttonGroup" 
  >
    1111111
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
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
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large',
          'fullWidth',
          'full'
        ].indexOf(value) > -1;
      }
    },
    effect: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'spread'
        ].indexOf(value) > -1;
      }
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'none',
          'Success',
          'Info',
          'Warning',
          'Error',
          'Dark',
          'Royal',
          'Stable',
          'Light'
        ].indexOf(value) > -1;
      }
    },
    block: Boolean,
    nativeType: String,
    disabled: Boolean,
    icon: String,
    iconRight: String
  },
  data() {
    //动态数据
    return {
      temp_effect: '', 
      temp_color: ''
    }
  },
  components: {
    //组件 - 引入或定义
    vhaButton
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 进入页面创建
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  created() {
    //实例创建完成后
    switch (this.type) {
      case 'none': {
        break
      }
      case 'base': {
        break
      }
      case 'normal': {
        this.temp_effect = this.effect || ''
        this.temp_color = this.color || 'Stable'
        break
      }
      case 'outline': {
        this.temp_effect = this.effect || ''
        this.temp_color = this.color || 'Royal'
        break
      }
    }
  },
  mounted() {
    //挂载实例后 - this.$el存在
  }
}
</script>