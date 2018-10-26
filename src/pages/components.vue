<style lang="stylus">
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <!-- <div class="_PG-components _bc-fff"> -->
    <vha-scrollview class="_PG-components" :keep-scroll="true">
      <!-- UI组件-LOGO -->
      <div class="_UI-logo _df">
        <img src="../assets/images/components.png">
      </div>

      <p class="_UI-title" style="">基础 Base</p>
      <ul class="_UI-list">
        <li @click.once="goto('Button/')">按钮<span>Button</span><i class="fa fa-square"></i></li>
      </ul>
      
      <p class="_UI-title">其它 Other</p>
      <ul class="_UI-list">
        <li @click.once="goto('AppLogin/')">QQ 微信登陆<span>App Login</span><i class="ion-ios-chatbubbles"></i></li>
        <li @click.once="goto('SQLite/')">本地数据库<span>SQLite</span><i class="ion-ios-stats"></i></li>
      </ul>
      
    </vha-scrollview>
  <!-- </div> -->
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'PGcomponents',
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
    goto: function (page) {
      this.$router.push(page)
      this.$store.state.navbarTitle = page.replace("/","")
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