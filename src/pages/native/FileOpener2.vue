<style lang="stylus">
.native_PG-fileopener2
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-fileopener2">

    <vha-scrollview class="p_UI-content">
      <vha-button block effect="spread" color="error" size="fullWidth" @click="open()">
        打开文件
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="uninstall()">
        卸载
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="appIsInstalled()">
        是否安装
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGfileopener2',
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
    open: function () {
      let targetPath =  this.$vha.file.const.externalDataDirectory + "testapk.apk"
      this.$vha.fileopener2.open(targetPath, 'application/vnd.android.package-archive', {
        error: (e) => {
          this.logText += "失败" + e + "\n"
        }, success: () => {
          this.logText += "成功" + "\n"
        }
      })
    },
    uninstall: function () {
      let packName = prompt("输入包名", "com.vha.vhaappdemo")
      this.$vha.fileopener2.uninstall(packName, {
        error: (e) => {
          this.logText += "失败" + e + "\n"
        }, success: () => {
          this.logText += "成功" + "\n"
        }
      })
    },
    appIsInstalled: function () {
      let packName = prompt("输入包名", "com.vha.vhaappdemo")
      this.$vha.fileopener2.appIsInstalled(packName, {
        success: (res) => {
          let iscb = res.status === 1 ? "已安装" : "未安装"
          this.logText += packName + " " + iscb + "\n"
        }
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