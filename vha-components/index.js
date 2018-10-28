import './assets/stylus/global.styl';

import vhaApp from "./components/vha_UI-app";
import vhaRouterview from "./components/vha_UI-routerview";
import vhaScrollview from "./components/vha_UI-scrollview";

import vhaView from "./components/vha_UI-view";
import vhaSubview from "./components/vha_UI-subview";
import vhaButton from "./components/vha_UI-button";
import vhaButtongroup from "./components/vha_UI-buttongroup";

import vhaNavbar from "./components/vha_UI-navbar";
import vhaTabbar from "./components/vha_UI-tabbar";
import vhaTab from "./components/vha_UI-tab";

const vha = {
  install(Vue) {
    
    Vue.prototype.$vhaComponents = {
      // mode: typeof options != "undefined" ? options.mode : "normal",
      keepscroll: 0
    }
    
    Vue.mixin({
      components: {
        //组件 - 引入或定义
        vhaApp,
        vhaRouterview,
        vhaScrollview,
        
        vhaView,
        vhaSubview,
        vhaButton,
        vhaButtongroup,
        
        vhaNavbar,
        vhaTabbar,
        vhaTab
        
        
        
      },
      methods: {
        //方法 - 进入页面创建
      }
    })
    
    // 自定义路由指令 用于控制路由动画
    Vue.directive('vhaRouter', {
      bind: (element, binding) => {
        // console.log('vhaRouter', element, binding)
        let temp_routerFunc = binding.value.push
        let temp_routerValue = binding.value.push
        
        if (binding.value.push) {
          temp_routerFunc = 'push'
          temp_routerValue = binding.value.push
        } else if (binding.value.go) {
          temp_routerFunc = 'go'
          temp_routerValue = binding.value.go
        }
        
        let temp_vhaAppEvent = new CustomEvent('vhaAppEvent', {
          detail: {el: element, func: temp_routerFunc, value: temp_routerValue}
        })
        
        let temp_vhaRouterviewEvent = new CustomEvent('vhaRouterviewEvent', {
          detail: {el: element, animate: binding.value.animate, routerValue: temp_routerValue}
        })
        
        element.addEventListener('click', () => {
          // 通知vhaApp转跳路由
          window.dispatchEvent(temp_vhaAppEvent)
          // 通知vhaRouterview转跳路由动画
          window.dispatchEvent(temp_vhaRouterviewEvent)
        })
      }
    })
    
    
    
  }
}
export default vha