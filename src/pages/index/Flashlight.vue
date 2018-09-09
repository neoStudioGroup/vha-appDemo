<style lang="stylus">
.i_UI-flashlight
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-flashlight">

    <vha-scrollview class="i_UI-content">
      <div class="_UI-button" @click="FlashlightIs()">
        是否可用
      </div>
      <div class="_UI-button" @click="FlashlightOn()">
        打开
      </div>
      <div class="_UI-button" @click="FlashlightOff()">
        关闭
      </div>
      <div class="_UI-button" @click="FlashlightChange()">
        切换
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-flashlight',
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
    FlashlightIs: function(){
      this.$vha.flashlight.available((isAvailable) => {
        this.logText += "闪光灯是否可用" + isAvailable + "\n"
      })
    },
    FlashlightOn: function(){
      this.$vha.flashlight.switchOn((success) => {
          this.logText += "开启 " + success + "\n"
        }, (error) => {
          this.logText += "开启失败 " + error + "\n"
        })
    },
    FlashlightOff: function(){
      this.$vha.flashlight.switchOff((success) => {
          this.logText += "关闭 " + success + "\n"
        }, (error) => {
          this.logText += "关闭失败 " + error + "\n"
        })
    },
    FlashlightChange: function(){
      this.$vha.flashlight.toggle((success) => {
          this.logText += "切换 " + success + "\n"
        }, (error) => {
          this.logText += "切换失败 " + error + "\n"
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