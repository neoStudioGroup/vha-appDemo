<style lang="stylus">
.i_UI-ibeacon
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-ibeacon">

    <vha-scrollview class="i_UI-content">
      
      <!-- 低功耗室内定位与通信 -->
      <label class="_UI-input">
        <span class="input-label">registrationId：</span>
        <input type="text" v-model="registrationId">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">Tags：</span>
        <br>
        <input type="text" v-model="tagText1">
        <input type="text" v-model="tagText2">
        <input type="text" v-model="tagText3">
      </label>
      
      <div class="_UI-hr"></div>
      
      <div class="_UI-button" @click="init()">
        初始化
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-ibeacon',
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
    init: function () {
      let delegate = new this.$vha.ibeacon.Delegate()
      
      console.log(delegate)
      this.logText += "是否打开蓝牙" + this.$vha.ibeacon.isBluetoothEnabled() + "\n"
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