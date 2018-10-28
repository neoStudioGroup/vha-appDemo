<style lang="stylus">
@import "../assets/stylus/method.styl"

// UI组件-内容
.vha_UI-tabbar
  border-1px-bottom-top(#ddd)
  height rpx(90)
  background-color #fff
  display flex
  justify-content: space-between
  .ui-t-tab
    flex 1

</style>
--------------------------------------------------------------------------------
<template>
  <div class="vha_UI-tabbar">
<!--     组件 API 实例(特效 效果) 关于 -->
    
    <div class="ui-t-tab">
      <!-- <router-link to="/components" tag="vha-button" :type="base" :size="full"> -->
      
        <vha-button type="none" size="full">
          <vha-view class="_jcc" direction="vertical">
            <i class="fa fa-home"></i>
            <span>主页</span>
          </vha-view>
        </vha-button>
      
        <!-- <a v-vhaRouter="{path:'/components', animate:'none'}">组件</a> -->
      <!-- </router-link> -->
    </div>
    <div class="ui-t-tab">
      <router-link tag="li" to="/native">
        <a>功能</a>
      </router-link>
    </div>
    <div class="ui-t-tab">
      <router-link tag="li" to="/about">
        <a>关于</a>
      </router-link>
    </div>
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'vha_UI-tabbar',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
  },
  watch: {
    //观察 - 数据或方法
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>