<style lang="stylus">
.p_UI-index
  // UI组件-LOGO
  .p_UI-logo
    padding-top rem(50)
    padding-bottom rem(80)
    top 0
    width 100%
    height rem(250)
    background-color #fff
    img
      margin 0 auto
      height rem(250)
    p
      margin 0 auto
      color #888
      
  // UI组件-标题
  .p_UI-title
    position sticky
    top 0
    padding rem(20) rem(14)
    font-size rem(24)
    font-weight bold
    border-left 2px solid #919191
    color #919191
    background-color #f2f2f2
    z-index 99
    
  // UI组件-列表
  .p_UI-list
    li
      display flex
      align-items center
      height rem(100)
      padding 0 rem(40)
      border-1px(#ddd)
      font-size rem(30)
      color #444
      span 
        margin-left rem(10)
        font-size rem(26)
        color #aaa
      i
        position absolute
        right rem(30)
        width rem(60)
        font-size rem(60)
        color #444
      
          
</style>
--------------------------------------------------------------------------------
<template>
  <div class="p_UI-index">
  <!-- <keep-alive include='vha_UI-scrollview'> -->
    
    <vha-scrollview :keep-scroll="true">

      <!-- UI组件-LOGO -->
      <!-- <div class="p_UI-logo _df">
        <img src="../assets/images/logo.png">
      </div> -->

      <p class="p_UI-title" style="">系统 System</p>
      <ul class="p_UI-list">
        <!-- <li @click="goto('Splashscreen/')">启动屏幕<span>Splashscreen</span><i class="ion-md-phone-portrait"></i></li> -->
        <!-- <li @click="goto('StatusBar/')">状态栏<span>StatusBar</span><i class="ion-md-remove"></i></li> -->
        <!-- <li @click="goto('Badge/')">角标提示<span>Badge</span><i class="ion-md-bookmark"></i></li> -->
        <!-- <li @click="goto('Network/')">网络状态<span>Network</span><i class="ion-ios-wifi"></i></li> -->
        <!-- <li @click="goto('Clipboard/')">剪贴板<span>Clipboard</span><i class="ion-ios-copy"></i></li> -->
        <!-- <li @click="goto('JPush/')">极光推送<span>JPush</span><i class="ion-md-alert"></i></li> -->
<!-- <li @click="goto('LocalNotification/')">本地通知<span>Local Notification</span><i class="ion-md-alert"></i></li> -->
        <!-- <li @click="goto('Toast/')">信息提示<span>Toast</span><i class="ion-ios-chatboxes"></i></li> -->
        <!-- <li @click="goto('Dialogs/')">对话框<span>Dialogs</span><i class="ion-ios-chatbubbles"></i></li> -->
 <!-- <li @click="goto('PinDialog/')">密码框<span>Pin Dialog</span><i class="ion-ios-keypad"></i></li> -->
 <!-- <li @click="goto('ActionSheet/')">上拉菜单 <span>Action Sheet</span><i class="ion-md-menu"></i></li> -->
 <!-- <li @click="goto('ProgressIndicator/')">进度对话框<span>Progress Indicator</span><i class="ion-ios-clock"></i></li> -->
 <!-- <li @click="goto('SpinnerDialog/')">等待对话框<span>Spinner Dialog</span><i class="ion-ios-time"></i></li> -->
 <!-- <li @click="goto('DatePicker/')">日期选择器<span>Date Picker</span><i class="ion-ios-calendar-outline"></i></li> -->
        <!-- <li @click="goto('File/')">文件<span>File</span><i class="ion-ios-folder"></i></li> -->
        <!-- <li @click="goto('FileTransfer/')">文件传输<span>File Transfer</span><i class="ion-ios-cloud-download"></i></li> -->
        <!-- <li @click="goto('FileOpener2/')">打开文件<span>FileOpener2</span><i class="ion-ios-folder"></i></li> -->
        <!-- <li @click="goto('ImagePicker/')">系统相册<span>Image Picker</span><i class="ion-ios-image"></i></li> -->
        <!-- <li @click="goto('NativeAudio/')">播放音乐<span>Native Audio</span><i class="ion-md-volume-up"></i></li> -->
        <!-- <li @click="goto('Contacts/')">通讯录管理<span>Contacts</span><i class="ion-ios-people"></i></li> -->
        <!-- <li @click="goto('SMS/')">短信<span>SMS</span><i class="ion-ios-chatboxes-outline"></i></li> -->
        <!-- <li @click="goto('InAppBrowser/')">内置浏览器<span>In App Browser</span><i class="ion-md-browsers"></i></li> -->
<!-- <li @click="goto('Keyboard/')">键盘<span>Keyboard</span><i class="ion-ios-keypad"></i></li> -->
        <!-- <li @click="goto('Zip/')">解压Zip<span>Zip</span><i class="ion-ios-photos"></i></li> -->
        <!-- <li @click="goto('AppVersion/')">应用版本<span>App Version</span><i class="ion-logo-android"></i></li> -->
        <!-- <li @click="goto('AppAvailability/')">应用是否存在<span>App Availability</span><i class="ion-ios-information-circle"></i></li> -->
      </ul>
    <!-- </li> -->
    <!-- <li> -->
      <p class="p_UI-title">设备 Device</p>
      <ul class="p_UI-list">
        <!-- <li @click="goto('Device/')">设备信息<span>Device</span><i class="ion-ios-phone-portrait"></i></li> -->
        <!-- <li @click="goto('BatteryStatus/')">电池信息<span>Battery Status</span><i class="ion-ios-battery-full"></i></li> -->
        <!-- <li @click="goto('Globalization/')">地区/时区<span>Globalization</span><i class="ion-ios-globe"></i></li> -->
        <!-- <li @click="goto('Geolocation/')">地理位置<span>Geolocation</span><i class="ion-md-globe"></i></li> -->
        <!-- <li @click="goto('Camera/')">摄像头拍照<span>Camera</span><i class="ion-ios-camera"></i></li> -->
        <!-- <li @click="goto('Capture/')">录制<span>Capture</span><i class="ion-ios-videocam"></i></li> -->
        <!-- <li @click="goto('Media/')">录制音频<span>Media</span><i class="ion-md-microphone"></i></li> -->
        <!-- <li @click="goto('BarcodeScanner/')">条形码/二维码扫描<span>Barcode Scanner</span><i class="ion-ios-barcode"></i></li> -->
        <!-- <li @click="goto('DeviceOrientation/')">方向传感器<span>Device Orientation</span><i class="ion-ios-compass"></i></li> -->
        <!-- <li @click="goto('DeviceMotion/')">陀螺仪传感器<span>Device Motion</span><i class="ion-ios-contract"></i></li> -->
        <li @click="goto('Flashlight/')">闪光灯<span>Flashlight</span><i class="ion-ios-flash"></i></li>
        <li @click="goto('Vibration/')">震动<span>Vibration</span><i class="ion-ios-pulse"></i></li>
<!-- <li @click="goto('TouchID/')">指纹识别<span>TouchID</span><i class="ion-md-hand"></i></li> -->
<!-- <li @click="goto('LaunchNavigator/')">导航<span>Launch Navigator</span><i class="ion-ios-navigate"></i></li> -->
      </ul>
      
      <p class="p_UI-title">其它 Other</p>
      <ul class="p_UI-list">
        <li @click="goto('AppLogin/')">QQ 微信登陆<span>App Login</span><i class="ion-ios-chatbubbles"></i></li>
        <li @click="goto('SQLite/')">数据储存<span>SQLite</span><i class="ion-ios-stats"></i></li>
        <li @click="goto('Keychain/')">私密信息<span>Keychain</span><i class="ion-ios-analytics"></i></li>
      </ul>
      
    </vha-scrollview>
  <!-- </keep-alive> -->
    
  </div>
</template>
--------------------------------------------------------------------------------
<script type="text/ecmascript-6">
export default {
  name: 'p_UI-index',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
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
    goto: function (page) {
      this.$router.push(page)
      this.$store.state.navbarTitle = page.replace("/","")
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