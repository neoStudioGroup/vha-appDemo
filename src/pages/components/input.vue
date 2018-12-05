<style lang="stylus">
.components_PG-input
  .p_UI-user
    height rpx(60)
    border 1px solid #d9d9d9
    border-radius rpx(100)
    >.vha_UI-subview
      padding rpx(10)
      .vha_UI-input
        &::-webkit-input-placeholder
          color #ccc !important
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-input">
    <vha-scrollview>
      
      <p class="_UI-title">类型 type：无 / 正常 / 禁止 / 头像 / 无边框 / 无类型多行 / 多行</p>
      
      <div class="_UI-showBox">
        <vha-input vhaType="none" placeholder="输入框" v-model="inputValue"></vha-input>
        <p>{{inputValue}}</p>
        
        <div class="_ph-4x"></div>
        
        <vha-input :value="'123'" placeholder="输入框" autofocus></vha-input>
        
        <div class="_ph-4x"></div>
        
        <vha-input :value="'123'" placeholder="输入框" disabled></vha-input>
        
        <div class="_ph-4x"></div>
        
        <vha-input :value="'123'" placeholder="输入框" size="full" icon="fa fa-user" maxlength="14"></vha-input>
        
        <div class="_ph-4x"></div>
        
        <vha-input :value="'123'" placeholder="输入框" size="full" icon="fa fa-user" no-border></vha-input>
        
        <div class="_ph-4x"></div>
        
        <vha-input vhaType="none" tag="textarea" :value="'123'" placeholder="输入框" cols="20" rows="4" maxlength="80"></vha-input>
        
        <div class="_ph-4x"></div>
        
        <vha-input tag="textarea" :value="'123'" placeholder="输入框" cols="20" rows="4" size="full"></vha-input>
      </div>
      
      <p class="_UI-title">HTML5输入类型 HTML5 input types：</p>
      
      <div class="_UI-showBox">
        <vha-input placeholder="文本输入框 type=text" type="text"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="密码输入框 type=password" type="password"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="数字输入框 type=number" type="number"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="电话号码输入框 type=tel" type="tel"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="搜索输入框 type=search" type="search"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="邮箱输入框 type=email" type="email"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="日期输入框 type=date" type="date"></vha-input>
        <div class="_ph-2x"></div>
        <vha-input placeholder="月份输入框 type=month" type="month"></vha-input>
      </div>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGinput',
  data() {
    //动态数据
    return {
      inputValue: '123'
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