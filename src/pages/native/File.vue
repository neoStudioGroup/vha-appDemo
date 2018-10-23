<style lang="stylus">
.native_PG-file
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="native_PG-file">

    <vha-scrollview class="p_UI-content">
      
      <div class="_UI-button" @click="getFreeDiskSpace()">
        获取设备总空闲空间
      </div>
      
      <div class="_UI-button" @click="checkDir()">
        检测目录
      </div>
      
      <div class="_UI-button" @click="createDir()">
        创建目录
      </div>
      
      <div class="_UI-button" @click="removeDir()">
        删除目录
      </div>

      <div class="_UI-button" @click="checkFile()">
        检测文件
      </div>
      
      <div class="_UI-button" @click="createFile()">
        创建文件neo.txt
      </div>
      
      <div class="_UI-button" @click="writeFile()">
        写入文件neo.txt > neoStudioGroup.com
      </div>
      
      <div class="_UI-button" @click="readFile()">
        读取neo.txt
      </div>
      
      <div class="_UI-button" @click="removeFile()">
        删除文件
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGfile',
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
      dataDirectory: "",
      t_FileName: 'neo.txt',
      t_DirName:'mydir'
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
    //获取设备剩余空间
    getFreeDiskSpace: function(){
      this.$vha.file.getFreeDiskSpace()
        .then((success) => {
          this.logText += "空闲空间 : " + success + "字节\n"
        }, (error) => {
          this.logText += "错误 : " + error + "\n"
        })
    },
    //检测目录
    checkDir: function(){
      this.$vha.file.checkDir(this.dataDirectory, this.t_DirName)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_DirName + success + "存在\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_DirName + error + "不存在\n"
        })
    },
    createDir: function(){
      this.$vha.file.createDir(this.dataDirectory, this.t_DirName, false)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_DirName + success + "创建目录成功\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_DirName + error + "创建目录失败\n"
        })
    },
    //删除目录
    removeDir: function(){
      this.$vha.file.removeDir(this.dataDirectory, this.t_DirName)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_DirName + success + "删除成功\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_DirName + error + "删除失败\n"
        })
    },
    //检测文件
    checkFile: function(){
      this.$vha.file.checkFile(this.dataDirectory, this.t_FileName)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_FileName + success + "存在\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_FileName + error + "不存在\n"
        })
    },
    //创建一个文件
    createFile: function(){
      this.$vha.file.createFile(this.dataDirectory, this.t_FileName, true)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_FileName + success + "创建文件成功\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_FileName + error + "创建文件失败\n"
        })
    },
    //写入文件
    writeFile: function(){
      this.$vha.file.writeFile(this.dataDirectory, this.t_FileName, "neoStudioGroup.com", true)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_FileName + success + "写入文件成功\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_FileName + error + "写入文件失败\n"
        })
    },
    //读取文件
    readFile: function(){
      this.$vha.file.readAsText(this.dataDirectory, this.t_FileName)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_FileName + "内容:" + success + "读取内容成功\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_FileName + error + "读取内容失败\n"
        })
    },
    //删除文件
    removeFile: function(){
      this.$vha.file.removeFile(this.dataDirectory, this.t_FileName)
        .then((success) => {
          this.logText += this.dataDirectory + this.t_FileName + "删除成功" + success + "\n"
        }, (error) => {
          this.logText += this.dataDirectory + this.t_FileName + error + "删除失败\n"
        })
    }
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
    this.dataDirectory = this.$vha.file.const.dataDirectory
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