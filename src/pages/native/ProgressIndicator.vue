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
  <vha-page class="native_PG-progressindicator">

    <vha-scrollview class="p_UI-content">
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showText()">
        仅文本
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showSuccess()">
        成功
      </vha-button>
      
      <div class="_UI-hr"></div>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showSimple()">
        原生进度条(简单)
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showSimpleWithLabel()">
        带标签
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showSimpleWithLabelDetail()">
        标签和附加
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showDeterminate()">
        确定
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showDeterminateWithLabel()">
        确定带标签
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showAnnular()">
        环形
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showAnnularWithLabel()">
        环形带标签
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showBar()">
        条形
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="showBarWithLabel()">
        条形带标签
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
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