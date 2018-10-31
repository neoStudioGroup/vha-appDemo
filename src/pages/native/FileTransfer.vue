<style lang="stylus">
.native_PG-filetransfer
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
    img
      width 100%
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-filetransfer">

    <vha-scrollview class="p_UI-content">
      
      <img :src="targetPath"/>
      
      <p>下载进度{{downloadProgress}}%</p>
        
      <div class="_UI-button" @click="downloadFile()">
        下载文件
      </div>
      
      <p>上传进度{{uploadProgress}}%</p>
      
      <div class="_UI-button" @click="uploadFile()">
        上传文件
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGfiletransfer',
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
      targetPath: "",
      downloadProgress: 0,
      uploadProgress: 0
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
    downloadFile: function () {
      let url = "https://imgsrc.baidu.com/forum/pic/item/dbe35e94a4c27d1e38a4f72913d5ad6edfc438be.jpg"
      let targetPath =  this.$vha.file.const.externalDataDirectory + "testImage.jpg"
      let trustHosts = true
      let options = {}
      
      this.$vha.filetransfer.download(url, targetPath, options, trustHosts, (progress, ftID) => {
        this.downloadProgress = parseInt((progress.loaded / progress.total) * 100)
        
        if(this.downloadProgress > 30){
          // this.$vha.filetransfer.abort(ftID)
        }
      }).then((result) => {
        targetPath =  result.toURL()
        this.logText += result + "\n"
        this.logText += result.toURL() + "\n"
        
        this.targetPath = targetPath
      }, (error) => {
        this.logText += "错误 : " + error + "\n"
      })
    },
    uploadFile: function(){
      let server = prompt("输入你的服务器地址", "")
      if (server) {
        this.$vha.filetransfer.upload(server, this.targetPath, {}, true, (progress, ftID) => {
          this.uploadProgress = parseInt((progress.loaded / progress.total) * 100)
        
          if(this.uploadProgress > 30){
            // this.$vha.filetransfer.abort(ftID)
          }
        }).then((result) => {
          this.logText += "上传成功" + "\n"
        }, (error) => {
          this.logText += "错误 : " + error + "\n"
        })
      }
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