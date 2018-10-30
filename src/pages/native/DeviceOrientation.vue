<style lang="stylus">
.native_PG-deviceorientation
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
    img
      padding rpx(40)
      width 100%
      box-sizing border-box
      transition all 300ms
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="native_PG-deviceorientation">

    <vha-scrollview class="p_UI-content">
      <img src="../../assets/images/Orientation.png" :style="intdeg">
      
      <div class="_UI-button" @click="getCurrentHeading()">
        获取数据
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGdeviceorientation',
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
      intdeg: {
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
    getCurrentHeading: function () {
      this.$vha.deviceorientation.getCurrentHeading((result) => {
          let intdeg = parseInt(result.magneticHeading)
          this.logText += "intdeg : " + intdeg + "\n"
        }, (err) => {
          this.logText += "错误 : " + err + "\n"
        })
    }
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
    this.watchID = 0
    this.inAngle = -1
    this.lastAngle = 0
  },
  mounted() {
    //挂载实例后 - this.$el存在
  
    this.getCurrentHeading()
    setTimeout(() => {}, 1000)
    
    let options = {
      frequency: 10
    }
    
    this.watchID = this.$vha.deviceorientation.watchHeading((result) => {
        let intdeg_ = 360 - result.magneticHeading
        
        let thisAngle = intdeg_ - this.lastAngle
        if (thisAngle != 0) {
          this.intdeg.transform = "rotate(" + intdeg_ + "deg)"
        }
        this.lastAngle = intdeg_
      }, (err) => {
        this.logText += "错误 : " + err + "\n"
      }, options)
    
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
    this.$vha.deviceorientation.clearWatch(this.watchID)
  },
  destroyed() {
    //销毁后
  }
}
</script>