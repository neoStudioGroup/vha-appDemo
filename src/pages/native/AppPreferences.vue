<style lang="stylus">
.native_PG-apppreferences
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-apppreferences">

    <vha-scrollview class="p_UI-content">
      <vha-button block effect="spread" color="error" size="fullWidth" @click="setkey()">
        设置配置
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="getkey()">
        读取配置
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="show()">
        显示应用首选项
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGapppreferences',
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
    setkey: function () {
      this.$vha.apppreferences.store((value) => {
        this.logText += value + "\n"
      }, (error) => {
        this.logText += "错误 : " + error + "\n"
      }, 'key:1', 'value:1')
    },
    getkey: function () {
      this.$vha.apppreferences.fetch((value) => {
        this.logText += value + "\n"
      }, (error) => {
        this.logText += "错误 : " + error + "\n"
      }, 'key:1')
    },
    show: function () {
      this.$vha.apppreferences.show((value) => {
        this.logText += value + "\n"
      }, (error) => {
        this.logText += "错误 : " + error + "\n"
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