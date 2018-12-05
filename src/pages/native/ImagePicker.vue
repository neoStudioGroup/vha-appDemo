<style lang="stylus">
.native_PG-imagepicker
  box-sizing border-box
  display flex
  flex-direction column
  .p_UI-content
    flex 1
    img
      width 100%
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-imagepicker">

    <vha-scrollview class="p_UI-content">
      <img :src="imgurl.uri" v-for="imgurl in imgurls" :key="imgurl.index"/>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="getMedias()">
        选择图片
      </vha-button>
      
      <vha-button block effect="spread" color="error" size="fullWidth" @click="compressImage()">
        压缩图片
      </vha-button>
      
      <img :src="compressImage.uri" v-for="compressImage in compressImages" :key="compressImage.index"/>
    </vha-scrollview>
    
    <UIlog :text="logText"></UIlog>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UIlog from "../../components/_UI-log"

export default {
  name: 'nativePGimagepicker',
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
      imgurls: [],
      compressImages: []
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
    getMedias: function () {
      var args = {
        'selectMode': 101, //101=picker image and video , 100=image , 102=video
        'maxSelectCount': 40, //default 40 (Optional)
        'maxSelectSize': 188743680, //188743680=180M (Optional)
      }

      this.$vha.mediapicker.getMedias(args, (medias) => {
        this.imgurls = medias
        
        // medias.forEach((element, index) => {
        //   this.$vha.mediapicker.extractThumbnail(element, function(data) {
        //     console.log(data)
        //     // imgs[data.index].src = 'data:image/jpegbase64,' + data.thumbnailBase64
        //     // imgs[data.index].setAttribute('style', 'transform:rotate(' + data.exifRotate + 'deg)')
        //   }, function(error) {
        //     console.log(error) 
        //   })
        // })
      }, (error) => {
        this.logText += "错误 : "+ error + "\n"
      })
      
      // !该插件不支持 android 7.0.0
      // let options = {
      //   maximumImagesCount: 10,
      //   width: 800,
      //   height: 800,
      //   quality: 80
      // }
      
      // this.$vha.imagepicker.getPictures(
      //   (results) => {
      //     this.imgurls = results
      //     results.forEach(element => {
      //       this.logText += element + "\n"
      //     })
      //   }, (error) => {
      //     this.logText += "错误 : "+ error + "\n"
      //   }, options
      // )
    },
    compressImage: function () {
      //please:  cordova plugin add cordova-plugin-file-transfer
      //see:  https://github.com/apache/cordova-plugin-file-transfer
      //use medias[index].path

      //OR
      this.compressImages = []

      this.imgurls.forEach(element => {
        // if(resultMedias[i].size>1048576){ resultMedias[i].quality=50; } else {d ataArray[i].quality=100;}
        element.quality = 30
        
        this.$vha.mediapicker.compressImage(element, (compressData) => {
          //user compressData.path upload compress img
          this.compressImages.push(compressData)
        }, (error) => {
          this.logText += "错误 : "+ error + "\n"
        })
      })

      //ios Video transcoding compression to MP4 Event(use AVAssetExportPresetMediumQuality)
      document.addEventListener("MediaPicker.CompressVideoEvent", function(data) {
        alert(data.status + "||" + data.index)
      }, false)
      
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