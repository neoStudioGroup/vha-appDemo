<style lang="stylus">
.components_PG-checkbox
  ._UI-showBox
    .vha_UI-checkbox
      margin-right rpx(10)
  
  .p_UI-mycheckbox
    .vha_UI-checkbox
      margin-right 0
    img
      width rpx(160)
      height rpx(160)
      
  .p_UI-list
    li
      height rpx(100)
      border-bottom-line(1px solid #ddd)
      >label
        width 100%
        height 100%
    .action-unSelect
      display none
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-checkbox">
    <vha-scrollview>
      
      <p class="_UI-title">演示 show：自定义图标文本 / 自定义内容 / 列表样式</p>
      
      <div class="_UI-showBox">
        <vha-checkbox checked></vha-checkbox>
        
        <div class="_ph-6x"></div>
        
        <vha-checkbox value="a" checked>
          <vha-view slot="slotSelectContent" class="_aic">
            <i class="fa fa-circle fa-2x" style="color:#a941f8;margin-right:3px"></i>
            选中
          </vha-view>
          <vha-view slot="slotUnselectContent" class="_aic">
            <i class="fa fa-circle-o fa-2x" style="color:#bbb;margin-right:3px"></i>
            未选中
          </vha-view>
        </vha-checkbox>
        
        <div class="_ph-6x"></div>
        
        <div class="p_UI-mycheckbox">
          <vha-checkbox value="a" v-model="currentValue" checked>
            <img slot="slotSelectContent" src="../../assets/images/bq1.jpg">
            <img slot="slotUnselectContent" src="../../assets/images/bq2.jpg">
          </vha-checkbox>
          <vha-checkbox value="b" v-model="currentValue">
            <img slot="slotSelectContent" src="../../assets/images/bq1.jpg">
            <img slot="slotUnselectContent" src="../../assets/images/bq2.jpg">
          </vha-checkbox>
          <vha-checkbox value="c" v-model="currentValue">
            <img slot="slotSelectContent" src="../../assets/images/bq1.jpg">
            <img slot="slotUnselectContent" src="../../assets/images/bq2.jpg">
          </vha-checkbox>
        </div>
        
        <div class="_ph-4x"></div>
        
        <p>Choose: {{currentValue}}</p>
        
        <div class="_ph-4x"></div>
        
        <ul class="p_UI-list">
          <li>
            <label class="_df _aic">
              item 1
              <vha-checkbox class="_fmla" v-model="list" value="aaa" icon="vha_icon-checkboxB"></vha-checkbox>
            </label>
          </li>
          <li>
            <label class="_df _aic">
              item 2
              <vha-checkbox class="_fmla" v-model="list" value="bbb" icon="vha_icon-checkboxB"></vha-checkbox>
            </label>
          </li>
          <li>
            <label class="_df _aic">
              item 2
              <vha-checkbox class="_fmla" v-model="list" value="ccc" icon="vha_icon-checkboxB" checked></vha-checkbox>
            </label>
          </li>
          <li>
            <label class="_df _aic">
              item 2
              <vha-checkbox class="_fmla" v-model="list" value="ddd" icon="vha_icon-checkboxB"></vha-checkbox>
            </label>
          </li>
        </ul>
        
        <div class="_ph-4x"></div>
        
        <p>Choose: {{list}}</p>
        
        <div class="_ph-4x"></div>
        
      </div>
      
      <p class="_UI-title">颜色 color：信息 & 基本</p>
      
      <div class="_UI-showBox">
        <vha-checkbox value="a" color="success" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" color="warning" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" color="error" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" color="dark" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" color="calm" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" color="stable" checked></vha-checkbox>
        <div class="_ph"></div>
        <vha-checkbox value="a" color="light" checked></vha-checkbox>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGcheckbox',
  data() {
    //动态数据
    return {
      currentValue: [],
      list: ['aaa']
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