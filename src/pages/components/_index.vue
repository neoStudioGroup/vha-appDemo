<style lang="stylus">
// .components_PG-index
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-scrollview class="components_PG-index" :keep-scroll="true">
    <!-- UI组件-LOGO -->
    <div class="_UI-logo _df">
      <img src="../../assets/images/components.png">
    </div>

    <p class="_UI-title" style="">基础 Base</p>
    <ul class="_UI-list">
      <li @click.once="$router.push('components/Button')">按钮<span>Button</span><i class="fa fa-square-o"></i></li>
      <li @click.once="$router.push('components/buttonGroup')">按钮组<span>Button Group</span><i class="fa fa-th-large"></i></li>
      <li @click.once="$router.push('components/navBar')">导航栏<span>Nav Bar</span><i class="fa fa-minus"></i></li>
      <li @click.once="$router.push('components/tabBar')">标签栏<span>Tab Bar</span><i class="fa fa-ellipsis-h"></i></li>
    </ul>
    
  </vha-scrollview>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'componentsPGindex',
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