<style lang="stylus">
.native_PG-apprate
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-apprate">

    <vha-scrollview class="p_UI-content">
      <vha-button block effect="spread" color="error" size="fullWidth" @click="promptRating()">
        评价
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGapprate',
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
    promptRating: function () {
      this.$vha.apprate.preferences = {
        useLanguage: 'en',
        displayAppName: 'MY APP',
        promptAgainForEachNewVersion: true,
        openStoreInApp: false,
        usesUntilPrompt: 3,
        useCustomRateDialog: false,
        storeAppURL: {
          ios: '<my_app_id>',
          android: 'market://details?id=<package_name>',
          windows8: 'ms-windows-store:Review?name=<...>',
          blackberry: null
        },
        customLocale: {
          title: '动动手指，为我们打分',
          message: '无论是来自亲的赞美诗，还是让亲唾沫横飞的槽点，我们只愿——让评价来得更猛烈些吧！',
          cancelButtonLabel: '残忍地拒绝',
          laterButtonLabel: '容我考虑考虑',
          rateButtonLabel: '马上就去'
        }
      }

      if (this.$vha.apprate.promptForRating(true)) {
        this.logText += "成功" + "\n"
      } else {
        this.logText += "失败" + "\n"
      }
      
      // if (this.$vha.apprate.navigateToAppStore()) {
      //   this.logText += "成功" + "\n"
      // } else {
      //   this.logText += "失败" + "\n"
      // }
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