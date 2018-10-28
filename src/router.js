import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index'
import components from './pages/components'
  import components_index from './pages/components/_index'
  // 基础 Base
  import Button from './pages/components/Button'
  import ButtonGroup from './pages/components/ButtonGroup'

import native from './pages/native'
  import native_index from './pages/native/_index'
  // 系统 System
  import Splashscreen from './pages/native/Splashscreen'
  import StatusBar from './pages/native/StatusBar'
  import Badge from './pages/native/Badge'
  import Network from './pages/native/Network'
  import Clipboard from './pages/native/Clipboard'
  import LocalNotification from './pages/native/LocalNotification'
  import JPush from './pages/native/JPush'
  import Toast from './pages/native/Toast'
  import Dialogs from './pages/native/Dialogs'
  import PinDialog from './pages/native/PinDialog'
  import ActionSheet from './pages/native/ActionSheet'
  import ProgressIndicator from './pages/native/ProgressIndicator'
  import SpinnerDialog from './pages/native/SpinnerDialog'
  import DatePicker from './pages/native/DatePicker'
  import File from './pages/native/File'
  import FileTransfer from './pages/native/FileTransfer'
  import FileOpener2 from './pages/native/FileOpener2'
  import NativeAudio from './pages/native/NativeAudio'
  import ImagePicker from './pages/native/ImagePicker'
  import SMS from './pages/native/SMS'
  import Contacts from './pages/native/Contacts'
  import InAppBrowser from './pages/native/InAppBrowser'
  import Keyboard from './pages/native/Keyboard'
  import Zip from './pages/native/Zip'
  import AppVersion from './pages/native/AppVersion'
  import AppAvailability from './pages/native/AppAvailability'
  import AppRate from './pages/native/AppRate'
  import AppPreferences from './pages/native/AppPreferences'

  // 设备 Device
  import Device from './pages/native/Device'
  import BatteryStatus from './pages/native/BatteryStatus'
  import Globalization from './pages/native/Globalization'
  import Geolocation from './pages/native/Geolocation'
  import Camera from './pages/native/Camera'
  import Capture from './pages/native/Capture'
  import Media from './pages/native/Media'
  import BarcodeScanner from './pages/native/BarcodeScanner'
  import DeviceOrientation from './pages/native/DeviceOrientation'
  import DeviceMotion from './pages/native/DeviceMotion'
  import Flashlight from './pages/native/Flashlight'
  import Vibration from './pages/native/Vibration'
  import iBeacon from './pages/native/iBeacon'
  import Bluetooth from './pages/native/Bluetooth'
  import TouchID from './pages/native/TouchID'
  import LaunchNavigator from './pages/native/LaunchNavigator'

  // 其它 Other
  import AppLogin from './pages/native/AppLogin'
  import SQLite from './pages/native/SQLite'
  import Keychain from './pages/native/Keychain'

import about from './pages/about'


