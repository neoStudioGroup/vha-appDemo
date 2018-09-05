<style lang="stylus">
._UI-log
  // position absolute
  // left 0
  // bottom 0
  // width 100%
  // UI组件-名称
  .ui-l-bar
    width: 100%;
    height: rem(42)
    border: 1px solid #e4e4e4;
    border-left-style: none;
    border-right-style: none;
    background: -webkit-linear-gradient(#fafafa, #ebebeb);
    background: -o-linear-gradient(#fafafa, #ebebeb);
    background: -moz-linear-gradient(#fafafa, #ebebeb);
    background: linear-gradient(#fafafa, #ebebeb);
    color: #ababab;
    text-align: center;
    i 
      font-size: rem(42)
      line-height rem(42)
  .vha_UI-scrollview
    min-height rem(50)
    max-height rem(300)
    background-color #f8f8f8
  .ui-l-pre
    padding rem(20)
    color red
    white-space pre-wrap
    word-wrap break-word

</style>
--------------------------------------------------------------------------------
<template>
  <div class="_UI-log">
    <div class="ui-l-bar"><i class="ion-md-menu"></i></div>
    <vha-scrollview :fixed-bottom="true"><pre class="ui-l-pre">{{text}}</pre></vha-scrollview>
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'UI-log',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
    text: {
      type: String,
      default: ""
    }
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
    //挂载实例后 - this.el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>