<style lang="stylus">
.native_PG-bluetooth
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-bluetooth">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="enable()">
        开启蓝牙
      </div>
      
      <div class="_UI-button" @click="scan()">
        扫描周围蓝牙
      </div>
      
      <label class="_UI-input">
        <span class="input-label">Id：</span>
        <input type="text" v-model="deviceid">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">serviceUUID：</span>
        <input type="text" v-model="serviceUUID">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">counterCharacteristic：</span>
        <input type="text" v-model="counterCharacteristic">
      </label>
      
      <div class="_UI-button" @click="connectFun()">
        连接蓝牙
      </div>
      
      <div class="_UI-button" @click="read()">
        读取数据
      </div>
      
      <div class="_UI-button" @click="disconnect()">
        断开蓝牙
      </div>
      
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGbluetooth',
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
      deviceid: 0,
      serviceUUID: 0,
      counterCharacteristic: 0,
      devices: []
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
    enable: function () {
      this.$vha.bluetooth.enable(() => {
          this.logText += "蓝牙已启用" + "\n"
        }, (error) => {
          this.logText += "蓝牙未启用" + error + "\n"
        }
      )
    },
    scan: function () {
      this.$vha.bluetooth.scan([], 10, (device) => {
          this.devices.push(device)
          console.log(device)
          this.logText += JSON.stringify(device, null, 2) + "\n"
        }, (error) => {
          this.logText += "失败 : " + error + "\n"
        }
      )
    },
    connect: function () {
      this.$vha.bluetooth.connect(this.deviceid, () => {
          this.logText += "成功" + "\n"
        }, (error) => {
          this.logText += "失败 : " + error + "\n"
        }
      )
    },
    read: function () {
      setInterval(() => {
        this.$vha.bluetooth.read(this.deviceid, this.serviceUUID, this.counterCharacteristic, () => {
            this.logText += "成功" + "\n"
          }, (error) => {
            this.logText += "失败 : " + error + "\n"
          }
        )
      }, 1000)
    },
    disconnect: function () {
      this.$vha.bluetooth.disconnect(this.deviceid, () => {
          this.logText += "成功" + "\n"
        }, (error) => {
          this.logText += "失败 : " + error + "\n"
        }
      )
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