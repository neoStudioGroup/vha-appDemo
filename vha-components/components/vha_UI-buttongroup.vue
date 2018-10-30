<style lang="stylus">
@import "../assets/stylus/method.styl"
@import "../assets/stylus/mixin.styl"
// UI组件 - 按钮组
// .vha_UI-buttongroup

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div 
    class="vha_UI-buttongroup" 
  >
    1111111
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import vhaButton from "./vha_UI-button";
export default {
  name: 'vhaUIbuttongroup',
  props: {
    //父组件参数
    type: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'none',
          'base',
          'normal',
          'outline'
        ].indexOf(value) > -1;
      }
    }
  },
  data() {
    //动态数据
    return {
      temp_effect: '', 
      temp_color: ''
    }
  },
  components: {
    //组件 - 引入或定义
    vhaButton
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
  }
}
</script>