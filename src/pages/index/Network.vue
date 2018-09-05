<style lang="stylus">
.p_UI-network
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-network">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="Network_getType()">
        获取网络状态
      </div>
      
      <div class="_UI-button" @click="Network_isOnline()">
        判断网络是否在线
      </div>
      
      <div class="_UI-button" @click="Network_isOffline()">
        判断网络是否离线
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-network',
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
      overlaysWebViewtruefalse: true,
      stylenumber: -1,
      styleColornumber: -1,
      showhidetruefalse: true
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
    Network_getType: function(){
      this.logText += "当前网络状态 : " + this.$vha.network.type + "\n"
    },
    Network_isOnline: function(){
      let status = this.$vha.network.type !== this.$vha.network.const.UNKNOWN && this.$vha.network.type !== this.$vha.network.const.NONE
      this.logText += "网络在线状态 : " + status + "\n"
    },
    Network_isOffline: function(){
      let status = this.$vha.network.type === this.$vha.network.const.UNKNOWN || this.$vha.network.type === this.$vha.network.const.NONE
      this.logText += "网络离线状态 : " + status + "\n"
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