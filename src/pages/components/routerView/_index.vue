<style lang="stylus">
// .comp_PG-index
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="comp_PG-index">
    
    <p class="_UI-title">v-vhaRouter：路由动画方式</p>
    
    <div class="_UI-showBox">
      <vha-button v-vhaRouter="{push:'routerView/routerViewTest', animate: 'none'}">无动画进入</vha-button>
      <div class="_ph-2x"></div>
      <vha-button v-vhaRouter="{push:'routerView/routerViewTest'}">in动画进入</vha-button>
      <div class="_ph-2x"></div>
      <vha-button v-vhaRouter="{push:'routerView/routerViewTest', animate: 'out'}">out动画进入</vha-button>
      <div class="_ph-2x"></div>
      <!-- <vha-button v-vhaRouter="{push:'routerView/routerViewTest', animate: 'myAnimatein'}">自定义动画进入</vha-button> -->
      <vha-button @click="$vhaRouter.push({value:'routerView/routerViewTest', animate: 'myAnimatein'})">自定义动画进入</vha-button>
      <!-- <a v-vhaRouter="{push: {path: '/about', query: { plan: 'private' }}, animate:'none'}">关于</a> -->
    </div>
    
    <p class="_UI-title">keepAlive：动态路由缓存</p>
    
    <div class="_UI-showBox">
      <vha-button v-vhaRouter="{push:'routerView/routerViewTest', keepAlive: false}">从我进入不缓存</vha-button>
      <div class="_ph-2x"></div>
      <vha-button v-vhaRouter="{push:'routerView/routerViewTest', keepAlive: true}">从我进入缓存</vha-button>
    </div>
    
    <p class="_UI-title"></p>
    <p class="_UI-title"></p>
    <p class="_UI-title"></p>
    
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'compPGindex',
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