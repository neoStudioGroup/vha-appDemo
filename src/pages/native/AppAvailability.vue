<style lang="stylus">
.native_PG-appavailability
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-appavailability">

    <vha-scrollview class="p_UI-content">
      <vha-button block effect="spread" color="error" size="fullWidth" @click="check()">
        是否安装twitter
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGappavailability',
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
    check: function () {
      let scheme

      if(this.$vha.device.platform === 'iOS') {
        scheme = 'twitter://'
      }
      else if(this.$vha.device.platform === 'Android') {
        scheme = 'com.twitter.android'
      }
      
      this.$vha.appavailability.check(scheme, () => { 
        this.logText += "twitter已安装" + "\n"
      }, () => {
        this.logText += "twitter未安装" + "\n"
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