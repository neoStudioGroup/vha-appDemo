<style lang="stylus">
.native_PG-dialogs
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-dialogs">

    <vha-scrollview class="p_UI-content">
      <vha-button block effect="spread" color="error" size="fullWidth"  @click="alert()">
        原生普通对话框
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth"  @click="confirm()">
        原生对话框(有取消和确定按钮)
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="prompt()">
        原生对话框(可以输入内容)
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGdialogs',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      logText: "",
    }
  },
  components: {
    //组件 - 引入或定义
    UIlog
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
    alert: function(){
      this.$vha.dialogs.alert('neoStudioGroup',() => {
        this.logText += "对话框结束" + "\n"
      }, 'neo', '确定')
    },
    confirm: function(){
      this.$vha.dialogs.confirm('neoStudioGroup',(buttonIndex) => {
        this.logText += "你点了索引 " + buttonIndex + "\n"
      }, 'neo', ['取消','确定'])
    },
    prompt: function(){
      this.$vha.dialogs.prompt('neoStudioGroup',(results) => {
        this.logText += "你点了索引 " + results.buttonIndex + "\n"
        this.logText += "输入框内容 " + results.input1 + "\n"
      }, 'neo', ['取消','确定'], 'default text')
    }
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>