<style lang="stylus">
.p_UI-actionsheet
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-actionsheet">

    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="ActionSheet()">
        原生上拉菜单
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-actionsheet',
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
    ActionSheet: function(){
      let options = {
          androidTheme: this.$vha.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
          title: '你要做什么?',
          subtitle: '选择一个选项',
          buttonLabels: ['分享到新浪微博', '分享到朋友圈'],
          androidEnableCancelButton : true,
          winphoneEnableCancelButton : true,
          addCancelButtonWithLabel: '取消',
          addDestructiveButtonWithLabel : '删除这个',
          position: [20, 40],
          destructiveButtonLast: true
      }
      
      this.$vha.actionsheet.show(options, (btnIndex) => {
        this.logText += "你点击了索引号 " + btnIndex + "\n"
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