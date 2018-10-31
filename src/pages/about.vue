<style lang="stylus">
._PG-about
  padding-top rpx(20)
  line-height 1.2
  ._UI-logo
    height rpx(220)
  p
    font-size rpx(36)
    text-align center
    strong
      font-weight bold
  h4
    text-align center
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_PG-about">

    <div class="_UI-logo _df">
      <img src="../assets/images/logo.png">
    </div>
    
    <div class="_UI-logo _df">
      <img src="../assets/images/components.png">
    </div>
    
    <div class="_UI-logo _df">
      <img src="../assets/images/native.png">
    </div>
    
    <br>
    <p><strong>vha-appDemo </strong> v0.5.0</p>
    <br>
    <h4>高效、自由、定制化、实用性的前端库</h4>
    <br>
    <br>
    <p>email：neoStudioGroup@163.com</p>
    <p>web：http://neoStudioGroup.com</p>
    
  </div>
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