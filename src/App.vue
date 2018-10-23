<style lang="stylus">
@import "./assets/stylus/ionicons.styl"
@import "./assets/stylus/global.styl"

#app
  height 100%
  background-color #fafafa
  >div
    height 100%
    
</style>
--------------------------------------------------------------------------------
<template>
  <div id="app" class="_df _fdc">
    <div class="_df _fdc">
      <div class="header">
        <vha-navbar></vha-navbar>
      </div>
      <div class="content _flexYauto">
        <vha-routerview></vha-routerview>
      </div>
      <div class="footer">
        <vha-tabs></vha-tabs>
      </div>
    </div>
    
    <!-- <i class="fa fa-camera-retro"></i>
    
    <div class="">
      hello world 大苏打三大阿迪王啊是大慰安妇二分啊是大的
    </div>
    
    <div class="_buttonB">
      hello world 大苏打三大阿迪王啊是大慰安妇二分啊是大的
    </div> -->
    
<!--     组件 API 实例(特效 效果) 关于 -->
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'App',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      exit: false,
      timeid: 0
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
    onBackButton: function () {
      this.$vha.toast.showShortBottom("再点击一次退出!")
        
      clearTimeout(this.timeid)
      this.timeid = setTimeout(() => {
        this.exit = false
      }, 2000)
      
      if (this.exit) {
        this.$vha.app.exitApp()
      } else {
        this.exit = true
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
    document.addEventListener('deviceready', () => {
      document.addEventListener("backbutton", this.onBackButton, false)
    }, false)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
    document.removeEventListener("backbutton", this.onBackButton, false) //返回键
  },
  destroyed() {
    //销毁后
  }
}
</script>