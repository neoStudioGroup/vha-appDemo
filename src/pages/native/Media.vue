<style lang="stylus">
.native_PG-media
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="native_PG-media">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="Record()">
        {{btntext}}
      </div>
      
      <div class="_UI-button" @click="playRecord()">
        播放录音
      </div>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGmedia',
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
      btntext: "开始录音",
      recordMedia: undefined
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
    
    Record: function () {
      if (this.btntext === "开始录音") {
        this.btntext = "停止录音"
                
        this.recordMedia = new Media(this.$vha.file.const.externalDataDirectory + "Record.mp3",
          (success) => {
            console.log("成功 : ", success)
            this.logText += "成功 : " + success + "\n"
          }, (error) => {
            console.log("错误 : ", error)
            this.logText += "错误 : " + error + "\n"
          }, (status) => {
            console.log("状态 : ", status)
            this.logText += "状态 : " + status + "\n"
          })
        
        this.recordMedia.startRecord()
      } else {
        this.btntext = "开始录音"
        this.recordMedia.stopRecord()
        this.recordMedia.release()
        this.recordMedia = undefined
      }
    },
    playRecord: function () {
      let media = new Media(this.$vha.file.const.externalDataDirectory + "Record.mp3",
        (success) => {
          console.log("成功 : ", success)
          this.logText += "成功 : " + success + "\n"
          media.release()
        }, (error) => {
          console.log("错误 : ", error)
          this.logText += "错误 : " + error + "\n"
          media.release()
        }, (status) => {
          console.log("状态 : ", status)
          this.logText += "状态 : " + status + "\n"
        })      
      
      var iOSPlayOptions = {
        numberOfLoops: 2,
        playAudioWhenScreenIsLocked: false
      }

      if (this.$vha.device.platform != "Android") {
        media.play(iOSPlayOptions) // iOS only!
      }else{
        media.play() // Android
      }
      
      // media.pause()
      // media.stop()
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