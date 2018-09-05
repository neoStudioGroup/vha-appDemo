<style lang="stylus">
.p_UI-capture
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-capture">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="captureAudio()">
        录制音频
      </div>
      
      <div class="_UI-button" @click="captureImage()">
        录制图片
      </div>
      
      <div class="_UI-button" @click="captureVideo()">
        录制视频
      </div>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-capture',
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
    captureAudio: function () {
			let options = {
				limit: 1,
				duration: 10
			}

			this.$vha.capture.captureAudio((audioData) => {
        console.log(audioData)
				this.logText += audioData + "\n"
			}, (err) => {
				this.logText += "错误 : " + err + "\n"
      }, options)
    },
    
    captureImage: function () {
			let options = {
				limit: 3
			}

			this.$vha.capture.captureImage((imageData) => {
        console.log(imageData)
				this.logText += imageData + "\n"
			}, (err) => {
				this.logText += "错误 : " + err + "\n"
      }, options)
    },
    
    captureVideo: function () {
			let options = {
				limit: 1,
				duration: 15
			}

			this.$vha.capture.captureVideo((videoData) => {
        console.log(videoData)
				this.logText += videoData + "\n"
			}, (err) => {
				this.logText += "错误 : " + err + "\n"
      }, options)
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