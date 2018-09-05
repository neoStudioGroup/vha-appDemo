<style lang="stylus">
.p_UI-globalization
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-globalization">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="Globalization()">
        地区/时区
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-globalization',
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
    Globalization: function () {
      this.$vha.globalization.getPreferredLanguage((result) => {
        this.logText += "首选语言：" + result.value + "\n"
      },
      (err) => {
        this.logText += "错误" + err + "\n"
      })
      
      this.$vha.globalization.getLocaleName((result) => {
        this.logText += "区域名称：" + result.value + "\n"
      },
      (err) => {
        this.logText += "错误" + err + "\n"
      })
      
      this.$vha.globalization.getFirstDayOfWeek((result) => {
        this.logText += "第一周：" + result.value + "\n"
      },
      (err) => {
        this.logText += "错误" + err + "\n"
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