<style scoped lang="stylus">
._UI-upgrade
  .ui-u-main
    position relative
    padding rpx(80) rpx(30) rpx(30)
    width rpx(500)
    border-radius rpx(30)
    background-color #fff
    box-shadow 0 0 rpx(40) rgba(0,0,0,0.2)
    .ui-u-close
      position absolute
      top rpx(10)
      right rpx(10)
      .vha_UI-button
        font-size rpx(40)
    img
      width 100%
    .ui-u-title
      margin rpx(16) 0
      text-align center
      font-size rpx(36)
      font-weight bold
    .ui-u-info
      margin rpx(20) 0
      font-size rpx(26)
      color #777
    .ui-u-button
      font-size rpx(32)
      font-weight bold
  
  .upgradeAnimate-enter-active //进入路由-上层-进场 过程中保持的状态
    transition all 300ms
  .upgradeAnimate-enter //进场开始值
    transform translate(0, 100%)
    opacity 0
  .upgradeAnimate-enter-to //进场目标值
  
  .upgradeAnimate-leave-active //进入路由-下层-退场 过程中保持的状态
    transition all 300ms
  .upgradeAnimate-leave //退场开始值
  .upgradeAnimate-leave-to //退场目标值
    transform translate(0, 100%)
    opacity 0
    
  .upgradeAnimate-up-leave-active //进入路由-下层-退场 过程中保持的状态
    transition all 300ms
  .upgradeAnimate-up-leave //退场开始值
  .upgradeAnimate-up-leave-to //退场目标值
    transform translate(0, -100%)
    opacity 0
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_UI-upgrade">
    <transition :name="animte">
      <vha-view class="ui-u-main" axis="y" size="none" v-if="show">
        <div class="ui-u-close"><vha-button type="base" icon="fa fa-close" color="calm" @click="$parent.close()"></vha-button></div>
        
        <img src="./up.png">
        
        <p class="ui-u-title">#新功能#</p>
        
        <ul class="ui-u-info">
          <li>1.新增优惠活动功能</li>
          <li>2.提升额度功能已开启</li>
          <li>3.优化首页及账单详情页面</li>
        </ul>
        
        <vha-button class="ui-u-button" @click="updata" color="info">立即升级</vha-button>
      </vha-view>
    </transition>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'UIupgrade',
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      show: false,
      animte: 'upgradeAnimate'
    }
  },
  methods: {
    //方法 - 进入页面创建
    updata: function () {
      this.$vhaDialog.alert('你点击了升级按钮', {
        callback: () => {
          this.animte += '-up'
          // 修改参数后下次视图更新 关闭popup
          this.$nextTick(() => {
            this.$parent.close()
          })
        }
      })
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    this.$nextTick(function () {
      this.$parent.callback = {
        show: () => {
          console.log('show')
          this.show = true
        },
        close: () => {
          console.log('close')
          this.show = false
          setTimeout(() => {
            // 挂载时禁止了自动销毁, 在这里手动销毁
            this.$parent.destroy()
          }, 300)
        },
        destroy: () => {
          console.log('destroy')
        }
      }
      
      this.$parent.show()
      console.log(this.$parent)
    })
  }
}
</script>