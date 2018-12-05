<style lang="stylus">
.components_PG-style
  .UI-text
    width rpx(360)
  .UI-line
    width rpx(500)
    height rpx(100)
    border-line(1px solid #aaa)
    border-radius-line(rpx(30))
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="components_PG-style">
    <vha-scrollview>
      
      <p class="_UI-title">文本</p>
      
      <div class="_UI-showBox">
        <div class="UI-text _oneEllipsis">超出部分省略号隐藏, 超出部分省略号隐藏</div>
        <br>
        <h1>一级标题 h1</h1>
        <h2>二级标题 h2</h2>
        <h3>三级标题 h3</h3>
        <h4>四级标题 h4</h4>
        <h5>五级标题 h5</h5>
        <h6>六级标题 h6</h6>
      </div>
      
      <p class="_UI-title">可以圆角的 1px线</p>
      
      <div class="_UI-showBox">
        <div class="UI-line"></div>
      </div>
      
      <p class="_UI-title"></p>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGstyle',
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