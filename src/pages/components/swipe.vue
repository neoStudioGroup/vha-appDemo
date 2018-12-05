<style lang="stylus">
.components_PG-swipe
  // .vha_UI-swipe
    // border 2px solid #aaa
  .my-swipe
    height rpx(300)
    font-size 30px
    text-align center
    color #fff
  .slide1
    color #fff
    background-color #0089dc
  .slide2
    color #000
    background-color #ffd705
  .slide3
    color #fff
    background-color #ff2d4b
    
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-swipe">
    <vha-scrollview>
      
      <p class="_UI-title">演示：默认 / 手动改变页面 / 自动回弹 / 默认页</p>
      
      <div class="_UI-showBox">
        <vha-swipe class="my-swipe">
          <vha-swipe-item class="slide1">Slide1</vha-swipe-item>
          <vha-swipe-item class="slide2">Slide2</vha-swipe-item>
          <vha-swipe-item class="slide3">Slide3</vha-swipe-item>
        </vha-swipe>

        <div class="_ph-4x"></div>
        
        <vha-swipe class="my-swipe" ref="mySwipe2" :auto="0" :continuous="false" :show-indicators="false" @change="changeSwipe">
          <vha-swipe-item class="slide1">Slide1</vha-swipe-item>
          <vha-swipe-item class="slide2">Slide2</vha-swipe-item>
          <vha-swipe-item class="slide3">Slide3</vha-swipe-item>
        </vha-swipe>
        
        <div class="_ph-2x"></div>

        <vha-button @click="goto(0)">goto page 1</vha-button>
        <div class="_it-2x"></div>
        <vha-button @click="goto(2)">goto page 3</vha-button>

        <div class="_ph-4x"></div>

        <vha-swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false" :no-drag-when-single="false">
          <vha-swipe-item class="slide1">SINGLE SLIDE</vha-swipe-item>
        </vha-swipe>

        <div class="_ph-4x"></div>

        <vha-swipe class="my-swipe" :defaultIndex="1" :auto="0">
          <vha-swipe-item class="slide1">Slide1</vha-swipe-item>
          <vha-swipe-item class="slide2">Slide2</vha-swipe-item>
          <vha-swipe-item class="slide3">Slide3</vha-swipe-item>
        </vha-swipe>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import popupTest from "./popup/popupTest"
export default {
  name: 'componentsPGswipe',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
    popupTest
  },
  methods: {
    //方法 - 进入页面创建
    goto(index) {
      this.$refs.mySwipe2.goto(index);
    },
    changeSwipe(newIndex, oldIndex) {
      console.log(`swipe from ${oldIndex} to ${newIndex}`);
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