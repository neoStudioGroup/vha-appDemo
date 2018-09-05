<style lang="stylus">
.p_UI-imagepicker
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
    img
      width 100%
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-imagepicker">

    <vha-scrollview class="p_UI-content">
      
      <img :src="imgurl" v-for="imgurl in imgurls" :key="imgurl.index"/>
      
      <div class="_UI-button" @click="imgPicture()">
        选择图片
      </div>
      
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'p_UI-imagepicker',
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
      imgurls: null
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
    imgPicture: function () {
      let options = {
        maximumImagesCount: 10,
        width: 800,
        height: 800,
        quality: 80
      }
      
      this.$vha.imagepicker.getPictures(
        (results) => {
          this.imgurls = results
          results.forEach(element => {
            this.logText += element + "\n"
          })
        }, (error) => {
          this.logText += "错误 : "+ error + "\n"
        }, options
      )
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