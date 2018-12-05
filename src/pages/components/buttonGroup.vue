<style lang="stylus">
.components_PG-buttonGroup
  .vha_UI-buttongroup
    >.state-action
      color #4A90E2
  
  .myColor
    .vha_UI-button
      color #EA5A49 !important
      border-color #EA5A49 !important
    .vha_UI-button.action-ios
      color #fff !important
      background-color #EA5A49 !important
  
  .myStyle
    .vha_UI-button
      padding rpx(20)
      flex 1
      height auto
      border-radius 0
      border 1px solid #0ea720
      color #0ea720
      background-color transparent
      transition all 400ms
      &:first-child
        border-radius rpx(60) 0 0 rpx(60)
        border-right 0
      &:last-child
        border-radius 0 rpx(60) rpx(60) 0
        border-left 0
    .vha_UI-button.action-myStyle
      color #fff
      background-color #0ea720
      
      
  .myStyleB
    position relative
    .ui-m-block
      position absolute
      transform translateX(0px)
      width 20px
      height rpx(4)
      background-color #EA5A49
      transition all 250ms
    .vha_UI-button
      padding rpx(30) rpx(20)
      height auto
      border-radius 0
      color #666
      border-bottom 2px solid transparent
      background-color transparent
      transition all 200ms
      &:active
        background-color transparent
    .vha_UI-button.action-myStyleB
      color #EA5A49
      
      
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-buttonGroup">
    <vha-scrollview>
      
      <p class="_UI-title">类型 type：无 / 基本 / 多个选择</p>
      
      <div class="_UI-showBox">
        <vha-buttongroup @click="group_button" selectClass="_cl-error">
          <vha-button type="none" size="none">
            按钮1
          </vha-button>
          <vha-button type="none" size="none" groupNote="第二个">
            按钮2
          </vha-button>
          <vha-button type="none" size="none" groupNote="第三个">
            按钮3
          </vha-button>
        </vha-buttongroup>
        
        <div class="_ph-2x"></div>
        
        <vha-buttongroup @click="group_button" selectClass="color-info" v-model="selectDefault">
          <vha-button type="base">
            按钮1
          </vha-button>
          <vha-button type="base" groupNote="第二个">
            按钮2
          </vha-button>
          <vha-button type="base" groupNote="第三个">
            按钮3
          </vha-button>
        </vha-buttongroup>
        
        <vha-buttongroup @click="group_button" selectMode="multiple" selectClass="color-info" v-model="buttongroupData">
          <vha-button type="base">
            按钮1
          </vha-button>
          <vha-button type="base" groupNote="第二个">
            按钮2
          </vha-button>
          <vha-button type="base" groupNote="第三个">
            按钮3
          </vha-button>
        </vha-buttongroup>
        
        <p>{{buttongroupData}}</p>
      </div>

      <p class="_UI-title">风格 style：ios / ios禁用 / ios颜色 / topline / bottomline</p>

      <div class="_UI-showBox">
        <vha-buttongroup groupStyle="ios" @click="group_button" v-model="selectDefault">
          <vha-button>
            item 1
          </vha-button>
          <vha-button>
            item 2
          </vha-button>
          <vha-button>
            item 3
          </vha-button>
        </vha-buttongroup>
        
        <div class="_ph-2x"></div>
        
        <vha-buttongroup groupStyle="ios" @click="group_button">
          <vha-button disabled>
            item 1
          </vha-button>
          <vha-button disabled>
            item 2
          </vha-button>
          <vha-button disabled>
            item 3
          </vha-button>
        </vha-buttongroup>
        
        <div class="_ph-2x"></div>
        
        <vha-buttongroup class="myColor" groupStyle="ios" @click="group_button">
          <vha-button>
            item 1
          </vha-button>
          <vha-button>
            item 2
          </vha-button>
        </vha-buttongroup>
        
        <div class="_ph-4x"></div>
        
        <vha-buttongroup groupStyle="topline" @click="group_button" v-model="selectDefault">
          <vha-button>
            item 1
          </vha-button>
          <vha-button>
            item 2
          </vha-button>
          <vha-button>
            item 3
          </vha-button>
        </vha-buttongroup>
        
        <div class="_ph-4x"></div>
        
        <vha-buttongroup groupStyle="bottomline" @click="group_button">
          <vha-button>
            item 1
          </vha-button>
          <vha-button>
            item 2
          </vha-button>
          <vha-button>
            item 3
          </vha-button>
        </vha-buttongroup>
      </div>
      
      <p class="_UI-title">自定义 ：仅图标 / 样式和颜色 / 动态滑块</p>
      
      <div class="_UI-showBox">
        
        <vha-buttongroup groupStyle="topline" @click="group_button">
          <vha-button icon="fa fa-home fa-2x"></vha-button>
          <vha-button icon="fa fa-commenting fa-2x"></vha-button>
          <vha-button icon="fa fa-eye fa-2x"></vha-button>
          <vha-button icon="fa fa-user fa-2x"></vha-button>
        </vha-buttongroup>
        
        <div class="_ph-2x"></div>
        
        <vha-buttongroup class="myStyle" @click="group_button" selectClass="action-myStyle">
          <vha-button type="none">
            item 1
          </vha-button>
          <vha-button type="none">
            item 2
          </vha-button>
          <vha-button type="none">
            item 3
          </vha-button>
        </vha-buttongroup>
        
        <div class="_ph-4x"></div>
        
        <vha-buttongroup class="myStyleB" ref="myStyleB" @click="group_myStyleB" selectClass="action-myStyleB">
          <div class="ui-m-block"></div>
          <vha-button type="none">
            首页
          </vha-button>
          <vha-button type="none">
            国际
          </vha-button>
          <vha-button type="none">
            新闻哥
          </vha-button>
          <vha-button type="none">
            我是最长的
          </vha-button>
        </vha-buttongroup>
        
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGbuttonGroup',
  data() {
    //动态数据
    return {
      selectDefault: [{},{select:true}],
      buttongroupData: [{},{select:true},{select:true}]
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    group_button: function (event, info) {
      console.log('button_group', event, info)
    },
    group_myStyleB: function (event, info) {
      this.group_button(event, info)
      let temp_uimblock = this.$refs.myStyleB.$el.querySelector('.ui-m-block')
      temp_uimblock.style.width = event.target.offsetWidth + 'px'
      temp_uimblock.style.transform = `translateX(${event.target.offsetLeft}px)`
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    setTimeout(() => {
      let temp_uimblock = this.$refs.myStyleB.$el.querySelector('.ui-m-block')
      let temp_actionmyStyleB = this.$refs.myStyleB.$el.querySelector('.action-myStyleB')
      temp_uimblock.style.width = temp_actionmyStyleB.offsetWidth + 'px'
      temp_uimblock.style.transform = `translateX(${temp_actionmyStyleB.offsetLeft}px)`
    }, 30)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>