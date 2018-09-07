import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index.vue'

// 系统 System
import Splashscreen from './pages/index/Splashscreen'
import StatusBar from './pages/index/StatusBar'
import Badge from './pages/index/Badge'
import Network from './pages/index/Network'
import Clipboard from './pages/index/Clipboard'
import LocalNotification from './pages/index/LocalNotification'
import JPush from './pages/index/JPush'
import Toast from './pages/index/Toast'
import Dialogs from './pages/index/Dialogs'
import PinDialog from './pages/index/PinDialog'
import ActionSheet from './pages/index/ActionSheet'
import ProgressIndicator from './pages/index/ProgressIndicator'
import SpinnerDialog from './pages/index/SpinnerDialog'
import DatePicker from './pages/index/DatePicker'
import File from './pages/index/File'
import FileTransfer from './pages/index/FileTransfer'
import FileOpener2 from './pages/index/FileOpener2'
import NativeAudio from './pages/index/NativeAudio'
import ImagePicker from './pages/index/ImagePicker'
import SMS from './pages/index/SMS'
import Contacts from './pages/index/Contacts'
import InAppBrowser from './pages/index/InAppBrowser'
import Keyboard from './pages/index/Keyboard'
import Zip from './pages/index/Zip'
import AppVersion from './pages/index/AppVersion'
import AppAvailability from './pages/index/AppAvailability'
import AppRate from './pages/index/AppRate'
import AppPreferences from './pages/index/AppPreferences'

// 设备 Device
import Device from './pages/index/Device'
import BatteryStatus from './pages/index/BatteryStatus'
import Globalization from './pages/index/Globalization'
import Geolocation from './pages/index/Geolocation'
import Camera from './pages/index/Camera'
import Capture from './pages/index/Capture'
import Media from './pages/index/Media'
import BarcodeScanner from './pages/index/BarcodeScanner'
import DeviceOrientation from './pages/index/DeviceOrientation'
import DeviceMotion from './pages/index/DeviceMotion'
import Flashlight from './pages/index/Flashlight'
import Vibration from './pages/index/Vibration'
import iBeacon from './pages/index/iBeacon'
import Bluetooth from './pages/index/Bluetooth'
import TouchID from './pages/index/TouchID'
import LaunchNavigator from './pages/index/LaunchNavigator'

// 其它 Other
import AppLogin from './pages/index/AppLogin'
import SQLite from './pages/index/SQLite'
import Keychain from './pages/index/Keychain'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      }
    },
  
    // 系统 System
    {
      path: '/Splashscreen',
      name: 'Splashscreen',
      component: Splashscreen
    },
    {
      path: '/StatusBar',
      name: 'StatusBar',
      component: StatusBar
    },
    {
      path: '/Badge',
      name: 'Badge',
      component: Badge
    },
    {
      path: '/Network',
      name: 'Network',
      component: Network
    },
    {
      path: '/Clipboard',
      name: 'Clipboard',
      component: Clipboard
    },
    {
      path: '/LocalNotification',
      name: 'LocalNotification',
      component: LocalNotification
    },
    {
      path: '/JPush',
      name: 'JPush',
      component: JPush
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/Dialogs',
      name: 'Dialogs',
      component: Dialogs
    },
    {
      path: '/PinDialog',
      name: 'PinDialog',
      component: PinDialog
    },
    {
      path: '/ActionSheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/ProgressIndicator',
      name: 'ProgressIndicator',
      component: ProgressIndicator
    },
    {
      path: '/SpinnerDialog',
      name: 'SpinnerDialog',
      component: SpinnerDialog
    },
    {
      path: '/DatePicker',
      name: 'DatePicker',
      component: DatePicker
    },
    {
      path: '/File',
      name: 'File',
      component: File
    },
    {
      path: '/FileTransfer',
      name: 'FileTransfer',
      component: FileTransfer
    },
    {
      path: '/FileOpener2',
      name: 'FileOpener2',
      component: FileOpener2
    },
    {
      path: '/NativeAudio',
      name: 'NativeAudio',
      component: NativeAudio
    },
    {
      path: '/ImagePicker',
      name: 'ImagePicker',
      component: ImagePicker
    },
    {
      path: '/SMS',
      name: 'SMS',
      component: SMS
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/InAppBrowser',
      name: 'InAppBrowser',
      component: InAppBrowser
    },
    {
      path: '/Keyboard',
      name: 'Keyboard',
      component: Keyboard
    },
    {
      path: '/Zip',
      name: 'Zip',
      component: Zip
    },
    {
      path: '/AppVersion',
      name: 'AppVersion',
      component: AppVersion
    },
    {
      path: '/AppAvailability',
      name: 'AppAvailability',
      component: AppAvailability
    },
    {
      path: '/AppRate',
      name: 'AppRate',
      component: AppRate
    },
    {
      path: '/AppPreferences',
      name: 'AppPreferences',
      component: AppPreferences
    },
    
    
    // 设备 Device
    {
      path: '/Device',
      name: 'Device',
      component: Device
    },
    {
      path: '/BatteryStatus',
      name: 'BatteryStatus',
      component: BatteryStatus
    },
    {
      path: '/Globalization',
      name: 'Globalization',
      component: Globalization
    },
    {
      path: '/Geolocation',
      name: 'Geolocation',
      component: Geolocation
    },
    {
      path: '/Camera',
      name: 'Camera',
      component: Camera
    },
    {
      path: '/Capture',
      name: 'Capture',
      component: Capture
    },
    {
      path: '/Media',
      name: 'Media',
      component: Media
    },
    {
      path: '/BarcodeScanner',
      name: 'BarcodeScanner',
      component: BarcodeScanner
    },
    {
      path: '/DeviceOrientation',
      name: 'DeviceOrientation',
      component: DeviceOrientation
    },
    {
      path: '/DeviceMotion',
      name: 'DeviceMotion',
      component: DeviceMotion
    },
    {
      path: '/Flashlight',
      name: 'Flashlight',
      component: Flashlight
    },
    {
      path: '/Vibration',
      name: 'Vibration',
      component: Vibration
    },
    {
      path: '/iBeacon',
      name: 'iBeacon',
      component: iBeacon
    },
    {
      path: '/Bluetooth',
      name: 'Bluetooth',
      component: Bluetooth
    },
    {
      path: '/TouchID',
      name: 'TouchID',
      component: TouchID
    },
    {
      path: '/LaunchNavigator',
      name: 'LaunchNavigator',
      component: LaunchNavigator
    },
    
    // 其它 Other
    {
      path: '/AppLogin',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/SQLite',
      name: 'SQLite',
      component: SQLite
    },
    {
      path: '/Keychain',
      name: 'Keychain',
      component: Keychain
    }
    
  ]
})