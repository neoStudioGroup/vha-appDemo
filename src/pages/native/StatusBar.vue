<style lang="stylus">
.native_PG-statusbar
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="native_PG-statusbar">
    
    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="StatusBaroverlaysWebView()">
        状态栏不占用视图
      </div>
      
      <div class="_UI-button" @click="StatusBarstyle()">
        样式
      </div>
      
      <div class="_UI-button" @click="StatusBarstyleColor()">
        背景颜色
      </div>
      
      <div class="_UI-button" @click="StatusBarshowhide()">
        显示/隐藏
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGstatusbar',
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
    StatusBaroverlaysWebView: function () {
      this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
      if(this.overlaysWebViewtruefalse){
        this.logText += "设置 overlaysWebView = false" + "\n"
        this.overlaysWebViewtruefalse = false
       this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
      }else{
        this.logText += "设置 overlaysWebView = true" + "\n"
        this.overlaysWebViewtruefalse = true
       this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
      }
    },
    StatusBarstyle: function(){
      this.stylenumber++
      if(this.stylenumber > 3){this.stylenumber = 0}
      
      switch (this.stylenumber) {
        case 0:
          this.logText += "设置 style = Default:0" + "\n"
          this.$vha.statusbar.styleDefault()
          break
        case 1:
          this.logText += "设置 style = LightContent:1" + "\n"
          this.$vha.statusbar.styleLightContent()
          break
        case 2:
          this.logText += "设置 style = BlackTranslucent:2" + "\n"
          this.$vha.statusbar.styleBlackTranslucent()
          break
        case 3:
          this.logText += "设置 style = BlackOpaque:3" + "\n"
          this.$vha.statusbar.styleBlackOpaque()
          break
      }
    },
    StatusBarstyleColor: function(){
      this.styleColornumber++
      if(this.styleColornumber > 4){this.styleColornumber = 0}
      
      switch (this.styleColornumber) {
        case 0:
          this.logText += "设置 styleColor = black" + "\n"
          this.$vha.statusbar.backgroundColorByName('black')
          break
        case 1:
          this.logText += "设置 styleColor = darkGray" + "\n"
          this.$vha.statusbar.backgroundColorByName('darkGray')
          break
        case 2:
          this.logText += "设置 styleColor = lightGray" + "\n"
          this.$vha.statusbar.backgroundColorByName('lightGray')
          break
        case 3:
          this.logText += "设置 styleColor = white" + "\n"
          this.$vha.statusbar.backgroundColorByName('white')
          break
        case 4:
          this.logText += "设置 styleHex = #ff0000" + "\n"
          this.$vha.statusbar.backgroundColorByHexString('#ff0000')
          break
      }
    },
    StatusBarshowhide: function(){
      if(this.showhidetruefalse){
        this.logText += "隐藏状态栏"+ "\n"
        this.showhidetruefalse = false
        this.$vha.statusbar.hide()
      }else{
        this.logText += "显示状态栏"+ "\n"
        this.showhidetruefalse = true
        this.$vha.statusbar.show()
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