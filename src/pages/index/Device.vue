<style lang="stylus">
.i_UI-device
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-device">

    <vha-scrollview class="i_UI-content">
      <div class="_UI-button" @click="device()">
        获取设备信息
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-device',
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
    device: function () {
      this.logText += "device : " + JSON.stringify(this.$vha.device, null, 2) + "\n"
      this.logText += "cordova : " + this.$vha.device.cordova + "\n"
      this.logText += "model : " + this.$vha.device.model + "\n"
      this.logText += "name : " + this.$vha.device.name + "\n"
      this.logText += "platform : " + this.$vha.device.platform + "\n"
      this.logText += "uuid : " + this.$vha.device.uuid + "\n"
      this.logText += "version : " + this.$vha.device.version + "\n"
      this.logText += "manufacturer : " + this.$vha.device.manufacturer + "\n"
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