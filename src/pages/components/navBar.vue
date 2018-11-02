<style lang="stylus">
// .components_PG-NavBar
  
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-NavBar">
    <vha-scrollview>
      <vha-navbar title="我是页内导航栏"></vha-navbar>
      
      <p class="_UI-note">类型 type：无 / 基本 / 正常</p>

      <div class="_UI-showBox">
        <vha-navbar title="none" type="none"></vha-navbar>
        <div class="_framebox-4x"></div>
        <vha-navbar title="base" type="base"></vha-navbar>
        <div class="_framebox-4x"></div>
        <vha-navbar title="normal"></vha-navbar>
      </div>
      
      <p class="_UI-note">颜色 color：信息 & 基本</p>

      <div class="_UI-showBox">
        <vha-navbar title="success" color="success"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="info" color="info"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="warning" color="warning"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="error" color="error"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="dark" color="dark"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="royal" color="royal"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="stable" color="stable"></vha-navbar>
        <div class="_framebox-2x"></div>
        <vha-navbar title="light" color="light"></vha-navbar>
      </div>
      
      <p class="_UI-note">自定义 ：</p>
      
      <div class="_UI-showBox">
        <vha-navbar>
          替换全部内容
        </vha-navbar>
        <div class="_framebox-4x"></div>
        <vha-navbar>
          <span slot="leftBox">
            替换左边内容
          </span>
          <span slot="titleBox">
            替换中间内容
          </span>
          <span slot="rightBox">
            替换右边内容
          </span>
        </vha-navbar>
        <div class="_framebox-4x"></div>
        <vha-navbar>
          <vha-button slot="leftBox" icon="fa fa-bars fa-2x" size="full">
          </vha-button>
          <vha-button slot="titleBox" type="base" color="light" size="full">
            <vha-view class="_aic _jcc">
              <img src="../../assets/images/logo.png" height="20" width="20">
              <span class="_ownRowHide">自定义内容</span>
            </vha-view>
          </vha-button>
          <vha-button slot="rightBox" size="full">
            <span>Edit</span>
          </vha-button>
        </vha-navbar>
      </div>
      
      <p class="_UI-note"></p>
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGNavBar',
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