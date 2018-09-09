<style lang="stylus">
.i_UI-applogin
  box-sizing border-box
  display flex
  flex-direction column
  .i_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="i_UI-applogin">

    <vha-scrollview class="i_UI-content">
      <!-- <div class="_UI-button" @click="QQlogin()">
        QQ登陆
      </div> -->
      
      <div class="_UI-button" @click="WXlogin()">
        微信登陆
      </div>
      
      <div class="_UI-button" @click="share()">
        分享到朋友圈
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'i_UI-applogin',
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
        text: "这是vha分享的文本",
        scene: Wechat.Scene.TIMELINE
      }, function () {
        this.logText += "成功" + "\n"
      }, function (reason) {
        this.logText += "失败 : " + reason + "\n"
      })
    },
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