<style lang="stylus">
.native_PG-nativeaudio
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-nativeaudio">

    <vha-scrollview class="p_UI-content">
      
      <div class="_UI-button" @click="play('bass')">
        播放bass
      </div>
      
      <div class="_UI-button" @click="play('highhat')">
        播放highhat
      </div>
      
      <div class="_UI-button" @click="play('snare')">
        播放snare
      </div>
      
      <div class="_UI-button" @click="loop('bass')">
        循环bass
      </div>
      
      <div class="_UI-button" @click="stop('bass')">
        停止bass
      </div>

    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGnativeaudio',
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
    play: function (id) {
      this.$vha.nativeaudio.play(id, (result) => {
        this.logText += id + result + "\n"
      }, (err) => {
        this.logText += err + "\n"
      })
    },
    loop: function (id) {
      this.$vha.nativeaudio.loop(id, (result) => {
        this.logText += id + result + "\n"
      }, (err) => {
        this.logText += err + "\n"
      })
    },
    stop: function (id) {
      this.$vha.nativeaudio.stop(id, (result) => {
        this.logText += id + result + "\n"
      }, (err) => {
        this.logText += err + "\n"
      })
    },
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
    this.$vha.nativeaudio.preloadSimple('bass', 'assets/audio/bass.mp3', (result) => {
      this.logText += 'load bass' + result + "\n"
    }, (err) => {
      this.logText += err + "\n"
    })
    
    this.$vha.nativeaudio.preloadSimple('highhat', 'assets/audio/highhat.mp3', (result) => {
      this.logText += 'load highhat' + result + "\n"
    }, (err) => {
      this.logText += err + "\n"
    })
    
    this.$vha.nativeaudio.preloadSimple('snare', 'assets/audio/snare.mp3', (result) => {
      this.logText += 'load snare' + result + "\n"
    }, (err) => {
      this.logText += err + "\n"
    })
    
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