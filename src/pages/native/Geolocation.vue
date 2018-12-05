<style lang="stylus">
.native_PG-geolocation
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
    #baiduMap
      width 100%
      height rpx(400)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-geolocation">

    <vha-scrollview class="p_UI-content">
      <div id="baiduMap"></div>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="baidumaplocation()">
        获取我的位置
      </vha-button>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGgeolocation',
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
    baidumaplocation: function () {
      window.baidumap_location.getCurrentPosition((result) => {
        this.logText += JSON.stringify(result, null, 2) + "\n"
        
        var map = new BMap.Map("baiduMap")
        var point = new BMap.Point(result.longitude, result.latitude)
        map.centerAndZoom(point, 14)
        
        var myIcon = new BMap.Icon("assets/images/baidulocation.png", new BMap.Size(30, 30))
        var marker = new BMap.Marker(point, {icon: myIcon})
        map.addOverlay(marker)
        
      }, (error) => {
        this.logText += "错误" + error + "\n"
      })
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
    var map = new BMap.Map("baiduMap")
    var point = new BMap.Point(116.46, 39.92)
    map.centerAndZoom(point, 14)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>