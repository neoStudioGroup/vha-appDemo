<style lang="stylus">
.components_PG-index
  .vha_UI-list
    span 
      margin-left rpx(10)
      font-size rpx(26)
      color #aaa
    .ui-item-i
      font-size rpx(44)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-index">
    <vha-scrollview>
      
      <div class="_ph-6x"></div>
      <div class="_UI-logo _df _fdc _aic">
        <img src="../../assets/images/components.png" :style="{width:vha_rpx(220)}">
      </div>
      <div class="_ph-6x"></div>
      
      <vha-list title="基础 Base">
        <vha-list-item v-vhaRouter="{push:'components/routerView'}" icon="fa fa-window-maximize">
          路由视图 <span>Router View</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/scrollView'}" icon="fa fa-square">
          滚动视图 <span>Scroll View</span>
        </vha-list-item>
        <!-- 选择器 -->
        <!-- <vha-list-item v-vhaRouter="{push:'components/style'}" icon="fa fa-text-height">
          风格 <span>style</span>
        </vha-list-item> -->
        <vha-list-item v-vhaRouter="{push:'components/view'}" icon="fa fa-square-o">
          视图区域 <span>View</span>
        </vha-list-item>
        <!-- <vha-list-item v-vhaRouter="{push:'components/queueAnim'}" icon="fa fa-indent">
          进出场动画 <span>Queue Anim</span>
        </vha-list-item> -->
        <vha-list-item v-vhaRouter="{push:'components/navBar'}" icon="fa fa-minus">
          导航栏 <span>Nav Bar</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/tabBar'}" icon="fa fa-ellipsis-h">
          标签栏 <span>Tab Bar</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/popup'}" icon="fa fa-sticky-note">
          弹出层 <span>Popup</span>
        </vha-list-item>
      </vha-list>
      
      <div class="_ph-6x"></div>
      
      <vha-list title="表单 Forms">
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-square">
          按钮 <span>Button</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/buttonGroup'}" icon="fa fa-th-large">
          按钮组 <span>Button Group</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/input'}" icon="fa fa-i-cursor">
          输入框 <span>Input</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/radio'}" icon="fa fa-check-circle">
          单选框 <span>Radio</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/checkbox'}" icon="fa fa-check-square">
          多选框 <span>Checkbox</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/switch'}" icon="fa fa-toggle-on">
          开关 <span>Switch</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/slider'}" icon="fa fa-circle">
          滑块 <span>Slider</span>
        </vha-list-item>
      </vha-list>
      
      <div class="_ph-6x"></div>
      
      <vha-list title="扩展 Expansion">
        <vha-list-item v-vhaRouter="{push:'components/swipe'}" icon="fa fa-columns">
          轮播 <span>Swipe</span>
        </vha-list-item>
        <!-- 滚动公告 / 配合按钮组的选项卡 / 启动画面 / 图片预览 -->
        <vha-list-item v-vhaRouter="{push:'components/badge'}" icon="fa fa-money">
          角标 <span>Badge</span>
        </vha-list-item>
        <!-- <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-credit-card">
          卡片 <span>Card</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-th-list">
          列表 <span>List</span>
        </vha-list-item> -->
        <!-- 返回点击ID -->
        <vha-list-item v-vhaRouter="{push:'components/dialog'}" icon="fa fa-window-restore">
          对话框 <span>Dialog</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/actionSheet'}" icon="fa fa-align-justify">
          上拉菜单 <span>Action sheet</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/toast'}" icon="fa fa-flickr">
          信息提示 <span>Toast</span>
        </vha-list-item>
        <!-- <vha-list-item v-vhaRouter="{push:'components/popover'}" icon="fa fa-comment">
          弹出气泡 <span>Popover</span>
        </vha-list-item> -->
        
        
        
        
        
        
        <!-- <vha-list-item v-vhaRouter="{push:'components/accordion'}" icon="fa fa-chevron-down">
          折叠区域 <span>Accordion</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          瀑布流 <span>Water fall</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          分页 <span>Pagination</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          进度条 <span>Progress</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          进度环 <span>Circle</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          步骤条 <span>Steps</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          倒计时 <span>Count down</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          短信验证 <span>Sms</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          索引选择器 <span>index list</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          级联选择器 <span>Cascader</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'components/button'}" icon="fa fa-stop">
          日历选择器 <span>Calendar picker</span>
        </vha-list-item> -->
      </vha-list>
      
      <div class="_ph-6x"></div>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGindex',
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