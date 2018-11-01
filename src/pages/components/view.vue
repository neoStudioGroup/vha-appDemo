<style lang="stylus">
// .components_PG-view
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-view">
    <vha-scrollview>
      
      <p class="_UI-note _cl-444">vha-view是css3盒子模型的抽象组件，你可以使用它展示一切内容，代替网格、宫格等组件。你也完全可以使用css3盒子代替它，下面是css3盒子常见用法展示。</p>
      
      <p class="_UI-note">类型type：无 / 基本 / 正常 / 外框 / 效果-扩散</p>

      <div class="_UI-showBox">
        <div class="_framebox"></div>
        <div class="_framebox-20"></div>
        <div class="_framebox-40"></div>
        <div class="_framebox-80"></div>
      </div>
      
      <p class="_UI-note">风格style：1 / 2 / 3 / 4 / 5</p>

      <div class="_UI-showBox">
      </div>
      
      <p class="_UI-note">颜色color：信息 & 基本</p>

      <div class="_UI-showBox">
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
        <div class="_framebox-80"></div>
      </div>
      
      <p class="_UI-note"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGview',
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