<style lang="stylus">
// .components_PG-dialog
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-dialog">
    <vha-scrollview>
      
      <p class="_UI-title">基础 base：</p>
      
      <div class="_UI-showBox">
        <vha-button @click="$vhaDialog.alert('Safari打不开网页，因为网址无效。', {title: '无法打开网页', callback: Alert})">Alert</vha-button>
        <div class="_it-2x"></div>
        <vha-button @click="$vhaDialog.confirm('提示', '确定执行此操作?', {callback: Confirm})">Confirm</vha-button>
        <div class="_it-2x"></div>
        <vha-button @click="$vhaDialog.prompt('请输入姓名', '默认的名字', {callback: Prompt})">Prompt</vha-button>
      </div>
      
      <p class="_UI-title">更多 more：</p>
      
      <div class="_UI-showBox">
        <vha-button @click="$vhaDialog.alert('弹出一段消息')">直接调用</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="$vhaDialog.alert('', {title: '在&quot;微信&quot;中打开链接吗?', cancelText: '打开'})">按钮文字</vha-button> 
        <div class="_ph-2x"></div>
        <vha-button @click="more">打开多个</vha-button> 
        <div class="_ph-2x"></div>
        <vha-button @click="moreButton">多个按钮</vha-button> 
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGdialog',
  data() {
    //动态数据
    return {
      moreAlert: undefined
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    Alert: function () {
      console.log('你关闭了Alert')
    },
    Confirm: function (index) {
      console.log('你点击了id：' + index)
    },
    Prompt: function (index, value) {
      console.log('你输入的内容是：' + value)
    },
    more: function (value) {
      this.$vhaDialog.alert('第1条消息', {title: '多个测试'})
      setTimeout(() => {
        this.$vhaDialog.alert('第2条消息', {title: '多个测试'})
        setTimeout(() => {
          this.$vhaDialog.alert('第3条消息', {title: '多个测试'})
        }, 500)
      }, 500)
    },
    moreButton: function (index) {
      let _cb = (index) => {
        console.log('你点击了id：' + index)
        if (index === 0) {this.moreAlert.cancel()}
        
        this.$nextTick(function () {
          // DOM 更新了
          this.$vhaDialog.alert('你点击了id：' + index)
        })
      }
      
      this.moreAlert = this.$vhaDialog.alert('多个按钮测试', {
        buttons: ['取消','按钮2','按钮3','按钮4','按钮5'], 
        callback: _cb
      })
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>