<style lang="stylus">
.native_PG-vibration
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-vibration">

    <vha-scrollview class="p_UI-content">
      <label class="_UI-input">
        <span class="input-label">震动毫秒：</span>
        <input type="text" v-model="VibrationTime">
      </label>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="Vibration()">
        震动
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGvibration',
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
      VibrationTime: 2000
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
    Vibration: function () {
      this.logText += "震动：" + this.VibrationTime + " 毫秒" + "\n"
      if (this.$vha.vibration.vibrate(this.VibrationTime)) {
        this.logText += "成功" + "\n"
      } else {
        this.logText += "失败" + "\n"
      }
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