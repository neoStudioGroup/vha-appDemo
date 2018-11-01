<style lang="stylus">
// .native_PG-index
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-index">
    
    <vha-scrollview>
      <div class="_UI-logo _df">
        <img src="../../assets/images/native.png">
      </div>
      
      <p class="_UI-title" style="">系统 System</p>
      <ul class="_UI-list">
        <li v-vhaRouter="{push:'native/Splashscreen'}">启动屏幕<span>Splashscreen</span><i class="ion-md-phone-portrait"></i></li>
        <li v-vhaRouter="{push:'native/StatusBar'}">状态栏<span>StatusBar</span><i class="ion-md-remove"></i></li>
        <!-- <li v-vhaRouter="{push:'native/Badge'}">角标提示<span>Badge</span><i class="ion-md-bookmark"></i></li> -->
        <li v-vhaRouter="{push:'native/Network'}">网络状态<span>Network</span><i class="ion-ios-wifi"></i></li>
        <li v-vhaRouter="{push:'native/Clipboard'}">剪贴板<span>Clipboard</span><i class="ion-ios-copy"></i></li>
        <li v-vhaRouter="{push:'native/JPush'}">极光推送<span>JPush</span><i class="ion-md-alert"></i></li>
  <!-- <li v-vhaRouter="{push:'native/LocalNotification'}">本地通知<span>Local Notification</span><i class="ion-md-alert"></i></li> -->
        <li v-vhaRouter="{push:'native/Toast'}">信息提示<span>Toast</span><i class="ion-ios-chatboxes"></i></li>
        <li v-vhaRouter="{push:'native/Dialogs'}">对话框<span>Dialogs</span><i class="ion-ios-chatbubbles"></i></li>
  <!-- <li v-vhaRouter="{push:'native/PinDialog'}">密码框<span>Pin Dialog</span><i class="ion-ios-keypad"></i></li> -->
  <!-- <li v-vhaRouter="{push:'native/ActionSheet'}">上拉菜单 <span>Action Sheet</span><i class="ion-md-menu"></i></li> -->
  <!-- <li v-vhaRouter="{push:'native/ProgressIndicator'}">进度对话框<span>Progress Indicator</span><i class="ion-ios-clock"></i></li> -->
  <!-- <li v-vhaRouter="{push:'native/SpinnerDialog'}">等待对话框<span>Spinner Dialog</span><i class="ion-ios-time"></i></li> -->
  <!-- <li v-vhaRouter="{push:'native/DatePicker'}">日期选择器<span>Date Picker</span><i class="ion-ios-calendar-outline"></i></li> -->
        <li v-vhaRouter="{push:'native/File'}">文件<span>File</span><i class="ion-ios-folder"></i></li>
        <li v-vhaRouter="{push:'native/FileTransfer'}">文件传输<span>File Transfer</span><i class="ion-ios-cloud-download"></i></li>
        <li v-vhaRouter="{push:'native/FileOpener2'}">打开文件<span>FileOpener2</span><i class="ion-ios-folder"></i></li>
        <li v-vhaRouter="{push:'native/ImagePicker'}">系统相册<span>Image Picker</span><i class="ion-ios-image"></i></li>
        <li v-vhaRouter="{push:'native/NativeAudio'}">播放音乐<span>Native Audio</span><i class="ion-md-volume-up"></i></li>
        <li v-vhaRouter="{push:'native/Contacts'}">通讯录管理<span>Contacts</span><i class="ion-ios-people"></i></li>
        <li v-vhaRouter="{push:'native/SMS'}">短信<span>SMS</span><i class="ion-ios-chatboxes-outline"></i></li>
        <li v-vhaRouter="{push:'native/InAppBrowser'}">内置浏览器<span>In App Browser</span><i class="ion-md-browsers"></i></li>
  <!-- <li v-vhaRouter="{push:'native/Keyboard'}">键盘<span>Keyboard</span><i class="ion-ios-keypad"></i></li> -->
        <!-- <li v-vhaRouter="{push:'native/Zip'}">解压Zip<span>Zip</span><i class="ion-ios-photos"></i></li> -->
        <li v-vhaRouter="{push:'native/AppVersion'}">应用版本<span>App Version</span><i class="ion-logo-android"></i></li>
        <li v-vhaRouter="{push:'native/AppAvailability'}">应用是否存在<span>App Availability</span><i class="ion-ios-information-circle"></i></li>
        <li v-vhaRouter="{push:'native/AppRate'}">应用评价<span>App Rate</span><i class="ion-md-star"></i></li>
        <li v-vhaRouter="{push:'native/AppPreferences'}">应用配置项<span>App Preferences</span><i class="ion-ios-cog"></i></li>
      </ul>
      
      <p class="_UI-title">设备 Device</p>
      <ul class="_UI-list">
        <li v-vhaRouter="{push:'native/Device'}">设备信息<span>Device</span><i class="ion-ios-phone-portrait"></i></li>
        <li v-vhaRouter="{push:'native/BatteryStatus'}">电池信息<span>Battery Status</span><i class="ion-ios-battery-full"></i></li>
        <li v-vhaRouter="{push:'native/Globalization'}">地区/时区<span>Globalization</span><i class="ion-ios-globe"></i></li>
        <li v-vhaRouter="{push:'native/Geolocation'}">地理位置<span>Geolocation</span><i class="ion-md-globe"></i></li>
        <li v-vhaRouter="{push:'native/Camera'}">摄像头拍照<span>Camera</span><i class="ion-ios-camera"></i></li>
        <li v-vhaRouter="{push:'native/Capture'}">录制<span>Capture</span><i class="ion-ios-videocam"></i></li>
        <li v-vhaRouter="{push:'native/Media'}">录制音频<span>Media</span><i class="ion-md-microphone"></i></li>
        <li v-vhaRouter="{push:'native/BarcodeScanner'}">条形码/二维码扫描<span>Barcode Scanner</span><i class="ion-ios-barcode"></i></li>
        <li v-vhaRouter="{push:'native/DeviceOrientation'}">方向传感器<span>Device Orientation</span><i class="ion-ios-compass"></i></li>
        <li v-vhaRouter="{push:'native/DeviceMotion'}">陀螺仪传感器<span>Device Motion</span><i class="ion-ios-contract"></i></li>
        <li v-vhaRouter="{push:'native/Flashlight'}">闪光灯<span>Flashlight</span><i class="ion-ios-flash"></i></li>
        <li v-vhaRouter="{push:'native/Vibration'}">震动<span>Vibration</span><i class="ion-ios-pulse"></i></li>
        <li v-vhaRouter="{push:'native/iBeacon'}">iBeacon<span>iBeacon</span><i class="ion-md-wifi"></i></li>
        <li v-vhaRouter="{push:'native/Bluetooth'}">蓝牙<span>Bluetooth</span><i class="ion-md-bluetooth"></i></li>
  <!-- <li v-vhaRouter="{push:'native/TouchID'}">指纹识别<span>TouchID</span><i class="ion-md-hand"></i></li> -->
  <!-- <li v-vhaRouter="{push:'native/LaunchNavigator'}">导航<span>Launch Navigator</span><i class="ion-ios-navigate"></i></li> -->
      </ul>
      
      <p class="_UI-title">其它 Other</p>
      <ul class="_UI-list">
        <li v-vhaRouter="{push:'native/AppLogin'}">QQ 微信登陆<span>App Login</span><i class="ion-ios-chatbubbles"></i></li>
        <li v-vhaRouter="{push:'native/SQLite'}">本地数据库<span>SQLite</span><i class="ion-ios-stats"></i></li>
  <!-- <li v-vhaRouter="{push:'native/Keychain'}">私密信息<span>Keychain</span><i class="ion-ios-analytics"></i></li> -->
      </ul>
      
    </vha-scrollview>
    
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'nativePGindex',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>