<style lang="stylus">
.i_UI-devicemotion
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
    
  .i_UI-Motionbg
    margin 0 auto
    width 200px
    height 200px
    box-sizing border-box
    background-image url('../../assets/images/Motionbg.png')
    img
      position relative
      top 90px
      left 90px
      transition all 100ms

  .i_UI-html5
    width 100%
    padding rem(80)
    box-sizing border-box
    perspective 300
    img
      width 100%
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-devicemotion">

    <vha-scrollview class="i_UI-content">
      <div class="i_UI-Motionbg">
        <img src="../../assets/images/Motiondot.png" :style="Motionanima">
      </div>
      
      <label class="_UI-input">
        <span class="input-label">向左/向右倾斜：{{LeftRight}}</span><br>
        <span class="input-label">向前/向后倾斜：{{FrontBack}}</span><br>
        <span class="input-label">朝向：{{Direction}}</span>
      </label>
      
      <div class="i_UI-html5">
        <img class="i_UI-html5" src="../../assets/images/HTML5.png" :style="Motion">
      </div>
    </vha-scrollview>
    
    <!-- <UIlog :text="logText"></UIlog> -->

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-devicemotion',
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
      watchID: 0,
      LeftRight: 0,
      FrontBack : 0,
      Direction: 0,
      Motionanima: {
        top: '',
        left: ''
      },
      Motion: {
        transform: ''
      }
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
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
    
    let options = {
      frequency: 100
    }
    
    this.watchID = this.$vha.devicemotion.watchAcceleration((result) => {
        this.LeftRight = parseInt(result.x * 10)
        this.FrontBack = parseInt(result.y * 10)
        this.Direction = parseInt(result.z * 10)
        
        this.Motionanima.top = 90 + this.FrontBack + "px"
        this.Motionanima.left = 90 + this.LeftRight * -1 + "px"
      }, (err) => {
        this.logText += "错误 : " + err + "\n"
      }, options)
    
    // HTML5 deviceorientation演示
    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', (eventData) => {
        let tiltLR = eventData.gamma
        let tiltFB = eventData.beta
        let dir = eventData.alpha
        
        // this.Motion.transform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)"
        this.Motion.transform = "rotate3d(0,1,0, " + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)"
      }, false)
    } else {
      this.logText += "Device Orientation API not supported." + "\n"
    }
    
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
    this.$vha.devicemotion.clearWatch(this.watchID)
  },
  destroyed() {
    //销毁后
  }
}
</script>