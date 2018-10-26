<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 按钮
.vha_UI-button
  >i
    &:first-child
      margin-right rpx(8)
    &:last-child
      margin-left rpx(8)
// ------------------------------------------------------------------
// UI组件 - 按钮-类型-无
.vha_UI-button.type-none
  cursor pointer
  margin 0
  padding 0
  border none
  color inherit
  background-color transparent
  display inline-block
  transition all .08s

// UI组件 - 按钮-类型-基本
.vha_UI-button.type-base
  @extend .vha_UI-button.type-none
  color black_
  background-color transparent
  &:active
    color white_

// UI组件 - 按钮-类型-正常
.vha_UI-button.type-normal
  @extend .vha_UI-button.type-none
  padding 0 rpx(30)
  height rpx(90)
  border-radius rpx(8)

// UI组件 - 按钮-类型-线框
.vha_UI-button.type-outline
  @extend .vha_UI-button.type-normal
  border 2px solid red
  &:active
    background-color Success_Focus
// ------------------------------------------------------------------
// UI组件 - 按钮-尺寸-小
.vha_UI-button.size-small
  padding rpx(4) rpx(6)
  height auto
  font-size rpx(16)
.vha_UI-button.size-normal
  // padding 0 rpx(30)
  // height rpx(90)
  font-size rpx(24)
.vha_UI-button.size-large
  padding 0 rpx(60)
  height rpx(120)
  font-size: rpx(32)
.vha_UI-button.size-fullWidth
  @extend .vha_UI-button.size-normal
  width 100%
.vha_UI-button.size-full
  // @extend .vha_UI-button.size-normal
  padding 0
  width 100%
  height 100%
  border-radius 0
// ------------------------------------------------------------------
// UI组件 - 按钮-状态-禁止
.vha_UI-button.status-disabled
  cursor not-allowed
  color #aaa !important
  background-color #f5f5f5 !important
  &:active
    background-color #f5f5f5 !important
// ------------------------------------------------------------------
// UI组件 - 按钮-display-块
.vha_UI-button.display-block
  display block
// ------------------------------------------------------------------
// UI组件 - 按钮-颜色-信息
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
.vha_UI-button.color-Success
  vhaButton_color(white_, Success_, Success_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Success
  vhaButton_outlineColor(Success_, white_, Success_Focus)

.vha_UI-button.color-Info
  vhaButton_color(white_, Info_, Info_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Info
  vhaButton_outlineColor(Info_, white_, Info_Focus)

.vha_UI-button.color-Warning
  vhaButton_color(white_, Warning_, Warning_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Warning
  vhaButton_outlineColor(Warning_, white_, Warning_Focus)

.vha_UI-button.color-Error
  vhaButton_color(white_, Error_, Error_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Error
  vhaButton_outlineColor(Error_, white_, Error_Focus)
// .vha_UI-button.color-Assertive
//   vhaButton_color(white_, Assertive_, Assertive_Focus)
// .vha_UI-button.color-Positive
//   vhaButton_color(white_, Positive_, Positive_Focus)
// .vha_UI-button.color-Balanced
//   vhaButton_color(white_, Balanced_, Balanced_Focus)
// .vha_UI-button.color-Energized
//   vhaButton_color(white_, Energized_, Energized_Focus)
// .vha_UI-button.color-Calm
//   vhaButton_color(white_, Calm_, Calm_Focus)

// UI组件 - 按钮-颜色-基本
.vha_UI-button.color-Dark
  vhaButton_color(white_, Dark_, Dark_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Dark
  vhaButton_outlineColor(Dark_, white_, Dark_Focus)

.vha_UI-button.color-Royal
  vhaButton_color(white_, Royal_, Royal_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Royal
  vhaButton_outlineColor(Royal_, white_, Royal_Focus)

.vha_UI-button.color-Stable
  vhaButton_color(black_, Stable_, Stable_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Stable
  vhaButton_outlineColor(Stable_, black_, Stable_Focus)

.vha_UI-button.color-Light
  vhaButton_color(black_, Light_, Light_Focus)
.vha_UI-button.type-outline.vha_UI-button.color-Light
  vhaButton_outlineColor(Light_, black_, Light_Focus)
// ------------------------------------------------------------------
// UI组件 - 按钮-效果-扩散
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
.vha_UI-button.effect-spread.vha_UI-button.color-Success
  vhaButton_effectColor(Success_Focus)
.vha_UI-button.effect-spread.vha_UI-button.color-Info
  vhaButton_effectColor(Info_Focus)
.vha_UI-button.effect-spread.vha_UI-button.color-Warning
  vhaButton_effectColor(Warning_Focus)
.vha_UI-button.effect-spread.vha_UI-button.color-Error
  vhaButton_effectColor(Error_Focus)
.vha_UI-button.effect-spread.vha_UI-button.color-Dark
  vhaButton_effectColor(Dark_)
.vha_UI-button.effect-spread.vha_UI-button.color-Royal
  vhaButton_effectColor(Royal_)
.vha_UI-button.effect-spread.vha_UI-button.color-Stable
  vhaButton_effectColor(#dbdbdb)
.vha_UI-button.effect-spread.vha_UI-button.color-Light
  vhaButton_effectColor(Light_Focus)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <button 
    class="vha_UI-button" 
    :class="[
      'type-' + this.type,
      this.type != 'none' ? 'size-' + this.size : '',
      this.temp_effect ? 'effect-' + this.temp_effect : '',
      this.temp_color ? 'color-' + this.temp_color : '',
      this.block ? 'display-block' : '',
      this.disabled ? 'status-disabled' : ''
    ]" 
    @click="handleClick($event)"
    :type="nativeType"
    :disabled="disabled"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
    <i :class="iconRight" v-if="iconRight"></i>
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