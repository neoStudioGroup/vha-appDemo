<style lang="stylus">
.native_PG-keychain
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-keychain">

    <vha-scrollview class="p_UI-content">
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
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="init()">
        初始化
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGkeychain',
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
      try {
        this.$vha.jpush.init()
        this.$vha.jpush.setDebugMode(true)
        
        if (device.platform != "Android") {
          this.$vha.jpush.setApplicationIconBadgeNumber(0)
        }
      } catch (exception) {
        console.log(exception)
      }
      this.logText += "执行初始化" + "\n"
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