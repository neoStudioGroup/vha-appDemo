<style lang="stylus">
._PG-about
  padding-top rpx(20)
  line-height 1.2
  p
    font-size rpx(30)
    text-align center
    strong
      font-weight bold
  h4
    text-align center
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="_PG-about">
    <vha-scrollview>
      
      <div class="_ph-2x"></div>
      
      <div class="_UI-logo _df _fdc _aic">
        <img src="../assets/images/logo.png" :style="{width:vha_rpx(220)}">
      </div>
      
      <div class="_ph-2x"></div>

      <div class="_UI-logo _df _fdc _aic">
        <img src="../assets/images/components.png" :style="{width:vha_rpx(220)}">
      </div>
      
      <div class="_ph-2x"></div>

      <div class="_UI-logo _df _fdc _aic">
        <img src="../assets/images/native.png" :style="{width:vha_rpx(220)}">
      </div>
      
      <br>
      <p><strong>vha-appDemo </strong> v1.0.0</p>
      <br>
      <p>高效、自由、定制化</p>
      <!-- <h4>快速搭建定制化移动端页面</h4> -->
      <p>Vue hybrid app混合开发集成解决方案</p>
      <br>
      <br>
      <p>web：https://neoStudioGroup.com</p>
      <p>email：neoStudioGroup@163.com</p>
      
      <div class="_ph-6x"></div>
      
    </vha-scrollview>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'PGabout',
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