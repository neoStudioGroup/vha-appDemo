<style lang="stylus">
.native_PG-toast
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-toast">

    <vha-scrollview class="p_UI-content">
      <label class="_UI-input">
        <span class="input-label">Message ：</span>
        <input type="text" v-model="Message">
      </label>
      
      <div class="_UI-button" @click="showTop()">
        原生消息提示(头部)
      </div>
      
      <div class="_UI-button" @click="show()">
        原生消息提示(中间)
      </div>
      
      <div class="_UI-button" @click="showBottom()">
        原生消息提示(底部)
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGtoast',
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
      Message: "neoStudioGroup.com",
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
    showTop: function(){
      this.$vha.toast.showShortTop(this.Message)
    },
    show: function(){
      this.$vha.toast.showShortCenter(this.Message)
    },
    showBottom: function(){
      this.$vha.toast.showShortBottom(this.Message)
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