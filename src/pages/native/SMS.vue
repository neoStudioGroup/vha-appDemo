<style lang="stylus">
.native_PG-sms
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="native_PG-sms">

    <vha-scrollview class="p_UI-content">
      
      <label class="_UI-input">
        <span class="input-label">手机号码：</span>
        <input type="text" v-model="smsNumber">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">短信内容：</span>
        <input type="text"  v-model="smsText">
      </label>
      
      <div class="_UI-button" @click="send()">
        发送
      </div>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGsms',
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
      smsNumber: "",
      smsText: "",
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
    send: function () {
      this.logText += "发送短信 : " + this.smsNumber + " " + this.smsText + "\n"
      
      this.$vha.sms.send(this.smsNumber, this.smsText, {}, (res) => {
        this.logText += "成功" + res + "\n"
      }, (err) => {
        this.logText += "失败" + err + "\n"
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