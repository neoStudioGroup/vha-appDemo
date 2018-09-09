<style lang="stylus">
.i_UI-appversion
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-appversion">

    <vha-scrollview class="i_UI-content">
      <div class="_UI-button" @click="appversion()">
        获取应用信息
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-appversion',
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
    appversion: function () {
      this.$vha.appversion.getAppName((result) => {
        this.logText += "应用名称 : " + result + "\n"
      })
      
      this.$vha.appversion.getPackageName((result) => {
        this.logText += "包名称 : " + result + "\n"
      })
      
      this.$vha.appversion.getVersionCode((result) => {
        this.logText += "构建标识符 : " + result + "\n"
      })
      
      this.$vha.appversion.getVersionNumber((result) => {
        this.logText += "版本号 : " + result + "\n"
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