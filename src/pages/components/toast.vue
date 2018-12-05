<style lang="stylus">
// .components_PG-toast
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-toast">
    <vha-scrollview>
      
      <div class="_UI-showBox">
        <vha-button @click="$vhaToast({pos:'top'}).show('顶部文字提示')">顶部文字提示</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="$vhaToast().show('中间文字提示')">中间文字提示</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="$vhaToast({pos:'bottom'}).show('底部文字提示')">底部文字提示</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="$vhaToast({icon: 'fa fa-spinner fa-pulse'}).show('loading..')">加载提示</vha-button>
        <div class="_ph-2x"></div>
        <vha-button @click="myToast">自定义图标与文字</vha-button>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGtoast',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    myToast: function () {
      let cb = () => {
        console.log('toast结束')
      }
      
      let _toast = this.$vhaToast({
        icon: 'fa fa-refresh fa-spin', 
        callback: cb,
        duration: 50000
      })
      
      _toast.show('刷新中..')
      
      setTimeout(() => {
        _toast.hide()
      }, 2000)
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>