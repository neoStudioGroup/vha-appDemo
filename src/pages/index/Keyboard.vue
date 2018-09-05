<style lang="stylus">
.p_UI-keyboard
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-keyboard">

    <vha-scrollview class="p_UI-content">
      
      <label class="_UI-input">
        <span class="input-label">缩小视图：</span>
        <input type="text" @click="shrinkView(true)">
      </label>
      
      <label class="_UI-input">
        <span class="input-label">不缩小视图：</span>
        <input type="text" @click="shrinkView(false)">
      </label>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-keyboard',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
      logText: "",
    }
  },
  components: {
    //组件 - 引入或定义
    UIlog
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 每次进入页面创建
    shrinkView: function (value) {
      this.$vha.keyboard.shrinkView(value)
    }
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