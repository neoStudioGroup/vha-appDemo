<style lang="stylus">
.components_PG-Button
  ._UI-showBox
    >.vha_UI-button
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
  <vha-page>
    <vha-scrollview class="components_PG-Button">
      
      <p class="_UI-note">类型样式 type：无 / 基本 / 正常 / 外框 / 效果-扩散</p>

      <div class="_UI-showBox">
        <vha-button type="none" size="none">
          <span>none</span>
        </vha-button>
        <vha-button type="base" size="none">
          <span>base</span>
        </vha-button>
        <vha-button>
          <span>normal</span>
        </vha-button>
        <vha-button type="outline">
          <span>outline</span>
        </vha-button>
        <vha-button color="success" effect="spread">
          <span>Success</span>
        </vha-button>
      </div>
      
      <p class="_UI-note">尺寸 size：小 / 正常 / 大 / 全宽 / 撑满(父)</p>

      <div class="_UI-showBox">
        <vha-button color="success" size="small">
          <span>small</span>
        </vha-button>
        <vha-button color="info" size="normal">
          <span>normal</span>
        </vha-button>
        <vha-button color="warning" size="large">
          <span>large</span>
        </vha-button>
        <div class="_framebox"></div>
        <vha-button color="error" size="fullWidth">
          <span>fullWidth</span>
        </vha-button>
        <div class="_framebox"></div>
        <div style="width:100px;height:70px">
          <vha-button color="dark" size="full">
            <span>full</span>
          </vha-button>
        </div>
      </div>
    
      <p class="_UI-note">颜色 color：信息 & 基本</p>

      <div class="_UI-showBox">
        <vha-button color="success">
          <span>Success</span>
        </vha-button>
        <vha-button color="info">
          <span>Info</span>
        </vha-button>
        <vha-button color="warning">
          <span>Warning</span>
        </vha-button>
        <vha-button color="error">
          <span>Error</span>
        </vha-button>
        <div class="_framebox"></div>
        <vha-button color="dark">
          <span>Dark</span>
        </vha-button>
        <vha-button color="royal">
          <span>Royal</span>
        </vha-button>
        <vha-button color="stable">
          <span>Stable</span>
        </vha-button>
        <vha-button color="light">
          <span>Light</span>
        </vha-button>
      </div>
      
      <p class="_UI-note">图标 icon：</p>
      
      <div class="_UI-showBox">
        <vha-button icon="fa fa-link">
          <span>链接</span>
        </vha-button>
        <vha-button icon="fa fa-spinner fa-pulse" disabled>
          <span>Loading..</span>
        </vha-button>
        <vha-button type="base" size="none" icon="fa fa-chevron-left">
          <span>返回</span>
        </vha-button>
        <vha-button type="base" size="none" icon-right="fa fa-chevron-right">
          <span>下一步</span>
        </vha-button>
        <div class="_framebox"></div>
        <div style="width:100px;height:70px;border:1px solid #ccc;font-size:0">
          <vha-button type="base" size="full">
            <vha-view class="_jcc" direction="vertical">
              <i class="fa fa-home"></i>
              <span>主页</span>
            </vha-view>
          </vha-button>
        </div>
      </div>
      
      <p class="_UI-note">状态 status：</p>
      
      <div class="_UI-showBox">
        <vha-button @click="test()" disabled>
          <span>disabled</span>
        </vha-button>
      </div>
      
      <p class="_UI-note">自定义 ：</p>
      
      <div class="_UI-showBox _df">
        <vha-button class="ui-b-diyButtonA">
          <span>diyA</span>
        </vha-button>
        <!-- 用view接管视图区域,自由设置内容与对齐方式 -->
        <vha-button type="outline" color="info" class="ui-b-diyButtonB">
          <vha-view class="_aic">
            <img src="../../assets/images/logo.png" height="20" width="20">
            <span class="_ownRowHide">diyBBBBBBBBBBBB</span>
          </vha-view>
        </vha-button>
      </div>
      
      <p class="_UI-note"></p>
      
    </vha-scrollview>
  </vha-page>
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