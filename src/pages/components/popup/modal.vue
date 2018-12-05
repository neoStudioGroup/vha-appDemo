<style scoped lang="stylus">
._UI-modal
  width 100%
  height 100%
  background-color #fff
  .vha_UI-navbar
    .ui-n-rightBox
      width rpx(100)
    .ui-m-close
      font-size rpx(40) !important
  .ui-m-content
    padding rpx(20)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-view class="_UI-modal" axis="y" size="none">
    <vha-subview>
      <vha-navbar title="modal" color="info">
        <div slot="leftBox"></div>
        <vha-button class="ui-m-close" slot="rightBox" type="base" icon="fa fa-close" size="full" color="calm" @click="$parent.close()"></vha-button>
      </vha-navbar>
    </vha-subview>
    <vha-subview class="ui-m-content" full="height">
      <vha-button @click="$vhaDialog.alert('弹出alert')" color="error">弹出alert</vha-button>
    </vha-subview>
  </vha-view>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'UImodal',
  props: {
    //父组件参数
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
    this.$nextTick(function () {
      console.log(this.$parent)
    })
  }
}
</script>