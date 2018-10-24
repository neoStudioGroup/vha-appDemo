<style lang="stylus">
.components_PG-Button
  .ui-s-content
    background-color #f5f5f5
  .ui-b-button
    padding rpx(40) rpx(60)
    background-color #fff
    .vha_UI-button
      margin-right rpx(10)
      
  .ui-b-diyButtonA
    color #fff !important
    background-color #886aea !important
    &:active
      background-color #6b46e5 !important
      
  .ui-b-diyButtonB
    width rpx(220)
    border-style dashed !important
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-scrollview class="components_PG-Button">
    
    <p class="_UI-note">类型type - 无 / 基本 / 正常 / 外框 / 效果-扩散</p>

    <div class="ui-b-button">
      <vha-button type="none">
        <span>none</span>
      </vha-button>
      <vha-button type="base">
        <span>base</span>
      </vha-button>
      <vha-button>
        <span>normal</span>
      </vha-button>
      <vha-button type="outline">
        <span>outline</span>
      </vha-button>
      <vha-button color="Success" effect="boom">
        <span>Success</span>
      </vha-button>
    </div>
    
    <p class="_UI-note">尺寸size - 小 / 正常 / 大 / 全宽 / 撑满(父)</p>

    <div class="ui-b-button">
      <vha-button color="Success" size="small">
        <span>small</span>
      </vha-button>
      <vha-button color="Info" size="normal">
        <span>normal</span>
      </vha-button>
      <vha-button color="Warning" size="large">
        <span>large</span>
      </vha-button>
      <div class="_framebox"></div>
      <vha-button color="Error" size="fullWidth">
        <span class="_fm0a">fullWidth</span>
      </vha-button>
      <div class="_framebox"></div>
      <div style="width:100px;height:70px">
        <vha-button color="Dark" size="full">
          <span class="_fma">full</span>
        </vha-button>
      </div>
    </div>
  
    <p class="_UI-note">颜色color - 信息 & 基本</p>

    <div class="ui-b-button">
      <div>
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
      <div class="_framebox"></div>
      <div>
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
    </div>
    
    <p class="_UI-note">图标icon</p>
    
    <div class="ui-b-button _df">
      <vha-button icon="fa fa-link">
        <span>链接</span>
      </vha-button>
      <vha-button icon="fa fa-spinner fa-pulse" disabled>
        <span>Loading..</span>
      </vha-button>
      <vha-button type="base" icon="fa fa-chevron-left">
        <span>返回</span>
      </vha-button>
      <vha-button type="base" icon-right="fa fa-chevron-right">
        <span>下一步</span>
      </vha-button>
    </div>
    
    <p class="_UI-note">状态status</p>
    
    <div class="ui-b-button">
      <vha-button @click="test()" disabled>
        <span>disabled</span>
      </vha-button>
    </div>    
    
    <p class="_UI-note">自定义</p>
    
    <div class="ui-b-button _df">
      <vha-button class="ui-b-diyButtonA">
        <span>diyA</span>
      </vha-button>
      <vha-button type="outline" color="Info" class="ui-b-diyButtonB">
        <img src="../../assets/images/logo.png" height="20" width="20">
        <span class="_ownRowHide">diyBBBBBBBBBBBB</span>
      </vha-button>
    </div>    
    
  </vha-scrollview>
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
    test: function () {
      console.log('test button disabled')
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