<style lang="stylus">
.i_UI-barcodescanner
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
    img 
      max-width 100%
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-barcodescanner">

    <vha-scrollview class="i_UI-content">
      <div class="_UI-button" @click="scan()">
        扫描二维码
      </div>
      
      <label class="_UI-input">
        <span class="input-label">结果：</span>
        <input type="text" v-model="resultTXT">
      </label>
      
      <div class="_UI-button" @click="encode()">
        编码
      </div>
      
      <img :src="encodeUrl">
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-barcodescanner',
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
      resultTXT: "http://neoStudioGroup.com/",
      encodeUrl: ""
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
    scan: function () {
      this.$vha.barcodescanner.scan((result) => {
          if(result.text != ""){
            this.resultTXT = result.text
          }
          this.logText += 
            "结果: " + result.text + "\n" +
            "格式: " + result.format + "\n" +
            "取消: " + result.cancelled + "\n"
        }, (error) => {
          this.logText += "错误 : " + error + "\n" 
        }, {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "将二维码放置在扫描区域", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      )
    },
    encode: function () {
      this.encodeUrl = "http://qr.liantu.com/api.php?text=" + this.resultTXT
      
      this.$vha.barcodescanner.encode(this.$vha.barcodescanner.Encode.TEXT_TYPE, this.resultTXT, (success) => {
          console.log(success)
          this.logText += "成功 : " + success + "\n"
        }, (fail) => {
          this.logText += "失败 : " + fail + "\n"
        }
      )
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