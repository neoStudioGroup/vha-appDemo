<style lang="stylus">
.native_PG-badge
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
</style>
--------------------------------------------------------------------------------
<template>
  <div class="native_PG-badge">
    
    <vha-scrollview class="p_UI-content">
      <div class="_UI-button" @click="Badge_hasPermission()">
        检测权限
      </div>
      
      <label class="_UI-input">
        <span class="input-label">数值：</span>
        <input type="text" v-model="Badge_number">
      </label>

      <div class="_UI-button" @click="Badge_set()">
        设置数值({{Badge_number}})
      </div>
      
      <div class="_UI-button" @click="Badge_get()">
        获取数值
      </div>
      
      <div class="_UI-button" @click="Badge_clear()">
        清除数值
      </div>
      
      <div class="_UI-button" @click="Badge_increase()">
        增加 + 10
      </div>
      
      <div class="_UI-button" @click="Badge_decrease()">
        减少 - 10
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGbadge',
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
      Badge_number: 0
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
    Badge_hasPermission: function(){
          this.logText += "有权限" + "\n"
      
      this.$vha.badge.hasPermission((granted) => { 
        if(granted)
          this.logText += "有权限" + "\n"
        else
          this.logText += "无权限" + "\n"
      })
    },
    Badge_set: function(){
      let cb = this.$vha.badge.set(this.Badge_number)
      if(cb)
        this.logText += "设置数值 : " + this.Badge_number + " 成功\n"
      else
        this.logText += "设置数值 : " + this.Badge_number + " 失败\n"
    },
    Badge_get: function(){
      this.$vha.badge.get((badge) => {
        this.logText += "获取数值 : " + badge + "\n"
      })
    },
    Badge_clear: function(){
      this.$vha.badge.clear()
      this.logText += "清除数值" + "\n"
    },
    Badge_increase: function(){
      let cb = this.$vha.badge.increase(10)
      if(cb)
        this.logText += "增加10个成功 " + "\n"
      else
        this.logText += "增加10个失败 " + "\n"
    },
    Badge_decrease: function(){
      let cb = this.$vha.badge.decrease(10)
      if(cb)
        this.logText += "减少10个成功 " + "\n"
      else
        this.logText += "减少10个失败 " + "\n"
    }
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