<style lang="stylus">
.vha_UI-app
  color #444
  height 100%
  background url('../assets/images/bg.png')
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div id="app" class="vha_UI-app">
    <slot></slot>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vhaUIapp',
  props: {
    //父组件参数
    nobg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    //动态数据
    return {
    }
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    // vhaAppEvent事件 处理路由转跳
    window.addEventListener('vhaAppEvent', (event) => {
      // console.log('vhaAppEvent：', event.detail)
      if (event.detail.func === 'push') {
        this.$router.push(event.detail.value)
      } else if (event.detail.func === 'go') {
        this.$router.go(event.detail.value)
      }
    })
    
    if (this.nobg) {
      this.$el.style.background = 'none'
    }
  }
}
</script>