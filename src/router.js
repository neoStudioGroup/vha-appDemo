import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index'
import components from './pages/components'
  import components_index from './pages/components/_index'
  // 基础 Base
  import comp_routerView from './pages/components/routerView'
    import comp_routerView_index from './pages/components/routerView/_index'
    import comp_routerViewTest from './pages/components/routerView/routerViewTest'
  import comp_scrollView from './pages/components/scrollView'
  import comp_style from './pages/components/style'
  import comp_view from './pages/components/view'
  import comp_navBar from './pages/components/navBar'
  import comp_tabBar from './pages/components/tabBar'
  import comp_popup from './pages/components/popup'
  // 表单 Forms
  import comp_button from './pages/components/button'
  import comp_buttonGroup from './pages/components/buttonGroup'
  import comp_input from './pages/components/input'
  import comp_switch from './pages/components/switch'
  import comp_radio from './pages/components/radio'
  import comp_checkbox from './pages/components/checkbox'
  import comp_slider from './pages/components/slider'
  // 扩展 Expansion
  import comp_swipe from './pages/components/swipe'
  import comp_badge from './pages/components/badge'
  import comp_dialog from './pages/components/dialog'
  import comp_actionSheet from './pages/components/actionSheet'
  import comp_toast from './pages/components/toast'
  import comp_popover from './pages/components/popover'
  
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
      component: components,
      children: [
        {
          path: '',
          name: 'componentsindex',
          component: components_index,
          meta: {
            vhaNavbar: {
              title: 'Components 组件',
              sideButton: 'none'
            },
            keepAlive: true
          }
        },
        
        
        // 基础 Base
        {
          path: 'routerView',
          component: comp_routerView,
          children: [
            {
              path: '',
              name: 'routerViewindex',
              component: comp_routerView_index,
              meta: {
                vhaNavbar: {
                  title: 'Router View 路由视图'
                },
                vhaTabbar: {show: false}
              }
            },
            {
              path: 'routerViewTest',
              name: 'comp_routerViewTest',
              component: comp_routerViewTest,
              meta: {
                vhaNavbar: {
                  title: 'routerViewTest 路由视图测试'
                },
                vhaTabbar: {show: false}
              }
            }
          ]
        },
        {
          path: 'scrollView',
          name: 'comp_scrollView',
          component: comp_scrollView,
          meta: {
            vhaNavbar: {
              title: 'Scroll View 滚动视图'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'style',
          name: 'comp_style',
          component: comp_style,
          meta: {
            vhaNavbar: {
              title: 'style 风格'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'view',
          name: 'comp_view',
          component: comp_view,
          meta: {
            vhaNavbar: {
              title: 'view 视图区域'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'navBar',
          name: 'comp_navBar',
          component: comp_navBar,
          meta: {
            vhaNavbar: {
              title: 'NavBar 导航栏'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'tabBar',
          name: 'comp_tabBar',
          component: comp_tabBar,
          meta: {
            vhaNavbar: {
              title: 'TabBar 标签栏'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'popup',
          name: 'comp_popup',
          component: comp_popup,
          meta: {
            vhaNavbar: {
              title: 'Popup 弹出层'
            },
            vhaTabbar: {show: false}
          }
        },
        
        // 表单 Forms
        {
          path: 'button',
          name: 'comp_button',
          component: comp_button,
          meta: {
            vhaNavbar: {
              title: 'Button 按钮'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'buttonGroup',
          name: 'comp_buttonGroup',
          component: comp_buttonGroup,
          meta: {
            vhaNavbar: {
              title: 'Button Group 按钮组'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'input',
          name: 'comp_input',
          component: comp_input,
          meta: {
            vhaNavbar: {
              title: 'Input 输入框'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'switch',
          name: 'comp_switch',
          component: comp_switch,
          meta: {
            vhaNavbar: {
              title: 'Switch 开关'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'radio',
          name: 'comp_radio',
          component: comp_radio,
          meta: {
            vhaNavbar: {
              title: 'Radio 单选框'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'checkbox',
          name: 'comp_checkbox',
          component: comp_checkbox,
          meta: {
            vhaNavbar: {
              title: 'Checkbox 多选框'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'slider',
          name: 'comp_slider',
          component: comp_slider,
          meta: {
            vhaNavbar: {
              title: 'Slider 滑块'
            },
            vhaTabbar: {show: false}
          }
        },

        
        // 扩展 Expansion
        {
          path: 'swipe',
          name: 'comp_swipe',
          component: comp_swipe,
          meta: {
            vhaNavbar: {
              title: 'Swipe 轮播'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'badge',
          name: 'comp_badge',
          component: comp_badge,
          meta: {
            vhaNavbar: {
              title: 'Badge 角标'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'dialog',
          name: 'comp_dialog',
          component: comp_dialog,
          meta: {
            vhaNavbar: {
              title: 'Dialog 对话框'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'actionSheet',
          name: 'comp_actionSheet',
          component: comp_actionSheet,
          meta: {
            vhaNavbar: {
              title: 'Action Sheet 上拉菜单'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'toast',
          name: 'comp_toast',
          component: comp_toast,
          meta: {
            vhaNavbar: {
              title: 'Toast 信息提示'
            },
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'popover',
          name: 'comp_popover',
          component: comp_popover,
          meta: {
            vhaNavbar: {
              title: 'Popover 弹出气泡'
            },
            vhaTabbar: {show: false}
          }
        }
        
        
      ]
    },
    {
      path: '/native',
      component: native,
      children: [
        {
          path: '',
          name: 'nativeindex',
          component: native_index,
          meta: {
            vhaNavbar: {
              title: 'Native 设备接口',
              sideButton: 'none'
            },
            keepAlive: true
          }
        },
        
        // 系统 System
        {
          path: 'Splashscreen',
          name: 'Splashscreen',
          component: Splashscreen, 
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'StatusBar',
          name: 'StatusBar',
          component: StatusBar,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Badge',
          name: 'Badge',
          component: Badge,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Network',
          name: 'Network',
          component: Network,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Clipboard',
          name: 'Clipboard',
          component: Clipboard,
          meta: {
            vhaTabbar: {show: false},
          }
        },
        {
          path: 'LocalNotification',
          name: 'LocalNotification',
          component: LocalNotification,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'JPush',
          name: 'JPush',
          component: JPush,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Toast',
          name: 'Toast',
          component: Toast,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Dialogs',
          name: 'Dialogs',
          component: Dialogs,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'PinDialog',
          name: 'PinDialog',
          component: PinDialog,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'ActionSheet',
          name: 'ActionSheet',
          component: ActionSheet,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'ProgressIndicator',
          name: 'ProgressIndicator',
          component: ProgressIndicator,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'SpinnerDialog',
          name: 'SpinnerDialog',
          component: SpinnerDialog,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'DatePicker',
          name: 'DatePicker',
          component: DatePicker,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'File',
          name: 'File',
          component: File,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'FileTransfer',
          name: 'FileTransfer',
          component: FileTransfer,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'FileOpener2',
          name: 'FileOpener2',
          component: FileOpener2,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'NativeAudio',
          name: 'NativeAudio',
          component: NativeAudio,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'ImagePicker',
          name: 'ImagePicker',
          component: ImagePicker,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'SMS',
          name: 'SMS',
          component: SMS,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Contacts',
          name: 'Contacts',
          component: Contacts,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'InAppBrowser',
          name: 'InAppBrowser',
          component: InAppBrowser,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Keyboard',
          name: 'Keyboard',
          component: Keyboard,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Zip',
          name: 'Zip',
          component: Zip,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'AppVersion',
          name: 'AppVersion',
          component: AppVersion,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'AppAvailability',
          name: 'AppAvailability',
          component: AppAvailability,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'AppRate',
          name: 'AppRate',
          component: AppRate,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'AppPreferences',
          name: 'AppPreferences',
          component: AppPreferences,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        
        // 设备 Device
        {
          path: 'Device',
          name: 'Device',
          component: Device,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'BatteryStatus',
          name: 'BatteryStatus',
          component: BatteryStatus,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Globalization',
          name: 'Globalization',
          component: Globalization,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Geolocation',
          name: 'Geolocation',
          component: Geolocation,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Camera',
          name: 'Camera',
          component: Camera,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Capture',
          name: 'Capture',
          component: Capture,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Media',
          name: 'Media',
          component: Media,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'BarcodeScanner',
          name: 'BarcodeScanner',
          component: BarcodeScanner,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'DeviceOrientation',
          name: 'DeviceOrientation',
          component: DeviceOrientation,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'DeviceMotion',
          name: 'DeviceMotion',
          component: DeviceMotion,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Flashlight',
          name: 'Flashlight',
          component: Flashlight,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Vibration',
          name: 'Vibration',
          component: Vibration,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'iBeacon',
          name: 'iBeacon',
          component: iBeacon,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Bluetooth',
          name: 'Bluetooth',
          component: Bluetooth,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        
        // 其它 Other
        {
          path: 'AppLogin',
          name: 'AppLogin',
          component: AppLogin,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'SQLite',
          name: 'SQLite',
          component: SQLite,
          meta: {
            vhaTabbar: {show: false}
          }
        },
        {
          path: 'Keychain',
          name: 'Keychain',
          component: Keychain,
          meta: {
            vhaTabbar: {show: false}
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        vhaNavbar: {
          title: 'About',
          sideButton: 'none'
        }
      }
    }
    
  ]
})