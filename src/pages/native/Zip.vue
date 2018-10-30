<style lang="stylus">
.native_PG-zip
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="native_PG-zip">

    <vha-scrollview class="p_UI-content">
      <img :src="JobsPath" />
      
      <p>解压进度{{Progress}}%</p>
      
      <div class="_UI-button" @click="unzip()">
        解压图片
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGzip',
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
      Progress: 0,
      JobsPath: ""
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
    unzip: function () {
      this.$vha.zip.unzip(this.$vha.file.const.externalDataDirectory + "ziptest.rar", this.$vha.file.const.externalDataDirectory, (isError) => {
        if (isError === 0) {
          this.JobsPath = this.$vha.file.const.externalDataDirectory + "ziptest.jpg"
          this.logText += "成功" + "\n"
        } else {
          this.logText += "失败" + "\n"
        }
      }, (progressEvent) => {
        this.Progress = parseInt((progressEvent.loaded / progressEvent.total) * 100)
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