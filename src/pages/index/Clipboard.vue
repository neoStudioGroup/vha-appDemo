<style lang="stylus">
.p_UI-clipboard
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-clipboard">
    
    <vha-scrollview class="p_UI-content">
      <label class="_UI-input">
        <span class="input-label">复制内容：</span>
        <input type="text" v-model="cpText">
      </label>
      
      <div class="_UI-button" @click="Clipboard_Copy()" >
        复制到剪贴板
      </div>
      
      <label class="_UI-input">
        <span class="input-label">黏贴内容：</span>
        <input type="text" v-model="ptText">
      </label>
      
      <div class="_UI-button" @click="Clipboard_Paste()" >
        获取剪贴板
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-clipboard',
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
      cpText: "hahaha",
      ptText: ""
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
    Clipboard_Copy: function(){
      this.$vha.clipboard.copy(this.cpText)
    },
    Clipboard_Paste: function(){
      this.$vha.clipboard.paste((text) => {
        this.ptText = text
        this.logText += "黏贴内容 : " + text + "\n"
      })
    }
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>