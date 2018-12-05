<style lang="stylus">
.native_PG-applogin
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-applogin">

    <vha-scrollview class="p_UI-content">
      <!-- <vha-button block effect="spread" color="error" size="fullWidth" @click="QQlogin()">
        QQ登陆
      </vha-button> -->
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="WXlogin()">
        微信登陆
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="share()">
        分享到朋友圈
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGapplogin',
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
    QQlogin: function () {

    },
    WXlogin: function () {
      Wechat.isInstalled(function (installed) {
        // this.logText += "微信已安装" + installed + "\n"
      }, function (reason) {
        this.logText += "微信未安装 : " + reason + "\n"
        return
      });
      
      var scope = "snsapi_userinfo",
          state = "_" + (+new Date());
      Wechat.auth(scope, state, function (response) {
        // you may use response.code to get the access token.
        this.logText += JSON.stringify(response) + "\n"
      }, function (reason) {
        this.logText += "失败 : " + reason + "\n"
      })
    },
    share: function () {
      Wechat.share({
        text: "这是vha-appDemo分享的文本",
        scene: Wechat.Scene.TIMELINE
      }, function () {
        this.logText += "成功" + "\n"
      }, function (reason) {
        this.logText += "失败 : " + reason + "\n"
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