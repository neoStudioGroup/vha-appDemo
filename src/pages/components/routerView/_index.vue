<style lang="stylus">
// .componentsrouterView_PG-index
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-routerView">
    <div class="_UI-showBox">
      <div class="_framebox-20"></div>
      <vha-button class="_db" v-vhaRouter="{push:'routerView/routerViewTest', animate: 'none'}">无动画进入</vha-button>
      <div class="_framebox-20"></div>
      <vha-button class="_db" v-vhaRouter="{push:'routerView/routerViewTest'}">in动画进入</vha-button>
      <div class="_framebox-20"></div>
      <vha-button class="_db" v-vhaRouter="{push:'routerView/routerViewTest', animate: 'out'}">out动画进入</vha-button>
      <div class="_framebox-80"></div>
      <vha-button class="_db" v-vhaRouter="{push:'routerView/routerViewTest', keepAlive: false}">从我进入不缓存</vha-button>
      <div class="_framebox-20"></div>
      <vha-button class="_db" v-vhaRouter="{push:'routerView/routerViewTest', keepAlive: true}">从我进入缓存</vha-button>
    </div>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsrouterViewPGindex',
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