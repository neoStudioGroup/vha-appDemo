<style lang="stylus">
.components_PG-switch
  ._UI-showBox
    .vha_UI-switch
      margin-right rpx(20)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-switch">
    <vha-scrollview>
      
      <p class="_UI-title">类型 type：正常 / 组</p>
      
      <div class="_UI-showBox">
        
        <vha-switch value="a" checked @change="onChange"></vha-switch>
        
        <div class="_ph-6x"></div>
        
        <vha-switch value="a" v-model="currentValue" checked></vha-switch>
        <vha-switch value="b" v-model="currentValue"></vha-switch>
        <vha-switch value="c" v-model="currentValue"></vha-switch>
        
        <div class="_ph-4x"></div>
        
        <p>Choose: {{currentValue}}</p>
        
      </div>
      
      <p class="_UI-title">颜色 color：信息 & 基本</p>
      
      <div class="_UI-showBox">
        <vha-switch value="a" color="success" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" color="warning" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" color="error" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" color="dark" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" color="calm" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" color="stable" checked></vha-switch>
        <div class="_ph"></div>
        <vha-switch value="a" color="light" checked></vha-switch>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGswitch',
  data() {
    //动态数据
    return {
      currentValue: [],
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    onChange: function (event) {
      console.log(event)
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