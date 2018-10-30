<style lang="stylus">
@import "../assets/stylus/method.styl"

// 超出滚动
// 滚动条
// 当前显示的元素s
// 滚动到指定元素
// 手指超出滚动
// 自动滚动到临近元素
// XY滚动

// UI组件-滚动视图
.vha_UI-scrollview
  height 100%
  overflow-x hidden
  overflow-y auto
  background-color inherit

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="vha_UI-scrollview" :style="{height: calcHeight}" @touchmove="touchmove">
    <div class="ui-s-content">
      <slot></slot>
    </div>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'vha_UI-scrollview',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
    height: {
      type: String
    },
    heightPx: {
      type: String
    },
    keepScroll: {
      type: Boolean,
      default: false
    },
    fixedBottom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    //动态数据
    return {
      aaa: ''
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
    calcHeight: function () {
      if(this.height){
        return (this.height / 2 / 75 ) * 1 + 'rem'
      }else if(this.heightPx){
        return 'calc(100% - ' + (this.heightPx / 2 / 75 ) * 1 + 'rem'
      }
    }
  },
  methods: {
    //方法 - 每次进入页面创建
    handleScroll (event) {
      this.aaa = event.target.scrollTop
      
      // this.$vhaComponents.keepscroll = this.$refs.vhaUIScrollview.scrollTop
      // console.log(this.$vhaComponents.keepscroll)
    },
    touchmove (event) {
      // console.log(event)
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
    // if(this.keepScroll){
      // this.$el.addEventListener('scroll', this.handleScroll)
      // if(this.$vhaComponents.keepscroll > 0){
      //   this.$el.scrollTo(0, this.$vhaComponents.keepscroll)
      // }
    // }
    
  },
  updated() {
    // 数据变动更新后 - 最好使用计算属性或 watch
    // if(this.fixedBottom){
    //   this.$nextTick(function(){
    //     this.$el.scrollTop = this.$el.scrollHeight
    //   })
    // }
  },
  activated() {
    //keep-alive组件激活时
    
    
    // // 如果当前路由设置了缓存, 就从路由读取position到每个vha_UI-scrollview
    // let temp_meta = this.$route.meta
    // console.log(this.$route.meta)
    // if (typeof temp_meta.keepAlive != 'undefined') {
    //   if (temp_meta.keepAlive) {
    //     if (typeof temp_meta.keepAlivePosition != 'undefined') {
    //       temp_meta.keepAlivePosition.forEach(element => {
    //         console.log(111, element.el.html)
    //         if (element.el === this.$el) {
    //           console.log(element.x, element.y)
    //           this.$el.scrollLeft = element.x
    //           this.$el.scrollTop = element.y
    //         }
    //       })
    //     }
        
        
        
    //     // if (typeof temp_meta.keepAlive != 'undefined') {
        
        
        
    //     // let temp_scrollview = this.$el.querySelectorAll('.vha_UI-scrollview')
    //     // let temp_els = []
        
    //     // temp_scrollview.forEach(element => {
    //     //   if (element.scrollLeft + element.scrollTop > 0) {
    //     //     temp_els.push({el:element , x: element.scrollLeft, y: element.scrollTop})
    //     //   }
    //     // })
    //     // temp_meta.keepAlivePosition = temp_els
    //   }
    // }
    // // 
    // // console.log(123, temp_meta.keepAlivePosition)
    
    
    
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
    // if(this.keepScroll){
      // this.$el.removeEventListener('scroll', this.handleScroll)
    // }    
  },
  destroyed() {
    //销毁后
  }
}
</script>