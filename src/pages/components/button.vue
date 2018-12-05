<style lang="stylus">
.components_PG-button
  ._UI-showBox
    >.vha_UI-button
      margin-right rpx(10)
      
  .ui-b-diyButtonA
    color #fff !important
    background-color #886aea !important
    &:active
      background-color red !important
      
  .ui-b-diyButtonB
    width rpx(220)
    border-style dashed !important
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page>
    <vha-scrollview class="components_PG-button">
      
      <p class="_UI-title">类型样式 type：无 / 基本 / 正常 / 外框 / 效果-扩散</p>

      <div class="_UI-showBox">
        <vha-button type="none" size="none">
          none
        </vha-button>
        <vha-button type="base" size="none">
          base
        </vha-button>
        <vha-button>
          normal
        </vha-button>
        <vha-button type="outline">
          outline
        </vha-button>
        <vha-button color="success" effect="spread">
          Success
        </vha-button>
      </div>
      <p class="_UI-title">尺寸 size：小 / 正常 / 大 / 全宽 / 撑满(父)</p>

      <div class="_UI-showBox">
        <vha-button color="success" size="small">
          small
        </vha-button>
        <vha-button color="info" size="normal">
          normal
        </vha-button>
        <vha-button color="warning" size="large">
          large
        </vha-button>
        <div class="_ph"></div>
        <vha-button color="error" size="fullWidth">
          fullWidth
        </vha-button>
        <div class="_ph"></div>
        <div style="width:100px;height:70px">
          <vha-button color="dark" size="full">
            full
          </vha-button>
        </div>
      </div>
    
      <p class="_UI-title">颜色 color：信息 & 基本</p>

      <div class="_UI-showBox">
        <vha-button color="success">
          Success
        </vha-button>
        <vha-button color="info">
          Info
        </vha-button>
        <vha-button color="warning">
          Warning
        </vha-button>
        <vha-button color="error">
          Error
        </vha-button>
        <div class="_ph"></div>
        <vha-button color="dark">
          Dark
        </vha-button>
        <vha-button color="calm">
          Calm
        </vha-button>
        <vha-button color="stable">
          Stable
        </vha-button>
        <vha-button color="light">
          Light
        </vha-button>
        
        <div class="_ph"></div>
        
        <vha-button type="base" color="success">
          Success
        </vha-button>
        <vha-button type="base" color="info">
          Info
        </vha-button>
        <vha-button type="base" color="warning">
          Warning
        </vha-button>
        <vha-button type="base" color="error">
          Error
        </vha-button>
        <div class="_ph"></div>
        <vha-button type="base" color="dark">
          Dark
        </vha-button>
        <vha-button type="base" color="calm">
          Calm
        </vha-button>
        <vha-button type="base" color="stable">
          Stable
        </vha-button>
        <vha-button type="base" color="light">
          Light
        </vha-button>
      </div>
      
      <p class="_UI-title">图标 icon：</p>
      
      <div class="_UI-showBox">
        <vha-button icon="fa fa-link">
          链接
        </vha-button>
        <vha-button icon="fa fa-spinner fa-pulse" disabled>
          Loading..
        </vha-button>
        <vha-button type="base" size="none" icon="fa fa-chevron-left">
          返回
        </vha-button>
        <vha-button type="base" size="none" icon-right="fa fa-chevron-right">
          下一步
        </vha-button>
        <div class="_ph"></div>
        <div style="width:100px;height:70px;border:1px solid #ccc;font-size:0">
          <vha-button type="base" size="full">
            <vha-view axis="y" justify="center">
              <i class="fa fa-home"></i>
              <span>主页</span>
            </vha-view>
          </vha-button>
        </div>
      </div>
      
      <p class="_UI-title">状态 state：禁止(disabled)</p>
      
      <div class="_UI-showBox">
        <vha-button @click="test()" disabled>
          disabled
        </vha-button>
        <vha-button color="success" disabled>
          Success
        </vha-button>
        <vha-button color="info" disabled>
          Info
        </vha-button>
        <vha-button color="warning" disabled>
          Warning
        </vha-button>
      </div>
      
      <p class="_UI-title">自定义 ：</p>
      
      <div class="_UI-showBox _df">
        <vha-button class="ui-b-diyButtonA">
          diyA
        </vha-button>
        <!-- 用view接管视图区域,自由布局 -->
        <vha-button type="outline" color="info" class="ui-b-diyButtonB">
          <vha-view align="center">
            <img src="../../assets/images/logo.png" height="20" width="20">
            <span class="_oneEllipsis">diyBBBBBBBBBBBB</span>
          </vha-view>
        </vha-button>
      </div>
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGbutton',
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
      window.console.log('test button disabled')
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