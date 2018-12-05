<style lang="stylus">
// .comprouterView_PG-routerViewTest
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="comprouterView_PG-routerViewTest">
    <vha-scrollview>
      <div class="_UI-showBox">
        
        <div class="_ph-2x"></div>
        
        <vha-button v-vhaRouter="{go:-1, animate:'none'}">无动画返回</vha-button>
        
        <div class="_ph-2x"></div>
        
        <vha-button v-vhaRouter="{go:-1, animate:'myAnimateout'}">自定义动画返回</vha-button>
        
        <div class="_ph-6x"></div>
        
        <vha-input vhaType="normal" placeholder="在这输入内容测试缓存"></vha-input>
        
        <div class="_ph-4x"></div>
        
        <p>向下滚动测试滚动条位置记录</p>
        <br>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <vha-scrollview :style="{width:vha_rpx(400),height:vha_rpx(200),border:'1px solid #aaa'}">
          内部的滚动域也可以记录位置哦
          <p>↓1</p>
          <p>↓2</p>
          <p>↓3</p>
          <p>↓4</p>
          <p>↓5</p>
          <p>↓6</p>
          <p>↓7</p>
          <p>↓8</p>
          <p>↓9</p>
          <p>↓10</p>
          <p>↓11</p>
          <p>↓12</p>
          <p>↓13</p>
        </vha-scrollview>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <vha-scrollview :style="{width:vha_rpx(400),height:vha_rpx(200),border:'1px solid #aaa'}">
          内部的滚动域也可以记录位置哦
          <p>↓1</p>
          <p>↓2</p>
          <p>↓3</p>
          <p>↓4</p>
          <p>↓5</p>
          <p>↓6</p>
          <p>↓7</p>
          <p>↓8</p>
          <p>↓9</p>
          <p>↓10</p>
          <p>↓11</p>
          <p>↓12</p>
          <p>↓13</p>
        </vha-scrollview>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        <p>↓</p>
        
      </div>
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsrouterViewPGrouterViewTest',
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
  activated() {
    //keep-alive组件激活时
    console.log('缓存页面被激活')
  },
  deactivated() {
    //keep-alive组件停用时
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>