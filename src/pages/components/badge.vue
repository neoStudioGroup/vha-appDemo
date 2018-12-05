<style lang="stylus">
.components_PG-badge
  .vha_UI-badge
    margin-right rpx(10)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-badge">
    <vha-scrollview>
      
      <p class="_UI-title">类型 type：点 / 正常</p>
      
      <div class="_UI-showBox">
        <vha-badge type="dot" :value="123"></vha-badge>
        <div class="_ph-4x"></div>
        <vha-badge :value="321"></vha-badge>
      </div>

      <p class="_UI-title">颜色 color：信息 & 基本</p>
      
      <div class="_UI-showBox">
        <vha-badge :value="89" color="success"></vha-badge>
        <vha-badge :value="89" color="info"></vha-badge>
        <vha-badge :value="89" color="warning"></vha-badge>
        <vha-badge :value="89" color="error"></vha-badge>
        
        <vha-badge :value="89" color="dark"></vha-badge>
        <vha-badge :value="89" color="calm"></vha-badge>
        <vha-badge :value="89" color="stable"></vha-badge>
        <vha-badge :value="89" color="light"></vha-badge>
      </div>
      
      <p class="_UI-title">最大 max：</p>
      
      <div class="_UI-showBox">
        <vha-badge :value="99999" :max="999"></vha-badge>
        <vha-badge :value="99999" :max="99" tag="+"></vha-badge>
      </div>
      
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGbadge',
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