Vue.use(Router)
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/components',
    },
    {
      path: '/components',
      name: 'components',
      component: components,
      redirect: '/components/index',
      children: [
        {
          path: '',
          component: components_index,
          meta: {
            vhaNavbar: {
              title: 'components 组件',
              sideButton: 'none'
            },
            keepAlive: true
          }
        },
        
        // 基础 Base
        {
          path: 'Button',
          name: 'Button',
          component: Button,
          meta: {
            vhaNavbar: {
              title: 'Button 按钮'
            }
          }
        },
        {
          path: 'ButtonGroup',
          name: 'ButtonGroup',
          component: ButtonGroup,
          meta: {
            vhaNavbar: {
              title: 'Button Group 按钮组'
            }
          }
        }
      ]
    },
    {
      path: '/native',
      name: 'native',
      component: native,
      redirect: '/native/index',
      children: [
        {
          path: '',
          component: native_index,
          meta: {
            vhaNavbar: {
              title: 'native 设备接口',
              sideButton: 'none'
            },
            keepAlive: true
          }
        },
        
        // 系统 System
        {
          path: 'Splashscreen',
          name: 'Splashscreen',
          component: Splashscreen
        },
        {
          path: 'StatusBar',
          name: 'StatusBar',
          component: StatusBar
        },
        {
          path: 'Badge',
          name: 'Badge',
          component: Badge
        },
        {
          path: 'Network',
          name: 'Network',
          component: Network
        },
        {
          path: 'Clipboard',
          name: 'Clipboard',
          component: Clipboard
        },
        {
          path: 'LocalNotification',
          name: 'LocalNotification',
          component: LocalNotification
        },
        {
          path: 'JPush',
          name: 'JPush',
          component: JPush
        },
        {
          path: 'Toast',
          name: 'Toast',
          component: Toast
        },
        {
          path: 'Dialogs',
          name: 'Dialogs',
          component: Dialogs
        },
        {
          path: 'PinDialog',
          name: 'PinDialog',
          component: PinDialog
        },
        {
          path: 'ActionSheet',
          name: 'ActionSheet',
          component: ActionSheet
        },
        {
          path: 'ProgressIndicator',
          name: 'ProgressIndicator',
          component: ProgressIndicator
        },
        {
          path: 'SpinnerDialog',
          name: 'SpinnerDialog',
          component: SpinnerDialog
        },
        {
          path: 'DatePicker',
          name: 'DatePicker',
          component: DatePicker
        },
        {
          path: 'File',
          name: 'File',
          component: File
        },
        {
          path: 'FileTransfer',
          name: 'FileTransfer',
          component: FileTransfer
        },
        {
          path: 'FileOpener2',
          name: 'FileOpener2',
          component: FileOpener2
        },
        {
          path: 'NativeAudio',
          name: 'NativeAudio',
          component: NativeAudio
        },
        {
          path: 'ImagePicker',
          name: 'ImagePicker',
          component: ImagePicker
        },
        {
          path: 'SMS',
          name: 'SMS',
          component: SMS
        },
        {
          path: 'Contacts',
          name: 'Contacts',
          component: Contacts
        },
        {
          path: 'InAppBrowser',
          name: 'InAppBrowser',
          component: InAppBrowser
        },
        {
          path: 'Keyboard',
          name: 'Keyboard',
          component: Keyboard
        },
        {
          path: 'Zip',
          name: 'Zip',
          component: Zip
        },
        {
          path: 'AppVersion',
          name: 'AppVersion',
          component: AppVersion
        },
        {
          path: 'AppAvailability',
          name: 'AppAvailability',
          component: AppAvailability
        },
        {
          path: 'AppRate',
          name: 'AppRate',
          component: AppRate
        },
        {
          path: 'AppPreferences',
          name: 'AppPreferences',
          component: AppPreferences
        },
        
        // 设备 Device
        {
          path: 'Device',
          name: 'Device',
          component: Device
        },
        {
          path: 'BatteryStatus',
          name: 'BatteryStatus',
          component: BatteryStatus
        },
        {
          path: 'Globalization',
          name: 'Globalization',
          component: Globalization
        },
        {
          path: 'Geolocation',
          name: 'Geolocation',
          component: Geolocation
        },
        {
          path: 'Camera',
          name: 'Camera',
          component: Camera
        },
        {
          path: 'Capture',
          name: 'Capture',
          component: Capture
        },
        {
          path: 'Media',
          name: 'Media',
          component: Media
        },
        {
          path: 'BarcodeScanner',
          name: 'BarcodeScanner',
          component: BarcodeScanner
        },
        {
          path: 'DeviceOrientation',
          name: 'DeviceOrientation',
          component: DeviceOrientation
        },
        {
          path: 'DeviceMotion',
          name: 'DeviceMotion',
          component: DeviceMotion
        },
        {
          path: 'Flashlight',
          name: 'Flashlight',
          component: Flashlight
        },
        {
          path: 'Vibration',
          name: 'Vibration',
          component: Vibration
        },
        {
          path: 'iBeacon',
          name: 'iBeacon',
          component: iBeacon
        },
        {
          path: 'Bluetooth',
          name: 'Bluetooth',
          component: Bluetooth
        },
        {
          path: 'TouchID',
          name: 'TouchID',
          component: TouchID
        },
        {
          path: 'LaunchNavigator',
          name: 'LaunchNavigator',
          component: LaunchNavigator
        },
        
        // 其它 Other
        {
          path: 'AppLogin',
          name: 'AppLogin',
          component: AppLogin
        },
        {
          path: 'SQLite',
          name: 'SQLite',
          component: SQLite
        },
        {
          path: 'Keychain',
          name: 'Keychain',
          component: Keychain
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        vhaNavbar: {
          title: '关于',
          sideButton: 'none'
        },
        keepAlive: true
      }
    }
    
  ]
})