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
    
    Vue.directive('vhaRouter', {
      bind: function (el, binding) {
        console.log(el, binding)
      }
    })
    
    
    
  }
}
export default vha