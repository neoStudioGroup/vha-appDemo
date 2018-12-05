<style lang="stylus">
.components_PG-radio
  ._UI-showBox
    .vha_UI-radio
      margin-right rpx(10)
  
  .p_UI-myradio
    .vha_UI-radio
      margin-right 0
    img
      width rpx(160)
      height rpx(160)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-radio">
    <vha-scrollview>
      
      <p class="_UI-title">演示 show：正常 / 正常+文本 / 自定义图标文本 / 自定义内容</p>
      
      <div class="_UI-showBox">
        
        <vha-radio id="firstradio" name="radioA" value="a"></vha-radio>
        <vha-radio name="radioA" value="b" checked></vha-radio>
        
        <div class="_ph-4x"></div>
        
        <label for="firstradio">外部的联动选择</label>
        
        <div class="_ph-4x"></div>
        
        <vha-radio name="radioA2" value="a" text="男" color="error" checked></vha-radio>
        <vha-radio name="radioA2" value="b" text="女" color="error"></vha-radio>
        
        <div class="_ph-4x"></div>

        <vha-radio name="radioA3" value="a" checked>
          <vha-view slot="slotSelectContent" class="_aic">
            <i class="fa fa-circle fa-2x" style="color:#a941f8;margin-right:3px"></i>
            选中
          </vha-view>
          <vha-view slot="slotUnselectContent" class="_aic">
            <i class="fa fa-circle-o fa-2x" style="color:#bbb;margin-right:3px"></i>
            未选中
          </vha-view>
        </vha-radio>
        <vha-radio name="radioA3" value="b">
          <vha-view slot="slotSelectContent" class="_aic">
            <i class="fa fa-circle fa-2x" style="color:#a941f8;margin-right:3px"></i>
            选中
          </vha-view>
          <vha-view slot="slotUnselectContent" class="_aic">
            <i class="fa fa-circle-o fa-2x" style="color:#bbb;margin-right:3px"></i>
            未选中
          </vha-view>
        </vha-radio>
        
        <div class="_ph-6x"></div>
        
        <div class="p_UI-myradio">
          <vha-radio name="radioA4" value="a" checked @change="onChange">
            <img slot="slotSelectContent" src="../../assets/images/bq1.jpg">
            <img slot="slotUnselectContent" src="../../assets/images/bq2.jpg">
          </vha-radio>
          <vha-radio name="radioA4" value="b" @change="onChange">
            <img slot="slotSelectContent" src="../../assets/images/bq1.jpg">
            <img slot="slotUnselectContent" src="../../assets/images/bq2.jpg">
          </vha-radio>
          <vha-radio name="radioA4" value="c" @change="onChange">
            <img slot="slotSelectContent" src="../../assets/images/bq1.jpg">
            <img slot="slotUnselectContent" src="../../assets/images/bq2.jpg">
          </vha-radio>
        </div>
        
        <div class="_ph-4x"></div>
        
        <p>Choose: {{currentValue}}</p>
        
      </div>
      
      <p class="_UI-title">颜色 color：信息 & 基本</p>
      
      <div class="_UI-showBox">
        <vha-radio name="radioAA" value="a" color="success" checked></vha-radio>
        <vha-radio name="radioAA" value="b" color="success"></vha-radio>
        
        <div class="_ph"></div>
        
        <vha-radio name="radioBB" value="a" checked></vha-radio>
        <vha-radio name="radioBB" value="b"></vha-radio>
        
        <div class="_ph"></div>
        
        <vha-radio name="radioCC" value="a" color="warning" checked></vha-radio>
        <vha-radio name="radioCC" value="b" color="warning"></vha-radio>
        
        <div class="_ph"></div>
        
        <vha-radio name="radioDD" value="a" color="error" checked></vha-radio>
        <vha-radio name="radioDD" value="b" color="error"></vha-radio>
        
        <div class="_ph"></div>
        
        
        <vha-radio name="radioEE" value="a" color="dark" checked></vha-radio>
        <vha-radio name="radioEE" value="b" color="dark"></vha-radio>
        <div class="_ph"></div>
        
        <vha-radio name="radioFF" value="a" color="calm" checked></vha-radio>
        <vha-radio name="radioFF" value="b" color="calm"></vha-radio>
        
        <div class="_ph"></div>
        
        <vha-radio name="radioGG" value="a" color="stable" checked></vha-radio>
        <vha-radio name="radioGG" value="b" color="stable"></vha-radio>
        
        <div class="_ph"></div>
        
        <vha-radio name="radioHH" value="a" color="light" checked></vha-radio>
        <vha-radio name="radioHH" value="b" color="light"></vha-radio>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGradio',
  data() {
    //动态数据
    return {
      currentValue: 'a'
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    onChange: function (event) {
      this.currentValue = event.target.value
      console.log(this.currentValue, event.target.checked)
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