import './assets/stylus/global.styl';

import vhaApp from "./components/vha_UI-app";
import vhaRouterview from "./components/vha_UI-routerview";

import vhaView from "./components/vha_UI-view";
import vhaSubview from "./components/vha_UI-subview";
import vhaButton from "./components/vha_UI-button";

import vhaNavbar from "./components/vha_UI-navbar";
import vhaScrollview from "./components/vha_UI-scrollview";
import vhaTabs from "./components/vha_UI-tabs";

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
        
        vhaView,
        vhaSubview,
        vhaButton,
        
        vhaNavbar,
        vhaScrollview,
        vhaTabs
      },
      methods: {
        //方法 - 进入页面创建
      }
    })
    
    
    
  }
}
export default vha