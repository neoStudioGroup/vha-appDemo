<style lang="stylus">
.components_PG-slider
  ._UI-showBox
    .vha_UI-subview
      padding rpx(10)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-slider">
    <vha-scrollview>
      
      <p class="_UI-title">类型 type：</p>
      
      <div class="_UI-showBox">
        <vha-view >
          <vha-subview class="_df _fdr _aic">
            <i class="fa fa-volume-off fa-2x"></i>
          </vha-subview>
          <vha-subview full="width">
            <vha-slider v-model="currentValue"></vha-slider>
          </vha-subview>
          <vha-subview class="_df _fdr _aic">
            <i class="fa fa-volume-up fa-2x"></i>
          </vha-subview>
        </vha-view>
        
        <div class="_ph-4x"></div>
        
        <p>Value: {{currentValue}}</p>
        
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGslider',
  data() {
    //动态数据
    return {
      currentValue: 50
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