<style lang="stylus">
.native_PG-index
  .ui-s-wrap
    padding 0 !important
  .vha_UI-list
    span 
      margin-left rpx(10)
      font-size rpx(26)
      color #aaa
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="native_PG-index">
    <vha-scrollview>
      
      <div class="_ph-6x"></div>
      <div class="_df _fdc _aic">
        <img src="../../assets/images/native.png" :style="{width:vha_rpx(220)}">
      </div>
      <div class="_ph-6x"></div>
      
      <vha-list title="系统 System">
        <vha-list-item v-vhaRouter="{push:'native/Splashscreen'}" icon="ion-md-phone-portrait">
          启动屏幕 <span>Splashscreen</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/StatusBar'}" icon="ion-md-remove">
          状态栏 <span>StatusBar</span>
        </vha-list-item>
        <!-- <vha-list-item v-vhaRouter="{push:'native/Badge'}" icon="ion-md-bookmark">
          角标提示 <span>Badge</span>
        </vha-list-item> -->
        <vha-list-item v-vhaRouter="{push:'native/Network'}" icon="ion-ios-wifi">
          网络状态 <span>Network</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Clipboard'}" icon="ion-ios-copy">
          剪贴板 <span>Clipboard</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/JPush'}" icon="ion-md-alert">
          极光推送 <span>JPush</span>
        </vha-list-item>
<!-- <vha-list-item v-vhaRouter="{push:'native/LocalNotification'}" icon="ion-md-alert">
  本地通知 <span>Local Notification</span>
</vha-list-item> -->
        <vha-list-item v-vhaRouter="{push:'native/Toast'}" icon="ion-ios-chatboxes">
          信息提示 <span>Toast</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Dialogs'}" icon="ion-ios-chatbubbles">
          对话框 <span>Dialogs</span>
        </vha-list-item>
<!-- <vha-list-item v-vhaRouter="{push:'native/PinDialog'}" icon="ion-ios-keypad">
  密码框 <span>Pin Dialog</span>
</vha-list-item> -->
<!-- <vha-list-item v-vhaRouter="{push:'native/ActionSheet'}" icon="ion-md-menu">
  上拉菜单  <span>Action Sheet</span>
</vha-list-item> -->
<!-- <vha-list-item v-vhaRouter="{push:'native/ProgressIndicator'}" icon="ion-ios-clock">
  进度对话框 <span>Progress Indicator</span>
</vha-list-item> -->
<!-- <vha-list-item v-vhaRouter="{push:'native/SpinnerDialog'}" icon="ion-ios-time">
  等待对话框 <span>Spinner Dialog</span>
</vha-list-item> -->
<!-- <vha-list-item v-vhaRouter="{push:'native/DatePicker'}" icon="ion-ios-calendar-outline">
  日期选择器 <span>Date Picker</span>
</vha-list-item> -->
        <vha-list-item v-vhaRouter="{push:'native/File'}" icon="ion-ios-folder">
          文件 <span>File</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/FileTransfer'}" icon="ion-ios-cloud-download">
          文件传输 <span>File Transfer</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/FileOpener2'}" icon="ion-ios-folder">
          打开文件 <span>FileOpener2</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/ImagePicker'}" icon="ion-ios-image">
          系统相册 <span>Image Picker</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/NativeAudio'}" icon="ion-md-volume-up">
          播放音乐 <span>Native Audio</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Contacts'}" icon="ion-ios-people">
          通讯录管理 <span>Contacts</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/SMS'}" icon="ion-ios-chatboxes-outline">
          短信 <span>SMS</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/InAppBrowser'}" icon="ion-md-browsers">
          内置浏览器 <span>In App Browser</span>
        </vha-list-item>
        <!-- <vha-list-item v-vhaRouter="{push:'native/Keyboard'}" icon="ion-ios-keypad">
          键盘 <span>Keyboard</span>
        </vha-list-item> -->
        <!-- <vha-list-item v-vhaRouter="{push:'native/Zip'}" icon="ion-ios-photos">
          解压Zip <span>Zip</span>
        </vha-list-item> -->
        <vha-list-item v-vhaRouter="{push:'native/AppVersion'}" icon="ion-logo-android">
          应用版本 <span>App Version</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/AppAvailability'}" icon="ion-ios-information-circle">
          应用是否存在 <span>App Availability</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/AppRate'}" icon="ion-md-star">
          应用评价 <span>App Rate</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/AppPreferences'}" icon="ion-ios-cog">
          应用配置项 <span>App Preferences</span>
        </vha-list-item>
      </vha-list>
      
      <div class="_ph-6x"></div>
      
      <vha-list title="设备 Device">
        <vha-list-item v-vhaRouter="{push:'native/Device'}" icon="ion-ios-phone-portrait">
          设备信息 <span>Device</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/BatteryStatus'}" icon="ion-ios-battery-full">
          电池信息 <span>Battery Status</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Globalization'}" icon="ion-ios-globe">
          地区/时区 <span>Globalization</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Geolocation'}" icon="ion-md-globe">
          地理位置 <span>Geolocation</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Camera'}" icon="ion-ios-camera">
          摄像头拍照 <span>Camera</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Capture'}" icon="ion-ios-videocam">
          录制 <span>Capture</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Media'}" icon="ion-md-microphone">
          录制音频 <span>Media</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/BarcodeScanner'}" icon="ion-ios-barcode">
          条形码/二维码扫描 <span>Barcode Scanner</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/DeviceOrientation'}" icon="ion-ios-compass">
          方向传感器 <span>Device Orientation</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/DeviceMotion'}" icon="ion-ios-contract">
          陀螺仪传感器 <span>Device Motion</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Flashlight'}" icon="ion-ios-flash">
          闪光灯 <span>Flashlight</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Vibration'}" icon="ion-ios-pulse">
          震动 <span>Vibration</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/iBeacon'}" icon="ion-md-wifi">
          iBeacon <span>iBeacon</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/Bluetooth'}" icon="ion-md-bluetooth">
          蓝牙 <span>Bluetooth</span>
        </vha-list-item>
<!-- <vha-list-item v-vhaRouter="{push:'native/TouchID'}" icon="ion-md-hand">
  指纹识别 <span>TouchID</span>
</vha-list-item> -->
<!-- <vha-list-item v-vhaRouter="{push:'native/LaunchNavigator'}" icon="ion-ios-navigate">
  导航 <span>Launch Navigator</span>
</vha-list-item> -->
      </vha-list>
      
      <div class="_ph-6x"></div>
      
      <vha-list title="其它 Other">
        <vha-list-item v-vhaRouter="{push:'native/AppLogin'}" icon="ion-ios-chatbubbles">
          第三方登陆 <span>App Login</span>
        </vha-list-item>
        <vha-list-item v-vhaRouter="{push:'native/SQLite'}" icon="ion-ios-stats">
          本地数据库 <span>SQLite</span>
        </vha-list-item>
<!-- <vha-list-item v-vhaRouter="{push:'native/Keychain'}" icon="ion-ios-analytics">
  私密信息 <span>Keychain</span>
</vha-list-item> -->
      </vha-list>
      
      <div class="_ph-6x"></div>
      
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