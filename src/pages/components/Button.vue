<style lang="stylus">
.components_PG-Button
  padding rpx(30)
  .ui-b-button
    .vha_UI-button
      display inline-block
      margin-right rpx(10)
      margin-bottom rpx(10)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="components_PG-Button">
    <vha-scrollview class="components_PG-Button">
    
    <p class="_UI-note">模式 - 无/正常/外框</p>

    <div class="ui-b-button">
      <vha-button mode="none">
        <span>none</span>
      </vha-button>
      <vha-button mode="base">
        <span>base</span>
      </vha-button>
      <vha-button>
        <span>normal</span>
      </vha-button>
      <vha-button mode="outline">
        <span>outline</span>
      </vha-button>
    </div>
  
    <p class="_UI-note">颜色 - 信息&基本</p>

    <div class="ui-b-button">
      <vha-button color="Success">
        <span>Success</span>
      </vha-button>
      <vha-button color="Info">
        <span>Info</span>
      </vha-button>
      <vha-button color="Warning">
        <span>Warning</span>
      </vha-button>
      <vha-button color="Error">
        <span>Error</span>
      </vha-button>
    </div>
    <div class="ui-b-button">
      <vha-button color="Dark">
        <span>Dark</span>
      </vha-button>
      <vha-button color="Royal">
        <span>Royal</span>
      </vha-button>
      <vha-button color="Stable">
        <span>Stable</span>
      </vha-button>
      <vha-button color="Light">
        <span>Light</span>
      </vha-button>
    </div>
    
    <p class="_UI-note">图标</p>
    
    <div class="ui-b-button">
      <vha-button icon="fa-link">
        <span>按钮</span>
      </vha-button>
      <vha-button icon="fa-spinner fa-spin">
        <span>按钮</span>
      </vha-button>
    </div>
    
    <p class="_UI-note">状态</p>
    
    <vha-button disabled>
      <span>disabled</span>
    </vha-button>

    </vha-scrollview>

  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGButton',
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