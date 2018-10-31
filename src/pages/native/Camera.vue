<style lang="stylus">
.native_PG-camera
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
    img
      max-width 100%
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-camera">

    <vha-scrollview class="p_UI-content">
      <img :src="myImage">
      <div class="_UI-button" @click="Camera()">
        拍照
      </div>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGcamera',
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
      myImage: null
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
    Camera: function () {
      
      let options = {
        quality: 80,
        destinationType: this.$vha.camera.DestinationType.DATA_URL,
        sourceType: this.$vha.camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: this.$vha.camera.EncodingType.JPEG,
        targetWidth: 200,
        targetHeight: 200,
        popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, this.$vha.camera.PopoverArrowDirection.ARROW_ANY),
        saveToPhotoAlbum: false,
        correctOrientation: true
      }
      
      this.$vha.camera.getPicture((imageData) => {
        this.myImage = "data:image/jpg;base64," + imageData
        this.logText += this.myImage + "\n"
      }, (message) => {
        this.logText += "错误 : " + imageData + "\n"
      }, options)
      
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