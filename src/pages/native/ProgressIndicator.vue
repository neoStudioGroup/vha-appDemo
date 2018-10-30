<style lang="stylus">
.native_PG-progressindicator
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="native_PG-progressindicator">

    <vha-scrollview class="p_UI-content">
      
      <div class="_UI-button" @click="showText()">
        仅文本
      </div>
      
      <div class="_UI-button" @click="showSuccess()">
        成功
      </div>
      
      <div class="_UI-hr"></div>
      
      <div class="_UI-button" @click="showSimple()">
        原生进度条(简单)
      </div>
      
      <div class="_UI-button" @click="showSimpleWithLabel()">
        带标签
      </div>
      
      <div class="_UI-button" @click="showSimpleWithLabelDetail()">
        标签和附加
      </div>
      
      <div class="_UI-button" @click="showDeterminate()">
        确定
      </div>
      
      <div class="_UI-button" @click="showDeterminateWithLabel()">
        确定带标签
      </div>
      
      <div class="_UI-button" @click="showAnnular()">
        环形
      </div>
      
      <div class="_UI-button" @click="showAnnularWithLabel()">
        环形带标签
      </div>
      
      <div class="_UI-button" @click="showBar()">
        条形
      </div>
      
      <div class="_UI-button" @click="showBarWithLabel()">
        条形带标签
      </div>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGprogressindicator',
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
    showText: function () {
      this.$vha.progress.showText("加载中..")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showSuccess: function () {
      this.$vha.progress.showSuccess("成功")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showSimple: function () {
      this.$vha.progress.showSimple()
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showSimpleWithLabel: function () {
      this.$vha.progress.showSimpleWithLabel("Loading..")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showSimpleWithLabelDetail: function () {
      this.$vha.progress.showSimpleWithLabelDetail("Loading..", "附加信息")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showDeterminate: function () {
      this.$vha.progress.showDeterminate()
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showDeterminateWithLabel: function () {
      this.$vha.progress.showDeterminateWithLabel("Loading..")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showAnnular: function () {
      this.$vha.progress.showAnnular()
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showAnnularWithLabel: function () {
      this.$vha.progress.showAnnularWithLabel("Loading..")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showBar: function () {
      this.$vha.progress.showBar()
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
    },
    showBarWithLabel: function () {
      this.$vha.progress.showBarWithLabel("Loading..")
      this.logText += "3秒后隐藏" + "\n"
      setTimeout(() => {
        this.$vha.progress.hide()
      }, 3000)
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